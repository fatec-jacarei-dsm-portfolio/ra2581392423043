import { projects } from "./utils/projects.js";

const projectGrid = document.getElementById("projectGrid");

function createProjectCard(project) {
	return `
    <div class="project-card">
      <img src="${project.imageUrl}" alt="${project.title}" class="project-img" />
      <div class="project-title">${project.title}</div>
      <div class="project-tech">${project.technologies.join(" • ")}</div>
      <div class="project-links">
        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer">GitHub</a>
        ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer">Demo</a>` : ""}
      </div>
    </div>
  `;
}

function renderProjects() {
	if (!projectGrid) return;
	projectGrid.innerHTML = projects.map(createProjectCard).join("");
}

document.addEventListener("DOMContentLoaded", renderProjects);
