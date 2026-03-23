import { useEffect } from "react"
import { HiX } from "react-icons/hi"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const MobileMenu = ({
	isOpen,
	onClose,
	navItems,
	activeSection,
	onNavClick,
}) => {
	useEffect(() => {
		document.body.classList.toggle("menu-open", isOpen)
		return () => document.body.classList.remove("menu-open")
	}, [isOpen])

	return (
		<>
			{/* Backdrop */}
			<div
				className={`mobile-menu-backdrop ${isOpen ? "active" : ""}`}
				onClick={onClose}
			/>

			{/* Drawer */}
			<aside
				aria-hidden={!isOpen}
				className={`fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] 
					bg-(--bg-surface) border-l-4 border-(--color-border) shadow-2xl 
					transition-transform duration-300 z-50 overflow-y-auto ${
						isOpen ? "translate-x-0" : "translate-x-full"
					}`}
			>
				{/* Header */}
				<div className="flex justify-between items-center p-4 border-b-2 border-(--color-border)">
					<span className="font-black text-xl tracking-tighter uppercase text-(--color-typography)">
						Menu
					</span>
					<button
						onClick={onClose}
						aria-label="Close menu"
						className="border-2 border-(--color-border) rounded-md p-2 
						neo-shadow hover:opacity-80 transition-opacity"
					>
						<HiX size={20} />
					</button>
				</div>

				{/* Nav Items */}
				<nav className="flex flex-col p-6 space-y-4">
					{navItems.map(({ id, label }) => (
						<button
							key={id}
							onClick={() => onNavClick(id)}
							className={`flex items-center gap-3 text-left text-lg font-black 
								tracking-wider transition-all p-3 border-2 rounded-md neo-shadow ${
									activeSection === id
										? "nav-link-active translate-x-2"
										: "border-(--color-border) hover:translate-x-1"
								}`}
						>
							{label}
						</button>
					))}
				</nav>

				{/* Social Links */}
				<div className="flex justify-start gap-3 px-6 pb-6">
					<a
						href="#"
						aria-label="GitHub"
						onClick={onClose}
						className="bg-[#0d3b66] border-2 border-white p-3 
						rounded-md neo-shadow hover:translate-x-1 hover:translate-y-1 
						hover:shadow-none transition-all"
					>
						<FaGithub size={20} className="text-white" />
					</a>
					<a
						href="#"
						aria-label="LinkedIn"
						onClick={onClose}
						className="bg-[#3e7aba] border-2 border-white p-3 rounded-md 
						neo-shadow hover:translate-x-1 hover:translate-y-1 
						hover:shadow-none transition-all"
					>
						<FaLinkedin size={20} className="text-white" />
					</a>
				</div>

				{/* Footer Note */}
				<div className="px-6 pb-6 pt-4 border-t-2 border-(--color-border)">
					<p
						className="text-xs font-bold text-center 
					opacity-60 text-(--color-typography)"
					>
						© {new Date().getFullYear()} Mohammad Alasli. All rights reserved
					</p>
				</div>
			</aside>
		</>
	)
}

export default MobileMenu
