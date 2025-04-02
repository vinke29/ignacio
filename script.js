// Project data with real projects
const projects = [
    {
        title: "To-do.art",
        description: "A Mondrian-inspired task manager that turns your to-do list into art.",
        image: "images/mondrian.png",
        link: "https://to-do.art",
        tags: ["React", "Canvas", "Art"],
        gridColumn: "span 2",
        gridRow: "span 1"
    },
    {
        title: "Aguacate Morado",
        description: "A minimalist photography portfolio capturing moments through a unique lens.",
        image: "images/Photography.png",
        link: "https://aguacatemorado.com",
        tags: ["Photography", "Gallery", "Art"],
        gridColumn: "span 1",
        gridRow: "span 2"
    },
    {
        title: "Car Racing Game",
        description: "A fast-paced racing game with realistic physics and dynamic tracks.",
        image: "images/racing.png",
        link: "racetrack.html",
        tags: ["Game", "WebGL", "Physics"],
        gridColumn: "span 1",
        gridRow: "span 1"
    },
    {
        title: "Cannon Game",
        description: "A physics-based cannon shooting game with destructible environments.",
        image: "images/cannon.png",
        link: "cannon.html",
        tags: ["Game", "Physics", "JavaScript"],
        gridColumn: "span 1",
        gridRow: "span 1"
    },
    {
        title: "About Me",
        description: "Learn more about who I am and what drives me.",
        image: "images/aboutme.png",
        link: "about.html",
        tags: ["Personal", "Background"],
        gridColumn: "span 2",
        gridRow: "span 1"
    }
];

// Function to create project tiles
function createProjectTiles() {
    const projectsSection = document.querySelector('.projects-section');
    const projectGrid = document.createElement('div');
    projectGrid.className = 'project-grid';

    projects.forEach(project => {
        const tile = document.createElement('div');
        tile.className = 'project-tile';
        tile.style.gridColumn = project.gridColumn;
        tile.style.gridRow = project.gridRow;

        tile.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <div class="content">
                <h2>${project.title}</h2>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
                <a href="${project.link}" class="view-project">View Project</a>
            </div>
        `;

        // Add click handler only for mobile devices
        if (window.matchMedia('(hover: none)').matches) {
            tile.addEventListener('click', (e) => {
                // Don't trigger if clicking the link
                if (e.target.tagName === 'A') return;
                
                // Toggle active state
                tile.classList.toggle('active');
                
                // Close other tiles
                document.querySelectorAll('.project-tile.active').forEach(otherTile => {
                    if (otherTile !== tile) {
                        otherTile.classList.remove('active');
                    }
                });
            });
        }

        projectGrid.appendChild(tile);
    });

    projectsSection.appendChild(projectGrid);
}

// Initialize the page
document.addEventListener('DOMContentLoaded', createProjectTiles); 