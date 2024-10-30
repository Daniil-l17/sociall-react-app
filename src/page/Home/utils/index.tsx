export const variantsAnimate = {
	initialElement: { opacity: 0, x: 200 },
	animateElement: (i: number) => ({ opacity: 1, x: 0, transition: { duration: 0.4, delay: i * 0.2 } })
};
