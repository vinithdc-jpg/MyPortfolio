// Reusable Framer Motion Variants

// Page load animations
export const pageLoadVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Fade in animation
export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Slide up animations
export const slideUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Slide down animations
export const slideDownVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Stagger container for children animations
export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      ease: "easeOut",
    },
  },
};

// Stagger item animation
export const staggerItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

// Scale up on hover
export const scaleHoverVariants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

// Button hover animation
export const buttonHoverVariants = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.08,
    y: -2,
    transition: { duration: 0.2, ease: "easeOut" },
  },
  tap: { scale: 0.95 },
};

// Horizontal slide animation
export const slideLeftVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const slideRightVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Rotate animation
export const rotateVariants = {
  hidden: { opacity: 0, rotate: -10 },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Image entrance animation
export const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// Card hover animation
export const cardHoverVariants = {
  rest: { y: 0, boxShadow: "0px 0px 0px rgba(0,0,0,0)" },
  hover: {
    y: -8,
    boxShadow: "0px 20px 40px rgba(139, 92, 246, 0.2)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

// Scroll reveal animation
export const scrollRevealVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Parallax animation
export const parallaxVariants = {
  hidden: { y: 0, opacity: 0 },
  visible: {
    opacity: 1,
  },
};
