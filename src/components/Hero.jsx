import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa"

const Hero = () => {
	return (
		<div className="w-full relative z-10 pt-10 pb-20">
			{/* ── Cover Image ── */}
			<div
				className="w-full h-48 sm:h-64 md:h-120 relative overflow-hidden 
			border-b-4 border-(--color-border) rounded neo-shadow-lg reveal-right"
			>
				<img
					src="cover.jpg"
					alt="Cover"
					className="w-full h-full object-cover"
				/>
				<div className="absolute inset-0 bg-black/30" />
			</div>

			{/* ── Main Content Area ── */}
			<div className="w-full px-5 sm:px-8 md:px-12 lg:px-20">
				<div className="flex flex-col md:flex-row md:justify-between gap-5">
	
					<div className="flex flex-col items-start reveal-left">
						{/* Avatar */}
						<div
							className="relative -mt-16 sm:-mt-20 md:-mt-24 lg:-mt-32 mb-6 border-(--color-border) 
						rounded neo-shadow-lg"
						>
							<img
								src="./mo.png"
								alt="mo"
								className="w-40 md:w-70 h-40 md:h-70 rounded object-cover"
							/>
						</div>
					</div>

					<div className="flex flex-col items-start md:items-end text-left md:text-right md:mt-8 reveal">
						{/* Name */}
						<h1
							className="text-5xl sm:text-5xl md:text-6xl xl:text-7xl font-black uppercase 
						tracking-tight text-(--color-typography) leading-none"
						>
							Mohammad Alasli
						</h1>

						{/* Role */}
						<p className="mt-4 text-3xl md:text-5xl uppercase font-black  text-[#4f4fa0]">
							Software Engineer
						</p>

						{/* Button */}
						<a
							href="/mohammad-alasli-cv.pdf"
							download
							className="
								mt-6 flex items-center gap-2 rounded
								bg-(--btn-bg) text-(--bg-main)
								border-2 border-(--color-border)
								px-6 py-3 font-black uppercase tracking-wider text-sm
								neo-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all
								self-start md:self-end
							"
						>
							<FaDownload size={16} />
							Download CV
						</a>

						{/* Social Icons */}
						<div className="flex items-center gap-4 mt-4 self-start md:self-end">
							<a
								href="https://github.com/mohammedalasly"
								target="_blank"
								aria-label="GitHub"
								className="bg-[#0d3b66] border-2 border-(--color-border) p-3 rounded neo-shadow
								hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
							>
								<FaGithub size={22} className="text-white" />
							</a>

							<a
								href="https://www.linkedin.com/in/mohammedalasli/"
								target="_blank"
								aria-label="LinkedIn"
								className="bg-[#3a86ff] border-2 border-(--color-border) p-3 rounded neo-shadow
								hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
							>
								<FaLinkedin size={22} className="text-white" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero
