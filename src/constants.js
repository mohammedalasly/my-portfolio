export const NAV_ITEMS = [
	{ id: "about", label: "About Me" },
	{ id: "skills", label: "Skills" },
	{ id: "experience", label: "Experience" },
	{ id: "projects", label: "Projects" },
	{ id: "contact", label: "Contact" },
]

export const SKILLS = [
	{
		name: "HTML",
		icon: "https://go-skill-icons.vercel.app/api/icons?i=html&theme=dark",
	},
	{
		name: "CSS3",
		icon: "https://go-skill-icons.vercel.app/api/icons?i=css&theme=dark",
	},
	{
		name: "Javascript",
		icon: "https://go-skill-icons.vercel.app/api/icons?i=javascript&theme=dark",
	},
	{
		name: "Typescript",
		icon: "https://go-skill-icons.vercel.app/api/icons?i=typescript&theme=dark",
	},
	{
		name: "React",
		icon: "https://go-skill-icons.vercel.app/api/icons?i=react&theme=dark",
	},
	{
		name: "Tailwind CSS",
		icon: "https://go-skill-icons.vercel.app/api/icons?i=tailwindcss&theme=dark",
	},
	{
		name: "Figma",
		icon: "https://go-skill-icons.vercel.app/api/icons?i=figma&theme=dark",
	},
	{
		name: "Git",
		icon: "https://go-skill-icons.vercel.app/api/icons?i=git&theme=dark",
	},
	{
		name: "Node.js",
		icon: "https://go-skill-icons.vercel.app/api/icons?i=nodejs&theme=dark",
	},
	{
		name: "Express.js",
		icon: "https://go-skill-icons.vercel.app/api/icons?i=express&theme=dark",
	},
	{
		name: "Next.js",
		icon: "https://go-skill-icons.vercel.app/api/icons?i=nextjs&theme=dark",
	},
	{
		name: "Jest",
		icon: "https://go-skill-icons.vercel.app/api/icons?i=jest&theme=dark",
	},
	{
		name: "PostgreSQL",
		icon: "https://go-skill-icons.vercel.app/api/icons?i=postgresql&theme=dark",
	},
	{
		name: "Supabase",
		icon: "https://go-skill-icons.vercel.app/api/icons?i=supabase&theme=dark",
	},
	{
		name: "Prisma",
		icon: "https://go-skill-icons.vercel.app/api/icons?i=prisma&theme=dark",
	},
]

export const EXPERIENCES = [
	{
		id: "1",
		company: "Circular Design",
		role: "Web Developer",
		period: "2025 - 2026",
		location: "Remote",
		description:
			"Building responsive WordPress websites, customize themes and plugins, and use HTML, CSS, and JavaScript to enhance layouts and interactivity.",
		color: "#7678ed",
	},
	{
		id: "2",
		company: "Na'amal Agency",
		role: "JavaScript Developer",
		period: "2024 - 2025",
		location: "Remote",
		description:
			"Developed JavaScript-based coding challenges to evaluate LLMs on AWS SageMaker, debugged and optimized AI-generated code to pass unit tests, and enhanced the clarity and consistency of problem descriptions and solutions.",
		color: "#f28482",
	},
	{
		id: "3",
		company: "BookVoice",
		role: "Frontend Developer",
		period: "2023 - 2024",
		location: "Remote",
		description:
			"Built responsive Svelte interfaces with SvelteKit and TypeScript for routing and SSR, integrated backend APIs for efficient data exchange, and styled components using Tailwind CSS for a consistent UI.",
		color: "#348aa7",
	},
]

export const PROJECTS = [
	{
		id: "p1",
		title: "LMS - AI SaaS App",
		description:
			"Trenavo AI is an LMS SaaS built with Next.js, TypeScript, Supabase, and Clerk. Powered by Vapi’s AI voice agent, it delivers personalized learning sessions where users can customize topics, voice tone, and duration, and track their progress through profiles and bookmarks.",
		tech: [
			{
				icon: "https://go-skill-icons.vercel.app/api/icons?i=typescript&theme=dark",
			},
			{
				icon: "https://go-skill-icons.vercel.app/api/icons?i=nextjs&theme=dark",
			},
			{
				icon: "https://go-skill-icons.vercel.app/api/icons?i=tailwindcss&theme=dark",
			},
			{
				icon: "https://go-skill-icons.vercel.app/api/icons?i=shadcn&theme=dark",
			},
			{
				icon: "https://go-skill-icons.vercel.app/api/icons?i=figma&theme=dark",
			},
			{
				icon: "https://go-skill-icons.vercel.app/api/icons?i=clerk&theme=dark",
			},
			{
				icon: "https://go-skill-icons.vercel.app/api/icons?i=supabase&theme=dark",
			},
		],
		image: "./lms-saas-app.png",
		githubUrl: "https://github.com/mohammedalasly/SaaS-App",
		liveUrl: "https://trenavo-ai.vercel.app/",
	},
	{
		id: "p2",
		title: "Movie App",
		description:
			"Movie DC is a sleek and modern movie discovery app built using React 19, Javascript, Tailwind CSS, Appwrite, and The Movie Database (TMDB) API. Explore trending movies, search for titles, and dive into detailed movie info.",
		tech: [
			{
				icon: "https://go-skill-icons.vercel.app/api/icons?i=javascript&theme=dark",
			},
			{
				icon: "https://go-skill-icons.vercel.app/api/icons?i=react&theme=dark",
			},
			{
				icon: "https://go-skill-icons.vercel.app/api/icons?i=tailwindcss&theme=dark",
			},
			{
				icon: "https://go-skill-icons.vercel.app/api/icons?i=figma&theme=dark",
			},
			{
				icon: "https://go-skill-icons.vercel.app/api/icons?i=appwrite&theme=dark",
			},
		],
		image: "movie-app.png",
		githubUrl: "https://github.com/mohammedalasly/movie-dc",
		liveUrl: "https://movie-dc.netlify.app/",
	},
]
