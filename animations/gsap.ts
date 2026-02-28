'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function useGSAPScrollTrigger() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
}

export function animateTimelineLine(lineRef: React.RefObject<HTMLElement>) {
  if (!lineRef.current) return;
  gsap.fromTo(
    lineRef.current,
    { scaleY: 0, transformOrigin: 'top' },
    {
      scaleY: 1,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: lineRef.current,
        start: 'top 85%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
      },
    }
  );
}
