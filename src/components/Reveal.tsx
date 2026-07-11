'use client';

import { useEffect } from 'react';

export default function Reveal() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.js-reveal, .js-hero-stagger').forEach(el => observer.observe(el));
    
    // Stagger setup for hero
    document.querySelectorAll('.js-hero-stagger').forEach((el, i) => {
      (el as HTMLElement).style.transitionDelay = `${i * 600}ms`;
    });
  }, []);
  return null;
}
