const projects = [
    {
        title: "About Me",
        description: "Who I am, what I've built, and what drives me.",
        link: "about.html",
        tag: "Personal",
        accent: "#6366F1",
    },
    {
        title: "listen.",
        description: "Turn any article into a podcast episode in seconds.",
        link: "https://listentothis.xyz",
        tag: "AI · Audio",
        accent: "#F97316",
    },
    {
        title: "HomeFix",
        description: "Subscription handyman — one flat price, your own dedicated pro.",
        link: "https://homefix.team",
        tag: "Startup",
        accent: "#22C55E",
    },
    {
        title: "Billie",
        description: "Smart invoice management through intelligent automation.",
        link: "https://billienow.com",
        tag: "Fintech",
        accent: "#3B82F6",
    },
    {
        title: "Aguacate Morado",
        description: "A minimalist photography portfolio capturing moments through a unique lens.",
        link: "https://aguacatemorado.com",
        tag: "Photography",
        accent: "#A855F7",
    },
    {
        title: "CSV Chart Builder",
        description: "Drop a CSV and Claude picks the best chart for your data.",
        link: "https://csv-chart-builder.vercel.app",
        tag: "AI · Data",
        accent: "#14B8A6",
    },
    {
        title: "Bookfinder",
        description: "Book discovery reimagined — color grids, emotional spectrums, blind dates.",
        link: "https://books-project-navy.vercel.app",
        tag: "Design",
        accent: "#EC4899",
    },
    {
        title: "To-do.art",
        description: "A Mondrian-inspired task manager that turns your to-do list into art.",
        link: "https://to-do.art",
        tag: "Art · React",
        accent: "#EF4444",
    },
    {
        title: "Car Racing",
        description: "A fast-paced browser racing game with realistic physics.",
        link: "racetrack.html",
        tag: "Game",
        accent: "#F59E0B",
    },
    {
        title: "Bomba",
        description: "Physics-based cannon game — aim at hotel rooms, eliminate evil businessmen.",
        link: "https://vinke29.github.io/bomba/",
        tag: "Game",
        accent: "#8B5CF6",
    },
    {
        title: "AI in S&P 500",
        description: "How every S&P 500 company talks about AI across 2,678 earnings calls.",
        link: "https://grow-1k.vercel.app",
        tag: "Data · Finance",
        accent: "#06B6D4",
    },
]

function createProjectTiles() {
    const projectsSection = document.querySelector('.projects-section')
    const projectGrid = document.createElement('div')
    projectGrid.className = 'project-grid'

    projects.forEach((project, i) => {
        const tile = document.createElement('div')
        tile.className = 'project-tile'
        tile.style.setProperty('--accent', project.accent)
        // Stagger animation phase so tiles don't all move in sync
        tile.style.setProperty('--phase', `${(i * 1.3).toFixed(1)}s`)

        tile.innerHTML = `
            <div class="tile-visual">
                <div class="tile-dot dot-a"></div>
                <div class="tile-dot dot-b"></div>
                <div class="tile-dot dot-c"></div>
                <div class="tile-ring"></div>
            </div>
            <div class="tile-text">
                <span class="tile-tag">${project.tag}</span>
                <h2 class="tile-title">${project.title}</h2>
                <p class="tile-desc">${project.description}</p>
            </div>
        `

        tile.addEventListener('click', () => {
            if (project.link.startsWith('http')) {
                window.open(project.link, '_blank')
            } else {
                window.location.href = project.link
            }
        })

        projectGrid.appendChild(tile)
    })

    projectsSection.appendChild(projectGrid)
}

document.addEventListener('DOMContentLoaded', createProjectTiles)
