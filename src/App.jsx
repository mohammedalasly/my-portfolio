import { useState, useEffect } from "react"
import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import AboutMe from "./components/AboutMe.jsx"
import TechStack from "./components/TechStack.jsx"
import ExperienceTimeline from "./components/ExperienceTimeline.jsx"
import ProjectsGrid from "./components/ProjectsGrid.jsx"
import Contact from "./components/Contact.jsx"
import Footer from "./components/Footer.jsx"
import useActiveSection from "./hooks/useActiveSection.js"
import useScrollReveal from "./hooks/useScrollReveal.js"

const SECTION_IDS = ["about", "skills", "experience", "projects", "contact"]

const getInitialDarkMode = () => {
	const stored = localStorage.getItem("darkMode")
	if (stored !== null) return stored === "true"
	return window.matchMedia("(prefers-color-scheme: dark)").matches
}

// Apply dark mode class immediately (before first render) to avoid flash
const initialDark = getInitialDarkMode()
document.documentElement.classList.toggle("dark", initialDark)

const App = () => {
	const [darkMode, setDarkMode] = useState(initialDark)
	const activeSection = useActiveSection(SECTION_IDS)

	useScrollReveal()

	// Let the browser handle scroll restoration natively on refresh
	useEffect(() => {
		if ("scrollRestoration" in history) {
			history.scrollRestoration = "auto"
		}
	}, [])

	useEffect(() => {
		document.documentElement.classList.toggle("dark", darkMode)
		localStorage.setItem("darkMode", darkMode)
	}, [darkMode])

	return (
		<div className="grid-bg relative min-h-screen bg-(--bg-main) text-(--text-main)">
			<Navbar
				activeSection={activeSection}
				darkMode={darkMode}
				toggleDarkMode={() => setDarkMode((d) => !d)}
			/>

			<main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-32">
				<section id="home">
					<Hero />
				</section>
				<section id="about" className="scroll-mt-24">
					<AboutMe />
				</section>
				<section id="skills" className="scroll-mt-24">
					<TechStack />
				</section>
				<section id="experience" className="scroll-mt-24">
					<ExperienceTimeline />
				</section>
				<section id="projects" className="scroll-mt-24">
					<ProjectsGrid />
				</section>
				<section id="contact" className="scroll-mt-24">
					<Contact />
				</section>
			</main>

			<Footer />
		</div>
	)
}

export default App
