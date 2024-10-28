export const variantsAnimate = {
	initialElement: { opacity: 0, scale: 0 },
	animateElement: (i: number) => ({ opacity: 1, scale: 1, transition: { duration: 0.4, delay: i * 0.2 } })
};
