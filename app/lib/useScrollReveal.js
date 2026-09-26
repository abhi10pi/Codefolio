// 'use client';

// import { useRef } from 'react';
// import { useInView } from 'motion/react';

// /**
//  * Returns { ref, isInView } — attach ref to the element you want to watch.
//  * once: true means it only triggers once (default).
//  */
// export function useScrollReveal(options = {}) {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: '-80px 0px', ...options });
//   return { ref, isInView };
// }

'use client';

import { useRef } from 'react';
import { useInView } from 'motion/react';

/**
 * Shared scroll-reveal hook used by every section.
 * Fires once, a little before the element enters the viewport,
 * so reveals feel anticipatory rather than late.
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '0px 0px -100px 0px',
    ...options,
  });

  return { ref, isInView };
}