// utils/projects.js

export const projects = [
	{
		id: "car-rental-backend",
		title: "Sistema de Locadora - Backend",
		description:
			"API completa desenvolvida com Node.js, TypeScript e PostgreSQL. Sistema robusto com autenticação JWT, upload de imagens, validações com Zod e arquitetura em camadas seguindo princípios SOLID e Clean Architecture.",
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
			"Interface moderna construída com React, TypeScript e Tailwind CSS. Painel administrativo completo para gerenciamento de frota, com sistema de upload de imagens e interface responsiva.",
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
		description:
			"Landing page moderna para fintech que valoriza diversidade, construída com Next.js e TypeScript. Interface responsiva com animações fluidas, formulários integrados e foco em inclusão financeira.",
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
