export const projects = [
	{
		id: "car-rental-backend",
		title: "Sistema de Locadora - Backend",
		description:
			"API completa desenvolvida com Node.js, TypeScript e PostgreSQL.",
		technologies: [
			"Node.js",
			"TypeScript",
			"PostgreSQL",
			"Prisma",
			"Express",
			"JWT",
			"Zod",
		],
		githubUrl: "https://github.com/chriskryon/car-rental-back",
		imageUrl: "imgs/locadora-back.png",
	},
	{
		id: "car-rental-frontend",
		title: "Sistema de Locadora - Frontend",
		description:
			"Interface moderna construída com React, TypeScript e Tailwind CSS.",
		technologies: [
			"React",
			"TypeScript",
			"Tailwind CSS",
			"Vite",
			"React Router",
		],
		githubUrl: "https://github.com/chriskryon/car-rental-front",
		imageUrl: "imgs/locadora-front.png",
	},
	{
		id: "diverse-landing",
		title: "Diverse Landing Page",
		description: "Landing page moderna para fintech que valoriza diversidade.",
		technologies: [
			"Next.js",
			"TypeScript",
			"Tailwind CSS",
			"Framer Motion",
			"React Hook Form",
		],
		githubUrl: "https://github.com/chriskryon/diverse-landing",
		liveUrl: "https://diverse-landing.vercel.app",
		imageUrl: "imgs/diverse-landing.png",
	},
];

export const stack = {
	backend: ["Node.js", "Express", "PostgreSQL", "Prisma", "JWT", "Docker"],
	frontend: [
		"React",
		"TypeScript",
		"Next.js",
		"Tailwind CSS",
		"Framer Motion",
		"Vite",
	],
	tools: ["Vercel", "Git", "GitHub", "VS Code", "Figma", "Postman"],
};
