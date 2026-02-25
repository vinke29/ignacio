// Project data with real projects
const projects = [
    {
        title: "About Me",
        description: "Learn more about who I am and what drives me.",
        image: "images/aboutme.png",
        link: "about.html",
        tags: ["Personal", "Background"],
        gridColumn: "span 2",
        gridRow: "span 1"
    },
    {
        title: "listen.",
        description: "Turn any article into a podcast episode. Paste a URL, upload a PDF, or drop in text — get studio-quality audio in seconds.",
        image: "images/listentothis.svg",
        link: "https://listentothis.xyz",
        tags: ["AI", "Audio", "SaaS"],
        gridColumn: "span 1",
        gridRow: "span 1"
    },
    {
        title: "HomeFix",
        description: "A subscription-based handyman service — one visit a month, one flat price, your own dedicated handyman.",
        image: "images/homefix.png",
        link: "https://homefix.team",
        tags: ["Startup", "Subscription", "Service"],
        gridColumn: "span 1",
        gridRow: "span 1"
    },
    {
        title: "Billie",
        description: "Smart invoice management platform that streamlines invoicing through intelligent automation.",
        image: "images/billienow.png",
        link: "https://billienow.com",
        tags: ["Fintech", "Automation", "SaaS"],
        gridColumn: "span 1",
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
        title: "CSV Chart Builder",
        description: "Drop a CSV and Claude picks the best chart for your data. Bar, line, bubble, scatter, and more.",
        image: "images/chartbuilder.svg",
        link: "https://csv-chart-builder.vercel.app",
        tags: ["AI", "Data Viz", "React"],
        gridColumn: "span 1",
        gridRow: "span 1"
    },
    {
        title: "Bookfinder",
        description: "Exploring cool book website ideas — from color grids and emotional spectrums to blind date deals and hype curves.",
        image: "images/bookfinder.png",
        link: "https://books-project-navy.vercel.app",
        tags: ["Next.js", "Design", "Data Viz"],
        gridColumn: "span 1",
        gridRow: "span 1"
    },
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
        title: "Car Racing Game (Desktop Only)",
        description: "A fast-paced racing game with realistic physics and dynamic tracks.",
        image: "images/racing.png",
        link: "racetrack.html",
        tags: ["Game", "WebGL", "Physics"],
        gridColumn: "span 1",
        gridRow: "span 1"
    },
    {
        title: "Bomba - Hotel Cannon Game",
        description: "A physics-based cannon game where you aim at hotel rooms to eliminate evil businessmen. Features wind effects, fireworks, and progressive difficulty.",
        image: "images/cannon.png",
        link: "https://vinke29.github.io/bomba/",
        tags: ["Game", "Physics", "JavaScript"],
        gridColumn: "span 1",
        gridRow: "span 1"
    },
    {
        title: "AI in S&P 500 Earnings Calls",
        description: "Dashboard tracking how every S&P 500 company talks about AI across 2,678 earnings call transcripts — with quotes, charts, and stock correlation.",
        image: "images/grow1k.svg",
        link: "https://grow-1k.vercel.app",
        tags: ["Data", "AI", "Finance"],
        gridColumn: "span 1",
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
            </div>
        `;

        tile.style.cursor = 'pointer';
        tile.addEventListener('click', () => {
            window.open(project.link, '_blank');
        });

        projectGrid.appendChild(tile);
    });

    projectsSection.appendChild(projectGrid);
}

// Initialize the page
document.addEventListener('DOMContentLoaded', createProjectTiles); 