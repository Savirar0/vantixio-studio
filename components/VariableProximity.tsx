import { forwardRef, useMemo, useRef, useEffect, MutableRefObject, CSSProperties, HTMLAttributes, useCallback } from 'react';
import { motion } from 'motion/react';


// Throttle helper - limits function calls
function throttle<T extends (...args: any[]) => any>(func: T, limit: number): T {
  let inThrottle: boolean;
  return ((...args: any[]) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }) as T;
}

function useMousePositionRef(containerRef: MutableRefObject<HTMLElement | null>) {
  const positionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (x: number, y: number) => {
      if (containerRef?.current) {
        const rect = containerRef.current.getBoundingClientRect();
        positionRef.current = { x: x - rect.left, y: y - rect.top };
      } else {
        positionRef.current = { x, y };
      }
    };

    // Throttle to 30fps instead of every mousemove
    const handleMouseMove = throttle((ev: MouseEvent) => {
      updatePosition(ev.clientX, ev.clientY);
    }, 33); // ~30fps

    const handleTouchMove = throttle((ev: TouchEvent) => {
      const touch = ev.touches[0];
      updatePosition(touch.clientX, touch.clientY);
    }, 33);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [containerRef]);

  return positionRef;
}

interface VariableProximityProps extends HTMLAttributes<HTMLSpanElement> {
  label: string;
  fromFontVariationSettings: string;
  toFontVariationSettings: string;
  containerRef: MutableRefObject<HTMLElement | null>;
  radius?: number;
  falloff?: 'linear' | 'exponential' | 'gaussian';
  className?: string;
  onClick?: () => void;
  style?: CSSProperties;
}

const VariableProximity = forwardRef<HTMLSpanElement, VariableProximityProps>((props, ref) => {
  const {
    label,
    fromFontVariationSettings,
    toFontVariationSettings,
    containerRef,
    radius = 50,
    falloff = 'linear',
    className = '',
    onClick,
    style,
    ...restProps
  } = props;

  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const mousePositionRef = useMousePositionRef(containerRef);
  const lastPositionRef = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });
  const animationFrameRef = useRef<number>();
  const letterCentersRef = useRef<{ x: number; y: number }[]>([]);
  const isActiveRef = useRef(true);

  const parsedSettings = useMemo(() => {
    const parseSettings = (settingsStr: string) =>
      new Map(
        settingsStr
          .split(',')
          .map(s => s.trim())
          .map(s => {
            const [name, value] = s.split(' ');
            return [name.replace(/['"]/g, ''), parseFloat(value)];
          })
      );

    const fromSettings = parseSettings(fromFontVariationSettings);
    const toSettings = parseSettings(toFontVariationSettings);

    return Array.from(fromSettings.entries()).map(([axis, fromValue]) => ({
      axis,
      fromValue,
      toValue: toSettings.get(axis) ?? fromValue
    }));
  }, [fromFontVariationSettings, toFontVariationSettings]);

  // Cache letter center positions - only recalculate on resize
  const calculateLetterCenters = useCallback(() => {
    if (!containerRef?.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    
    letterCentersRef.current = letterRefs.current.map(letterRef => {
      if (!letterRef) return { x: 0, y: 0 };
      const rect = letterRef.getBoundingClientRect();
      return {
        x: rect.left + rect.width / 2 - containerRect.left,
        y: rect.top + rect.height / 2 - containerRect.top
      };
    });
  }, [containerRef]);

  const calculateDistance = useCallback((x1: number, y1: number, x2: number, y2: number) => {
    const dx = x2 - x1;
    const dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
  }, []);

  const calculateFalloff = useCallback((distance: number) => {
    const norm = Math.min(Math.max(1 - distance / radius, 0), 1);
    switch (falloff) {
      case 'exponential':
        return norm * norm;
      case 'gaussian':
        return Math.exp(-((distance / (radius / 2)) ** 2) / 2);
      case 'linear':
      default:
        return norm;
    }
  }, [radius, falloff]);

  // Main animation loop - optimized
  const animate = useCallback(() => {
    if (!containerRef?.current || !isActiveRef.current) return;
    
    const { x, y } = mousePositionRef.current;
    
    // Skip if mouse hasn't moved
    if (lastPositionRef.current.x === x && lastPositionRef.current.y === y) {
      animationFrameRef.current = requestAnimationFrame(animate);
      return;
    }
    
    lastPositionRef.current = { x, y };

    // Batch DOM updates
    letterRefs.current.forEach((letterRef, index) => {
      if (!letterRef || !letterCentersRef.current[index]) return;

      const { x: centerX, y: centerY } = letterCentersRef.current[index];
      const distance = calculateDistance(x, y, centerX, centerY);

      if (distance >= radius) {
        if (letterRef.style.fontVariationSettings !== fromFontVariationSettings) {
          letterRef.style.fontVariationSettings = fromFontVariationSettings;
        }
        return;
      }

      const falloffValue = calculateFalloff(distance);
      const newSettings = parsedSettings
        .map(({ axis, fromValue, toValue }) => {
          const interpolatedValue = fromValue + (toValue - fromValue) * falloffValue;
          return `'${axis}' ${interpolatedValue.toFixed(1)}`;
        })
        .join(', ');

      letterRef.style.fontVariationSettings = newSettings;
    });

    animationFrameRef.current = requestAnimationFrame(animate);
  }, [
    containerRef,
    mousePositionRef,
    fromFontVariationSettings,
    parsedSettings,
    radius,
    calculateDistance,
    calculateFalloff
  ]);

  // Initialize and cleanup
  useEffect(() => {
    // Calculate letter positions after mount
    const timeout = setTimeout(() => {
      calculateLetterCenters();
      animate();
    }, 50);

    // Recalculate on resize - throttled
    const handleResize = throttle(() => {
      calculateLetterCenters();
    }, 200);
    
    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timeout);
      isActiveRef.current = false;
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [calculateLetterCenters, animate]);

  const words = label.split(' ');
  let letterIndex = 0;

  return (
    <span
      ref={ref}
      onClick={onClick}
      style={{
        display: 'inline',
        ...style
      }}
      className={className}
      {...restProps}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap">
          {word.split('').map(letter => {
            const currentLetterIndex = letterIndex++;
            return (
              <motion.span
                key={currentLetterIndex}
                ref={el => {
                  letterRefs.current[currentLetterIndex] = el;
                }}
                style={{
                  display: 'inline-block',
                  fontVariationSettings: fromFontVariationSettings,
                  willChange: 'font-variation-settings'
                }}
                aria-hidden="true"
              >
                {letter}
              </motion.span>
            );
          })}
          {wordIndex < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
      <span className="sr-only">{label}</span>
    </span>
  );
});

VariableProximity.displayName = 'VariableProximity';
export default VariableProximity;