import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Tempus } from './tempus';

let registered = false;

export function setupGsap() {
  if (registered || typeof window === 'undefined') return;
  registered = true;

  gsap.registerPlugin(ScrollTrigger);

  // Disable gsap's internal RAF ticker; Tempus drives everything.
  gsap.ticker.lagSmoothing(0);
  gsap.ticker.remove(gsap.updateRoot);

  Tempus.add((time) => {
    gsap.updateRoot(time / 1000);
  }, { priority: 1 });
}

export { gsap, ScrollTrigger };
