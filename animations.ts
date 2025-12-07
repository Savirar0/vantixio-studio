
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateHeader = (header: string) => {
  gsap.fromTo(
    header,
    { y: -100, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
  );
};

export const animateHero = (hero: string, title: string, subtitle: string, button: string) => {
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
  tl.fromTo(hero, { opacity: 0 }, { opacity: 1, duration: 1 })
    .fromTo(title, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.5")
    .fromTo(subtitle, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.5")
    .fromTo(button, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.5");
};

export const animateServices = (service: string) => {
  gsap.fromTo(
    service,
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: service,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    }
  );
};

export const animatePortfolio = (portfolio: string) => {
  gsap.fromTo(
    portfolio,
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: portfolio,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    }
  );
};

export const animateTestimonials = (testimonial: string) => {
  gsap.fromTo(
    testimonial,
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: testimonial,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    }
  );
};

export const animateContact = (contact: string) => {
  gsap.fromTo(
    contact,
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: contact,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    }
  );
};

export const animateAbout = (about: string) => {
  gsap.fromTo(
    about,
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: about,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    }
  );
};
