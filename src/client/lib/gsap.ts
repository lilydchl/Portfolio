import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let registered = false;

export function setupGsap() {
  if (registered || typeof window === 'undefined') return;
  registered = true;
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };
