const projects = [
    {
        title: "About Me",
        description: "Who I am, what I've built, and what drives me.",
        link: "about.html",
        tag: "Personal",
        num: "01",
        bg: "#1C1C2E",
        accent: "#818CF8",
    },
    {
        title: "listen.",
        description: "Turn any article into a podcast episode in seconds.",
        link: "https://listentothis.xyz",
        tag: "AI · Audio",
        num: "02",
        bg: "#2C1810",
        accent: "#FB923C",
    },
    {
        title: "HomeFix",
        description: "Subscription handyman service — one flat price, your own dedicated pro.",
        link: "https://homefix.team",
        tag: "Startup",
        num: "03",
        bg: "#0E2016",
        accent: "#4ADE80",
    },
    {
        title: "Billie",
        description: "Smart invoice management through intelligent automation.",
        link: "https://billienow.com",
        tag: "Fintech",
        num: "04",
        bg: "#0E1C2C",
        accent: "#60A5FA",
    },
    {
        title: "Aguacate Morado",
        description: "A minimalist photography portfolio capturing moments through a unique lens.",
        link: "https://aguacatemorado.com",
        tag: "Photography",
        num: "05",
        bg: "#1A0E2C",
        accent: "#C084FC",
    },
    {
        title: "CSV Chart Builder",
        description: "Drop a CSV and Claude picks the best chart for your data.",
        link: "https://csv-chart-builder.vercel.app",
        tag: "AI · Data",
        num: "06",
        bg: "#0A2620",
        accent: "#34D399",
    },
    {
        title: "Bookfinder",
        description: "Book discovery reimagined — color grids, emotional spectrums, blind date deals.",
        link: "https://books-project-navy.vercel.app",
        tag: "Design",
        num: "07",
        bg: "#2C1A1A",
        accent: "#FB7185",
    },
    {
        title: "To-do.art",
        description: "A Mondrian-inspired task manager that turns your to-do list into art.",
        link: "https://to-do.art",
        tag: "Art · React",
        num: "08",
        bg: "#2C0E0E",
        accent: "#F87171",
    },
    {
        title: "Car Racing",
        description: "A fast-paced browser racing game with realistic physics and dynamic tracks.",
        link: "racetrack.html",
        tag: "Game",
        num: "09",
        bg: "#2A1A08",
        accent: "#FBBF24",
    },
    {
        title: "Bomba",
        description: "Physics-based cannon game — aim at hotel rooms, eliminate evil businessmen.",
        link: "https://vinke29.github.io/bomba/",
        tag: "Game",
        num: "10",
        bg: "#141414",
        accent: "#A78BFA",
    },
    {
        title: "AI in S&P 500",
        description: "How every S&P 500 company talks about AI across 2,678 earnings call transcripts.",
        link: "https://grow-1k.vercel.app",
        tag: "Data · Finance",
        num: "11",
        bg: "#08141E",
        accent: "#38BDF8",
    },
]

function createProjectTiles() {
    const projectsSection = document.querySelector('.projects-section')
    const projectGrid = document.createElement('div')
    projectGrid.className = 'project-grid'

    projects.forEach(project => {
        const tile = document.createElement('div')
        tile.className = 'project-tile'
        tile.style.background = project.bg

        tile.innerHTML = `
            <div class="tile-top">
                <span class="tile-num">${project.num}</span>
                <span class="tile-tag" style="color: ${project.accent}">${project.tag}</span>
            </div>
            <div class="tile-bottom">
                <h2 class="tile-title">${project.title}</h2>
                <p class="tile-desc">${project.description}</p>
            </div>
            <div class="tile-hover-line" style="background: ${project.accent}"></div>
        `

        tile.addEventListener('click', () => {
            if (project.link.startsWith('http')) {
                window.open(project.link, '_blank')
            } else {
                window.location.href = project.link
            }
        })

        tile.addEventListener('touchstart', () => tile.classList.add('active'), { passive: true })
        tile.addEventListener('touchend', () => setTimeout(() => tile.classList.remove('active'), 400), { passive: true })

        projectGrid.appendChild(tile)
    })

    projectsSection.appendChild(projectGrid)
}

document.addEventListener('DOMContentLoaded', createProjectTiles)
