import { useState, useEffect, useRef } from "react"

/**
 * useActiveSection
 * Returns the ID of the section currently in the viewport centre,
 * or null when no observed section is intersecting (e.g. on the Hero).
 *
 * @param {string[]} sectionIds - IDs to observe (hero/home intentionally excluded)
 * @returns {string|null}
 */
const useActiveSection = (sectionIds) => {
	const [activeSection, setActiveSection] = useState(null)
	const observerRef = useRef(null)

	useEffect(() => {
		// Track which sections are currently intersecting
		const intersecting = new Set()

		const handleIntersect = (entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					intersecting.add(entry.target.id)
				} else {
					intersecting.delete(entry.target.id)
				}
			})
			// Pick the first section (in DOM order) that is intersecting
			const active = sectionIds.find((id) => intersecting.has(id)) ?? null
			setActiveSection(active)
		}

		observerRef.current = new IntersectionObserver(handleIntersect, {
			// Trigger when section centre crosses the middle band of the viewport
			rootMargin: "-30% 0px -60% 0px",
			threshold: 0,
		})

		sectionIds.forEach((id) => {
			const el = document.getElementById(id)
			if (el) observerRef.current.observe(el)
		})

		return () => observerRef.current?.disconnect()
	}, [sectionIds])

	return activeSection
}

export default useActiveSection
