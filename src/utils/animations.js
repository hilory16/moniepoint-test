export const scrollReveal = (delay) => ({
  initial: {
    y: "50px",
    opacity: 0,
    transition: { duration: 0.5, delay },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay },
  },
});
