import { SKILLS } from "../constants"

const TechStack = () => (
	<div className="space-y-8 pb-40">
		<div className="reveal">
			<h2 className="section-title">Tech Stack</h2>
			<p className="section-subtitle mt-2">
				Technologies I've worked with and am currently learning
			</p>
		</div>

		<div
			className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 
		gap-8 pt-4 reveal-stagger"
		>
			{SKILLS.map((skill) => (
				<div
					key={skill.name}
					className="reveal relative bg-(--bg-surface) border-4 border-(--color-border) 
					neo-shadow rounded-md p-4 pt-8 mt-3 flex flex-col items-center text-center 
					overflow-visible z-10 transition-transform"
				>
					{/* Tape label */}
					<span
						className="absolute -top-3.5 left-3 bg-(--color-orange) border-2 
					border-(--color-border) neo-shadow px-2.5 py-0.5 text-[0.7rem] font-black 
					uppercase tracking-wider text-white -rotate-2 z-20 whitespace-nowrap"
					>
						{skill.name}
					</span>

					<div className="w-20 h-20 flex items-center justify-center mt-2">
						<img
							src={skill.icon}
							alt={skill.name}
							className="w-full h-full object-contain"
						/>
					</div>
				</div>
			))}
		</div>
	</div>
)

export default TechStack
