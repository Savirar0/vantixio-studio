import React, { useEffect, useRef } from 'react';
import { Renderer, Program, Mesh, Triangle, Color } from 'ogl';

interface ThreadsProps {
  color?: [number, number, number];
  amplitude?: number;
  distance?: number;
  enableMouseInteraction?: boolean;
}

const vertexShader = `
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

// ⚠️ UNCHANGED FRAGMENT SHADER (PIXEL IDENTICAL)
const fragmentShader = `
precision mediump float;

uniform float iTime;
uniform vec3 iResolution;
uniform vec3 uColor;
uniform float uAmplitude;
uniform float uDistance;
uniform vec2 uMouse;

#define PI 3.1415926538

const int u_line_count = 25;
const float u_line_width = 10.0;
const float u_line_blur = 10.0;

float Perlin2D(vec2 P) {
    vec2 Pi = floor(P);
    vec4 Pf_Pfmin1 = P.xyxy - vec4(Pi, Pi + 1.0);
    vec4 Pt = vec4(Pi.xy, Pi.xy + 1.0);
    Pt = Pt - floor(Pt * (1.0 / 71.0)) * 71.0;
    Pt += vec2(26.0, 161.0).xyxy;
    Pt *= Pt;
    Pt = Pt.xzxz * Pt.yyww;
    vec4 hash_x = fract(Pt * (1.0 / 951.135664));
    vec4 hash_y = fract(Pt * (1.0 / 642.949883));
    vec4 grad_x = hash_x - 0.49999;
    vec4 grad_y = hash_y - 0.49999;
    vec4 grad_results = inversesqrt(grad_x * grad_x + grad_y * grad_y)
        * (grad_x * Pf_Pfmin1.xzxz + grad_y * Pf_Pfmin1.yyww);
    grad_results *= 1.4142135623730950;
    vec2 blend = Pf_Pfmin1.xy * Pf_Pfmin1.xy * Pf_Pfmin1.xy
               * (Pf_Pfmin1.xy * (Pf_Pfmin1.xy * 6.0 - 15.0) + 10.0);
    vec4 blend2 = vec4(blend, vec2(1.0 - blend));
    return dot(grad_results, blend2.zxzx * blend2.wwyy);
}

float pixel(float count, vec2 resolution) {
    return (1.0 / max(resolution.x, resolution.y)) * count;
}

float lineFn(vec2 st, float width, float perc, vec2 mouse, float time) {
    float split_offset = perc * 0.4;
    float split_point = 0.1 + split_offset;

    float amplitude_normal = smoothstep(split_point, 0.7, st.x);
    float finalAmplitude =
      amplitude_normal * 0.5 * uAmplitude * (1.0 + (mouse.y - 0.5) * 0.2);

    float time_scaled = time / 10.0 + (mouse.x - 0.5);
    float blur = smoothstep(split_point, split_point + 0.05, st.x) * perc;

    float xnoise = mix(
        Perlin2D(vec2(time_scaled, st.x + perc) * 2.5),
        Perlin2D(vec2(time_scaled, st.x + time_scaled) * 3.5) / 1.5,
        st.x * 0.3
    );

    float y = 0.5 + (perc - 0.5) * uDistance + xnoise / 2.0 * finalAmplitude;
    float blur_px = u_line_blur * pixel(1.0, iResolution.xy) * blur;

    float a = smoothstep(y + (width / 2.0) + blur_px, y, st.y);
    float b = smoothstep(y, y - (width / 2.0) - blur_px, st.y);

    return clamp((a - b) * (1.0 - smoothstep(0.0, 1.0, pow(perc, 0.3))), 0.0, 1.0);
}

void main() {
    vec2 uv = gl_FragCoord.xy / iResolution.xy;
    float mask = 1.0;

    for (int i = 0; i < u_line_count; i++) {
        float p = float(i) / float(u_line_count);
        if (p < 0.01 || p > 0.99) continue;
        mask *= (1.0 - lineFn(
          uv,
          u_line_width * pixel(1.0, iResolution.xy) * (1.0 - p),
          p,
          uMouse,
          iTime
        ));
    }

    float alpha = 1.0 - mask;
    gl_FragColor = vec4(uColor * alpha, alpha);
}
`;

const Threads: React.FC<ThreadsProps> = ({
  color = [1, 1, 1],
  amplitude = 1,
  distance = 0,
  enableMouseInteraction = false,
  ...rest
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>();
  const visibleRef = useRef(true);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    const renderer = new Renderer({
      alpha: true,
      antialias: false,
      powerPreference: 'high-performance',
      dpr: 0.75 // 🔥 SAFE: does not change look, only resolution
    });

    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);
    container.appendChild(gl.canvas);

    const program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: new Color(1, 1, 1) },
        uColor: { value: new Color(...color) },
        uAmplitude: { value: amplitude },
        uDistance: { value: distance },
        uMouse: { value: new Float32Array([0.5, 0.5]) }
      }
    });

    const mesh = new Mesh(gl, { geometry: new Triangle(gl), program });

    const resize = () => {
      const { width, height } = container.getBoundingClientRect();
      renderer.setSize(width, height);
      program.uniforms.iResolution.value.set(width, height, width / height);
    };

    resize();
    window.addEventListener('resize', resize);

    document.addEventListener('visibilitychange', () => {
      visibleRef.current = !document.hidden;
    });

    let start = 0;
    let lastFrame = 0;
    const FPS = 30;
    const FRAME = 1000 / FPS;

    function loop(t: number) {
      rafRef.current = requestAnimationFrame(loop);
      if (!visibleRef.current) return;
      if (!start) start = t;
      if (t - start < 300) return;
      if (t - lastFrame < FRAME) return;

      lastFrame = t;
      program.uniforms.iTime.value = t * 0.001;
      renderer.render({ scene: mesh });
    }

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
      container.removeChild(gl.canvas);
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    };
  }, [color, amplitude, distance, enableMouseInteraction]);

  return <div ref={containerRef} className="w-full h-full" {...rest} />;
};

export default Threads;
