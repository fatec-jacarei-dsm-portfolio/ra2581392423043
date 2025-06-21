import { projects, stack } from "../utils/projects.js";

const projectGrid = document.getElementById("projectGrid");

function createTechBadges(technologies, isStack = false) {
	const badgeClass = isStack ? "badge-tech--stack" : "badge-tech";
	return `<div class="project-badges">${technologies
		.map((tech) => `<span class="${badgeClass}">${tech}</span>`)
		.join("")}</div>`;
}

function createProjectCard(project) {
	return `
    <div class="project-card">
      <img src="${project.imageUrl}" alt="${project.title}" class="project-img" />
      <div class="project-title">${project.title}</div>
      <div class="project-tech">
        ${project.technologies
					.map((tech) => `<span class="badge-tech--mini">${tech}</span>`)
					.join("")}
      </div>
      <div class="project-links">
        <a class="badge-link" href="${project.githubUrl}" target="_blank" rel="noopener noreferrer">GitHub</a>
        ${project.liveUrl ? `<a class="badge-link" href="${project.liveUrl}" target="_blank" rel="noopener noreferrer">Demo</a>` : ""}
      </div>
    </div>
  `;
}

function renderStack() {
	const backendDiv = document.querySelector(
		'.tech-category[data-stack="backend"] .tech-list',
	);
	const frontendDiv = document.querySelector(
		'.tech-category[data-stack="frontend"] .tech-list',
	);
	const toolsDiv = document.querySelector(
		'.tech-category[data-stack="tools"] .tech-list',
	);
	if (backendDiv) backendDiv.innerHTML = createTechBadges(stack.backend, true);
	if (frontendDiv)
		frontendDiv.innerHTML = createTechBadges(stack.frontend, true);
	if (toolsDiv) toolsDiv.innerHTML = createTechBadges(stack.tools, true);
}

function renderProjects() {
	if (!projectGrid) return;
	projectGrid.innerHTML = projects.map(createProjectCard).join("");
}

document.addEventListener("DOMContentLoaded", () => {
	renderProjects();
	renderStack();
});
