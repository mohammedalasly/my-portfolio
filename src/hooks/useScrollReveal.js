import { useEffect } from "react"

/**
 * useScrollReveal
 * Adds the "visible" class to elements with .reveal, .reveal-left, or .reveal-right
 * as they enter the viewport — no direct window object usage.
 */
const useScrollReveal = () => {
	useEffect(() => {
		const selector = ".reveal, .reveal-left, .reveal-right"
		const elements = document.querySelectorAll(selector)

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("visible")
						// Unobserve after animating so it won't re-trigger
						observer.unobserve(entry.target)
					}
				})
			},
			{ threshold: 0.12 },
		)

		elements.forEach((el) => observer.observe(el))

		return () => observer.disconnect()
	}, [])
}

export default useScrollReveal
