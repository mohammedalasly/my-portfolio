import { FaGithub, FaLinkedin, FaInstagram, FaDiscord } from "react-icons/fa"

const Footer = () => (
	<footer className="py-6 bg-(--bg-surface) border-t border-(--color-border) relative z-10">
		<div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
			<div
				className="flex flex-col lg:flex-row items-center justify-between 
			gap-4 text-center lg:text-left"
			>
				<p
					className="text-sm opacity-60 
				text-(--color-typography)"
				>
					© {new Date().getFullYear()} Mohammad Alasli
					<span>
						{" "}
						<img
							src="./bee.svg"
							alt="dolphin"
							className="w-5 h-5 inline-block mb-1"
						/>
					</span>{" "}
					 All rights reserved.
				</p>

				<div className="flex items-center gap-4">
					<a
						href="https://github.com/mohammedalasly"
						aria-label="GitHub"
						className="text-(--color-typography) opacity-60 
						hover:text-[#207bad] hover:opacity-100 hover:-translate-y-0.5 
						transition-all"
					>
						<FaGithub size={20} />
					</a>
					<a
						href="https://discord.com/channels/@me"
						aria-label="Discord"
						className="text-(--color-typography) opacity-60 
						hover:text-[#5b68fa] hover:opacity-100 hover:-translate-y-0.5 
						transition-all"
					>
						<FaDiscord size={20} />
					</a>
					<a
						href="https://www.instagram.com/mohammad_alasli"
						aria-label="Instagram"
						className="text-(--color-typography) opacity-60 
						hover:text-[#f26c51] hover:opacity-100 hover:-translate-y-0.5 
						transition-all"
					>
						<FaInstagram size={20} />
					</a>
					<a
						href="https://www.linkedin.com/in/mohammedalasli/"
						aria-label="LinkedIn"
						className="text-(--color-typography) opacity-60 
						hover:text-[#4588f3] hover:opacity-100 hover:-translate-y-0.5 
						transition-all"
					>
						<FaLinkedin size={20} />
					</a>
				</div>

				<p
					className="text-sm opacity-60 
				text-(--color-typography) lg:text-right"
				>
					Crafted with React.js
					<span>
						<img
							src="/react.svg"
							alt="React"
							className="w-5 h-5 inline-block mb-1"
						/>
					</span>{" "}
					Tailwind CSS
					<span>
						<img
							src="/tailwind.svg"
							alt="Tailwind CSS"
							className="w-5 h-5 inline-block mb-1"
						/>
					</span>{" "}
					and lots of
					<img
						src="/coffee.svg"
						alt="cup of coffee"
						className="w-5 h-5 inline-block mb-2"
					/>
				</p>
			</div>
		</div>
	</footer>
)

export default Footer
