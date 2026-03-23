import { useState, useEffect, useRef } from "react"

const useActiveSection = (sectionIds) => {
	const [activeSection, setActiveSection] = useState(null)
	const observerRef = useRef(null)

	useEffect(() => {
		const intersecting = new Set()

		const handleIntersect = (entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					intersecting.add(entry.target.id)
				} else {
					intersecting.delete(entry.target.id)
				}
			})
			const active = sectionIds.find((id) => intersecting.has(id)) ?? null
			setActiveSection(active)
		}

		observerRef.current = new IntersectionObserver(handleIntersect, {
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
