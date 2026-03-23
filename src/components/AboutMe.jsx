import { HiHeart, HiSparkles, HiFlag } from "react-icons/hi"

const cards = [
	{
		id: "who",
		title: "Who Am I",
		accent: "#3876b0",
		icon: "./person.svg",
		alt: "person",
		rotate: "-rotate-[0.5deg]",
		text: "I'm a software developer and MIT Emerging Talent Program graduate dedicated to creating digital experiences that blend technical excellence with empathy and creativity.",
	},
	{
		id: "hobbies",
		title: "Hobbies",
		accent: "#ca6555",
		icon: "./heart.svg",
		alt: "heart",
		rotate: "rotate-[0.4deg]",
		text: "When I'm not exploring new technologies, I enjoy swimming, playing volleyball, and board games, and sharing good times with friends who bring energy and laughter into my life.",
	},
	{
		id: "goals",
		title: "Goals",
		accent: "#45AAB8",
		icon: "./goal.svg",
		alt: "goal",
		rotate: "-rotate-[0.3deg]",
		text: "My mission is to keep learning and growing to create products that not only work well but also make a positive difference in users' lives.",
	},
]

const AboutMe = () => (
	<div className="space-y-8 pb-40">
		{/* Header */}
		<div className="reveal">
			<h2 className="section-title">About Me</h2>
			<p className="section-subtitle mt-2">
				A little bit about me and my experience
			</p>
		</div>

		{/* Outer container */}
		<div
			className="bg-(--bg-surface) border-4 border-(--color-border) 
			rounded p-6 md:p-10 neo-shadow-lg relative z-10 reveal"
		>
			<div className="flex flex-col gap-5">
				{cards.map((card) => (
					<div
						key={card.id}
						className={`
							bg-(--inner-about-carrd-bg) rounded border-3 border-(--color-border)
							neo-shadow relative z-10 overflow-visible
							flex flex-col sm:flex-row items-stretch
							${card.rotate} transition-transform
							group mt-4
						`}
						style={{ "--card-accent": card.accent }}
					>
						{/* Badge */}
						<div
							className="absolute -top-4 right-4 z-20 px-4 py-1 rounded border-3 border-(--color-border) neo-shadow font-black uppercase tracking-tight text-sm"
							style={{ backgroundColor: card.accent, color: "#fff" }}
						>
							{card.title}
						</div>

						{/* Left accent bar */}
						<div
							className="w-full sm:w-2 h-2 sm:h-auto shrink-0 transition-all duration-300 group-hover:sm:w-3"
							style={{ backgroundColor: card.accent }}
						/>

						{/* Icon block */}
						<div
							className="hidden sm:flex items-center justify-center px-24 py-24 relative shrink-0"
							
						>
							{/* Faint large SVG in background */}
							<img
								src={card.icon}
								alt=""
								aria-hidden="true"
								className="absolute w-22 h-22 opacity-80 pointer-events-none select-none"
							/>
						</div>

						{/* Content */}
						<div className="flex flex-col justify-center gap-2 p-5 sm:p-7 flex-1">
							<div className="flex items-center gap-3">
								
							</div>
							<p className="text-base md:text-lg leading-relaxed font-medium opacity-75 text-(--color-typography)">
								{card.text}
							</p>
						</div>

						{/* Right corner accent triangle */}
						<div
							className="absolute bottom-0 right-0 w-10 h-10 opacity-20 pointer-events-none"
							style={{
								background: `linear-gradient(135deg, transparent 50%, ${card.accent} 50%)`,
							}}
						/>
					</div>
				))}
			</div>
		</div>
	</div>
)

export default AboutMe
