import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa"

const Hero = () => {
	return (
		<div className="w-full relative z-10 pt-20 pb-20">
			{/* ── Cover Image ── */}
			<div
				className="w-full h-40 sm:h-54 md:h-65 lg:h-100 relative overflow-hidden 
    border-(--color-border) rounded neo-shadow-lg reveal-right"
			>
				<img
					src="/cover.jpg"
					alt="Cover"
					loading="eager"
					fetchpriority="high"
					className="w-full h-full object-cover"
				/>
				<div className="absolute inset-0 bg-black/30" />
			</div>

			{/* Main Content Area */}
			<div className="w-full px-5 sm:px-8 md:px-12 lg:px-20">
				<div className="flex flex-col md:flex-row md:justify-between md:items-end gap-5">
					{/* Avatar */}
					<div
						className="shrink-0 relative -mt-16 sm:-mt-20 md:-mt-24 lg:-mt-32 self-start
      border-(--color-border) rounded neo-shadow-lg reveal-left"
					>
						<img
							src="/mo.png"
							alt="mo"
							loading="eager"
							fetchpriority="high"
							className="w-32 sm:w-40 md:w-56 lg:w-64 aspect-square rounded object-cover"
						/>
					</div>

					{/* Name / Role / Actions */}
					<div className="flex flex-col items-start md:items-end text-left md:text-right md:mt-8 reveal min-w-0">
						<h1
							className="font-black uppercase tracking-tighter text-(--color-typography) leading-none"
							style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
						>
							Mohammad Alasli
						</h1>
						<p
							className="mt-2 uppercase font-black tracking-tighter text-[#4f4fa0]"
							style={{ fontSize: "clamp(1.5rem, 3.5vw, 3rem)" }}
						>
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
								px-3.5 py-3 font-black uppercase text-sm
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
								className="bg-[#0d3b66] border-2 border-(--color-border) p-1.5 rounded neo-shadow
								hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
							>
								<FaGithub size={24} className="text-white" />
							</a>

							<a
								href="https://www.linkedin.com/in/mohammedalasli/"
								target="_blank"
								aria-label="LinkedIn"
								className="bg-[#3a86ff] border-2 border-(--color-border) p-1.5 rounded neo-shadow
								hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
							>
								<FaLinkedin size={24} className="text-white" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero
