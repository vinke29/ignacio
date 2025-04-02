// Project data with real projects
const projects = [
    {
        title: "To-do.art",
        description: "A Mondrian-inspired to-do app that turns task management into an artistic experience. Each task becomes part of a dynamic composition inspired by Piet Mondrian's iconic style.",
        image: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2102&q=80",
        link: "https://to-do.art",
        tags: ["React", "Canvas", "Art"],
        gridColumn: "span 2",
        gridRow: "span 1"
    },
    {
        title: "Aguacate Morado",
        description: "A minimalist photography portfolio showcasing visual stories through a carefully curated lens. Experience moments captured in their purest form.",
        image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1934&q=80",
        link: "https://aguacatemorado.com",
        tags: ["Photography", "Gallery", "Art"],
        gridColumn: "span 1",
        gridRow: "span 2"
    },
    {
        title: "Car Racing Game",
        description: "An adrenaline-pumping racing experience built with modern web technologies. Race against time through dynamically generated tracks with realistic physics.",
        image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        link: "#",
        tags: ["Game", "WebGL", "Physics"],
        gridColumn: "span 1",
        gridRow: "span 1"
    },
    {
        title: "Hotel Cannon Game",
        description: "A fun game where players aim a cannon at a hotel to hit specific target rooms. Test your accuracy and timing in this unique targeting challenge.",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        link: "https://github.com/yourusername/hotel-cannon-game",
        tags: ["Game", "JavaScript", "Physics"],
        gridColumn: "span 2",
        gridRow: "span 1"
    }
];

// Function to create project tiles
function createProjectTiles() {
    const projectGrid = document.querySelector('.project-grid');
    
    projects.forEach(project => {
        const tile = document.createElement('div');
        tile.className = 'project-tile';
        tile.style.gridColumn = project.gridColumn;
        tile.style.gridRow = project.gridRow;
        
        tile.innerHTML = `
            <div class="project-image" style="background-image: url('${project.image}');"></div>
            <div class="project-content">
                <h2>${project.title}</h2>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <a href="${project.link}" target="_blank">View Project</a>
            </div>
        `;
        
        projectGrid.appendChild(tile);
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', createProjectTiles); 