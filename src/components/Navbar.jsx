import { useState, useEffect, useCallback } from "react"
import { HiMenu } from "react-icons/hi"
import { BsMoonStars, BsSunFill } from "react-icons/bs"
import MobileMenu from "./MobileMenu"
import { NAV_ITEMS } from "../constants.js"

const scrollToSection = (id) =>
	document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

const Navbar = ({ activeSection, darkMode, toggleDarkMode }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	useEffect(() => {
		if (!isMenuOpen) return
		const mq = window.matchMedia("(min-width: 768px)")
		const handleChange = (e) => {
			if (e.matches) setIsMenuOpen(false)
		}
		mq.addEventListener("change", handleChange)
		return () => mq.removeEventListener("change", handleChange)
	}, [isMenuOpen])

	const handleNavClick = useCallback((id) => {
		setIsMenuOpen(false)
		requestAnimationFrame(() => scrollToSection(id))
	}, [])

	return (
		<>
			<nav
				className={`fixed top-0 left-0 right-0 z-50 px-4 py-4
					${isMenuOpen ? "pointer-events-none" : "pointer-events-auto"}`}
			>
				<div className="max-w-full mx-auto flex justify-between items-center">
					{/* Logo */}
					<button
						onClick={() => scrollToSection("home")}
						tabIndex={isMenuOpen ? -1 : 0}
						aria-label="Scroll to top"
						className="bg-(--bg-surface) border-2 border-(--color-border) rounded p-1 
						neo-shadow transition-transform active:translate-y-0"
					>
						<img src="./bee.svg" alt="bee" className="w-10 h-10" />
					</button>

					{/* Desktop Nav */}
					<div
						className="hidden md:flex items-center rounded space-x-2 bg-(--bg-surface) 
					border-2 border-(--color-border) p-2 neo-shadow"
					>
						{NAV_ITEMS.map(({ id, label }) => (
							<button
								key={id}
								onClick={() => handleNavClick(id)}
								className={`px-4 py-1 font-bold transition-all border-2 ${
									activeSection === id
										? "nav-link-active"
										: "border-transparent text-(--color-typography) hover:border-(--color-border)"
								}`}
							>
								{label}
							</button>
						))}

						<div className="w-0.5 h-6 bg-(--color-border) mx-1" />

						<button
							onClick={toggleDarkMode}
							className="p-1 hover:opacity-70 transition-opacity"
							aria-label="Toggle dark mode"
						>
							{darkMode ? (
								<BsSunFill size={20} fill="#e9c46a" />
							) : (
								<BsMoonStars size={20} fill="#8ecae6" />
							)}
						</button>
					</div>

					{/* Mobile */}
					<div className="md:hidden flex space-x-2">
						<button
							onClick={toggleDarkMode}
							tabIndex={isMenuOpen ? -1 : 0}
							aria-label="Toggle dark mode"
							className="bg-(--bg-surface) border-2 border-(--color-border) rounded p-2 neo-shadow"
						>
							{darkMode ? (
								<BsSunFill size={20} fill="#e9c46a" />
							) : (
								<BsMoonStars size={20} fill="#8ecae6" />
							)}
						</button>
						<button
							onClick={() => setIsMenuOpen(true)}
							tabIndex={isMenuOpen ? -1 : 0}
							aria-label="Open menu"
							className="bg-(--bg-surface) border-2 border-(--color-border) rounded p-2 neo-shadow"
						>
							<HiMenu size={20} />
						</button>
					</div>
				</div>
			</nav>

			<MobileMenu
				isOpen={isMenuOpen}
				onClose={() => setIsMenuOpen(false)}
				navItems={NAV_ITEMS}
				activeSection={activeSection}
				onNavClick={handleNavClick}
			/>
		</>
	)
}

export default Navbar
