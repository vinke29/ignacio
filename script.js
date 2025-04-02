// Sample project data - you can replace this with your own projects
const projects = [
    {
        title: "Hotel Cannon Game",
        description: "A fun game where players aim a cannon at a hotel to hit specific target rooms.",
        image: "https://via.placeholder.com/400x200",
        link: "https://github.com/yourusername/hotel-cannon-game"
    },
    {
        title: "Project 2",
        description: "Description of your second project goes here.",
        image: "https://via.placeholder.com/400x200",
        link: "#"
    },
    {
        title: "Project 3",
        description: "Description of your third project goes here.",
        image: "https://via.placeholder.com/400x200",
        link: "#"
    }
];

// Function to create project tiles
function createProjectTiles() {
    const projectGrid = document.querySelector('.project-grid');
    
    projects.forEach(project => {
        const tile = document.createElement('div');
        tile.className = 'project-tile';
        
        tile.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <div class="project-content">
                <h2>${project.title}</h2>
                <p>${project.description}</p>
                <a href="${project.link}" target="_blank">View Project</a>
            </div>
        `;
        
        projectGrid.appendChild(tile);
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', createProjectTiles); 