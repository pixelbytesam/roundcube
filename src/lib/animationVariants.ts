/**
 * src/lib/animationVariants.ts
 *
 * Single source of truth for all Framer Motion animation variants.
 * Import from here across every page, section, and component so the
 * scroll-animation style stays perfectly consistent site-wide.
 *
 * Usage:
 *   import { fadeUp, stagger, staggerChild, VIEWPORT } from '@/lib/animationVariants';
 *
 *   <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
 *     <motion.p variants={staggerChild}>Hello</motion.p>
 *   </motion.div>
 */

import type { Variants } from 'framer-motion';

// ─── Viewport preset ───────────────────────────────────────────────────────────
// Use this everywhere for consistent trigger behaviour.
export const VIEWPORT = { once: true, margin: '-150px 0 0 ' } as const;

// ─── Fade + slight upward lift ─────────────────────────────────────────────────
// The site's primary "reveal" animation. Use for standalone elements.
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

// Fade-up with a configurable delay (manual stagger without a container).
export const fadeUpDelayed = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay },
  },
});

// ─── Fade in (no movement) ─────────────────────────────────────────────────────
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

// ─── Directional fades ─────────────────────────────────────────────────────────
export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: 'easeOut' },
  },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: 'easeOut' },
  },
};

// ─── Subtle scale reveal (cards, images, CTA boxes) ───────────────────────────
export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.93 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// ─── Stagger containers ────────────────────────────────────────────────────────
// Wrap a list/grid with one of these; animate children with staggerChild / cardChild.

/** Standard stagger — 0.12 s between children */
export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

/** Fast stagger — 0.08 s, good for tight grids */
export const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

/** Slow stagger — 0.18 s, good for hero areas and large feature rows */
export const staggerSlow: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.1 },
  },
};

// ─── Stagger child items ───────────────────────────────────────────────────────

/** Generic child — fade + subtle lift */
export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
};

/** Card child — includes a tiny scale for depth */
export const cardChild: Variants = {
  hidden: { opacity: 0, y: 35, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/** Process step — slides in from the left */
export const processChild: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
};

/** Stat counter — quick upward pop */
export const statChild: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

// ─── Heading block (label → title → description) ──────────────────────────────
// Wrap SectionHeading's internals if you need individual-line stagger.
// For most cases, wrapping the whole SectionHeading with fadeUp is sufficient.
export const headingContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

export const headingLabel: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export const headingTitle: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const headingDesc: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
};