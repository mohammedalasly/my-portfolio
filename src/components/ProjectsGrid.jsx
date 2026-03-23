import { HiExternalLink } from "react-icons/hi"
import { FaGithub } from "react-icons/fa"
import { PROJECTS } from "../constants.js"

const ProjectsGrid = () => (
	<div className="space-y-8 pb-40">
		<div className="reveal">
			<h2 className="section-title">Featured Projects</h2>
			<p className="section-subtitle mt-2">
				A showcase of innovative solutions and creative problem-solving
			</p>
		</div>

		<div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
			{PROJECTS.map((project, i) => (
				<div
					key={project.id}
					className={`group bg-(--color-project-bg) rounded border-4 border-(--color-border) neo-shadow-lg 
						overflow-hidden flex flex-col h-full relative z-10 ${
							i % 2 === 0 ? "reveal-left" : "reveal-right"
						}`}
				>
					{/* Image */}
					<div className="relative aspect-video overflow-hidden border-b-4 border-(--color-border)">
						<img
							src={project.image}
							alt={project.title}
							className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 
							grayscale group-hover:grayscale-0"
						/>
						<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
					</div>

					{/* Content */}
					<div className="p-5 sm:p-6 flex flex-col grow space-y-4">
						<h3 className="text-xl sm:text-2xl font-black tracking-tight text-(--color-typography)">
							{project.title}
						</h3>
						<p className="opacity-80 font-medium leading-relaxed grow text-(--color-typography)">
							{project.description}
						</p>

						<div className="flex flex-wrap gap-1.5">
							{project.tech.map((t) => (
								<div key={t.name} className="flex items-center">
									<img
										src={t.icon}
										alt={t.name}
										className="w-8 h-8 object-contain"
									/>
								</div>
							))}
						</div>

						<div className="grid grid-cols-2 gap-4 pt-2">
							<a
								href={project.githubUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center justify-center gap-2 bg-zinc-900 text-white border-2 
								border-(--color-border) rounded py-2 font-black  text-sm neo-shadow hover:translate-x-1 
								hover:translate-y-1 hover:shadow-none transition-all"
							>
								<FaGithub size={24} />
								GitHub
							</a>
							<a
								href={project.liveUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center justify-center gap-2 bg-yellow-500 text-black border-2 
								border-(--color-border) rounded py-2 font-black text-sm neo-shadow hover:translate-x-1 
								hover:translate-y-1 hover:shadow-none transition-all"
							>
								<HiExternalLink size={24} />
								Live Demo
							</a>
						</div>
					</div>
				</div>
			))}
		</div>
	</div>
)

export default ProjectsGrid
