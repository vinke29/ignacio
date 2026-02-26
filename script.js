const A = 'var(--accent)'   // shorthand for SVG attributes

const projects = [
    {
        title: "About Me",
        description: "Who I am, what I've built, and what drives me.",
        link: "about.html",
        tag: "Personal",
        accent: "#6366F1",
        svg: `<svg viewBox="0 0 200 130" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <!-- Person head -->
            <circle cx="85" cy="45" r="20" fill="none" stroke="var(--accent)" stroke-width="2"/>
            <!-- Person shoulders -->
            <path d="M 52 110 Q 52 78 85 75 Q 118 78 118 110" fill="var(--accent)" fill-opacity="0.1" stroke="var(--accent)" stroke-width="2" stroke-linecap="round"/>
            <!-- Lightbulb -->
            <circle cx="145" cy="38" r="17" fill="var(--accent)" fill-opacity="0.12" stroke="var(--accent)" stroke-width="2"/>
            <line x1="138" y1="55" x2="152" y2="55" stroke="var(--accent)" stroke-width="2" stroke-linecap="round"/>
            <line x1="140" y1="61" x2="150" y2="61" stroke="var(--accent)" stroke-width="2" stroke-linecap="round"/>
            <!-- Filament -->
            <path d="M 138 46 Q 145 40 152 46" fill="none" stroke="var(--accent)" stroke-width="1.5" stroke-linecap="round"/>
            <!-- Rays -->
            <line x1="145" y1="16" x2="145" y2="10" stroke="var(--accent)" stroke-width="1.5" stroke-linecap="round"/>
            <line x1="161" y1="22" x2="165" y2="18" stroke="var(--accent)" stroke-width="1.5" stroke-linecap="round"/>
            <line x1="129" y1="22" x2="125" y2="18" stroke="var(--accent)" stroke-width="1.5" stroke-linecap="round"/>
            <line x1="167" y1="38" x2="173" y2="38" stroke="var(--accent)" stroke-width="1.5" stroke-linecap="round"/>
        </svg>`,
    },
    {
        title: "listen.",
        description: "Turn any article into a podcast episode in seconds.",
        link: "https://listentothis.xyz",
        tag: "AI · Audio",
        accent: "#F97316",
        svg: `<svg viewBox="0 0 200 130" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <!-- Headphones arc -->
            <path d="M 58 68 Q 58 30 100 30 Q 142 30 142 68" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round"/>
            <!-- Left ear cup -->
            <rect x="44" y="62" width="20" height="32" rx="8" fill="var(--accent)" fill-opacity="0.2" stroke="var(--accent)" stroke-width="2"/>
            <!-- Right ear cup -->
            <rect x="136" y="62" width="20" height="32" rx="8" fill="var(--accent)" fill-opacity="0.2" stroke="var(--accent)" stroke-width="2"/>
            <!-- EQ bars -->
            <rect x="80" y="72" width="8" height="22" rx="4" fill="var(--accent)" fill-opacity="0.5" class="eq-bar"/>
            <rect x="92" y="63" width="8" height="31" rx="4" fill="var(--accent)" fill-opacity="0.7" class="eq-bar"/>
            <rect x="104" y="68" width="8" height="26" rx="4" fill="var(--accent)" fill-opacity="0.6" class="eq-bar"/>
            <rect x="116" y="60" width="8" height="34" rx="4" fill="var(--accent)" class="eq-bar"/>
        </svg>`,
    },
    {
        title: "HomeFix",
        description: "Subscription handyman — one flat price, your own dedicated pro.",
        link: "https://homefix.team",
        tag: "Startup",
        accent: "#22C55E",
        svg: `<svg viewBox="0 0 200 130" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <!-- House shape -->
            <path d="M 100 20 L 158 62 L 158 118 L 42 118 L 42 62 Z" fill="var(--accent)" fill-opacity="0.1" stroke="var(--accent)" stroke-width="2" stroke-linejoin="round"/>
            <!-- Door -->
            <rect x="83" y="82" width="34" height="36" rx="3" fill="var(--accent)" fill-opacity="0.15" stroke="var(--accent)" stroke-width="1.5"/>
            <!-- Door knob -->
            <circle cx="111" cy="100" r="3" fill="var(--accent)"/>
            <!-- Window -->
            <rect x="50" y="74" width="24" height="22" rx="2" fill="var(--accent)" fill-opacity="0.1" stroke="var(--accent)" stroke-width="1.5"/>
            <line x1="62" y1="74" x2="62" y2="96" stroke="var(--accent)" stroke-width="1" opacity="0.5"/>
            <line x1="50" y1="85" x2="74" y2="85" stroke="var(--accent)" stroke-width="1" opacity="0.5"/>
            <!-- Wrench (top right) -->
            <path d="M 148 28 Q 158 22 163 32 L 155 40 L 168 53 Q 172 57 168 61 Q 164 65 160 61 L 147 48 L 139 52 Q 129 48 133 38 Q 137 28 148 28 Z" fill="var(--accent)" fill-opacity="0.2" stroke="var(--accent)" stroke-width="1.5" stroke-linejoin="round"/>
        </svg>`,
    },
    {
        title: "Billie",
        description: "Smart invoice management through intelligent automation.",
        link: "https://billienow.com",
        tag: "Fintech",
        accent: "#3B82F6",
        svg: `<svg viewBox="0 0 200 130" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <!-- Document -->
            <rect x="55" y="14" width="90" height="108" rx="6" fill="var(--accent)" fill-opacity="0.08" stroke="var(--accent)" stroke-width="2"/>
            <!-- Header bar -->
            <rect x="55" y="14" width="90" height="22" rx="6" fill="var(--accent)" fill-opacity="0.2"/>
            <rect x="55" y="28" width="90" height="8" fill="var(--accent)" fill-opacity="0.2"/>
            <!-- Line items -->
            <line x1="67" y1="54" x2="133" y2="54" stroke="var(--accent)" stroke-width="1.5" opacity="0.6"/>
            <line x1="67" y1="66" x2="125" y2="66" stroke="var(--accent)" stroke-width="1.5" opacity="0.45"/>
            <line x1="67" y1="78" x2="128" y2="78" stroke="var(--accent)" stroke-width="1.5" opacity="0.45"/>
            <line x1="67" y1="90" x2="120" y2="90" stroke="var(--accent)" stroke-width="1.5" opacity="0.35"/>
            <!-- Total divider -->
            <line x1="67" y1="100" x2="133" y2="100" stroke="var(--accent)" stroke-width="1.5"/>
            <!-- Checkmark -->
            <circle cx="136" cy="50" r="11" fill="var(--accent)" fill-opacity="0.15" stroke="var(--accent)" stroke-width="1.5"/>
            <polyline points="130,50 134,54 142,45" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
    },
    {
        title: "Aguacate Morado",
        description: "A minimalist photography portfolio capturing moments through a unique lens.",
        link: "https://aguacatemorado.com",
        tag: "Photography",
        accent: "#A855F7",
        svg: `<svg viewBox="0 0 200 130" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <!-- Camera body -->
            <rect x="38" y="40" width="124" height="80" rx="10" fill="var(--accent)" fill-opacity="0.1" stroke="var(--accent)" stroke-width="2"/>
            <!-- Viewfinder hump -->
            <rect x="72" y="28" width="42" height="18" rx="5" fill="var(--accent)" fill-opacity="0.1" stroke="var(--accent)" stroke-width="1.5"/>
            <!-- Shutter button -->
            <circle cx="150" cy="37" r="7" fill="var(--accent)" fill-opacity="0.3" stroke="var(--accent)" stroke-width="1.5"/>
            <!-- Lens outer -->
            <circle cx="100" cy="80" r="30" fill="none" stroke="var(--accent)" stroke-width="2"/>
            <!-- Lens middle -->
            <circle cx="100" cy="80" r="20" fill="var(--accent)" fill-opacity="0.08" stroke="var(--accent)" stroke-width="1.5"/>
            <!-- Lens inner -->
            <circle cx="100" cy="80" r="11" fill="var(--accent)" fill-opacity="0.2" stroke="var(--accent)" stroke-width="1.5"/>
            <!-- Lens glint -->
            <circle cx="93" cy="73" r="3" fill="var(--accent)" fill-opacity="0.5"/>
            <!-- Flash -->
            <rect x="46" y="48" width="18" height="10" rx="2" fill="none" stroke="var(--accent)" stroke-width="1.5"/>
        </svg>`,
    },
    {
        title: "CSV Chart Builder",
        description: "Drop a CSV and Claude picks the best chart for your data.",
        link: "https://csv-chart-builder.vercel.app",
        tag: "AI · Data",
        accent: "#14B8A6",
        svg: `<svg viewBox="0 0 200 130" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <!-- Axes -->
            <line x1="38" y1="112" x2="172" y2="112" stroke="var(--accent)" stroke-width="2" stroke-linecap="round"/>
            <line x1="38" y1="18" x2="38" y2="112" stroke="var(--accent)" stroke-width="2" stroke-linecap="round"/>
            <!-- Bars -->
            <rect x="48" y="78" width="18" height="34" rx="3" fill="var(--accent)" fill-opacity="0.6"/>
            <rect x="74" y="50" width="18" height="62" rx="3" fill="var(--accent)" fill-opacity="0.75"/>
            <rect x="100" y="63" width="18" height="49" rx="3" fill="var(--accent)" fill-opacity="0.65"/>
            <rect x="126" y="36" width="18" height="76" rx="3" fill="var(--accent)"/>
            <rect x="152" y="55" width="18" height="57" rx="3" fill="var(--accent)" fill-opacity="0.7"/>
            <!-- Trend line -->
            <polyline points="57,78 83,50 109,63 135,36 161,55" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5 3" opacity="0.7"/>
        </svg>`,
    },
    {
        title: "Bookfinder",
        description: "Book discovery reimagined — color grids, emotional spectrums, blind dates.",
        link: "https://books-project-navy.vercel.app",
        tag: "Design",
        accent: "#EC4899",
        svg: `<svg viewBox="0 0 200 130" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <!-- Back book (tilted) -->
            <rect x="44" y="72" width="82" height="22" rx="4" transform="rotate(-4 85 83)" fill="var(--accent)" fill-opacity="0.08" stroke="var(--accent)" stroke-width="1.5"/>
            <!-- Middle book -->
            <rect x="46" y="50" width="82" height="22" rx="4" fill="var(--accent)" fill-opacity="0.14" stroke="var(--accent)" stroke-width="1.5"/>
            <line x1="58" y1="50" x2="58" y2="72" stroke="var(--accent)" stroke-width="2.5"/>
            <!-- Top book -->
            <rect x="48" y="28" width="82" height="22" rx="4" fill="var(--accent)" fill-opacity="0.22" stroke="var(--accent)" stroke-width="2"/>
            <line x1="60" y1="28" x2="60" y2="50" stroke="var(--accent)" stroke-width="3"/>
            <!-- Title lines on top book -->
            <line x1="68" y1="37" x2="116" y2="37" stroke="var(--accent)" stroke-width="1.5" opacity="0.7"/>
            <line x1="68" y1="44" x2="105" y2="44" stroke="var(--accent)" stroke-width="1.5" opacity="0.5"/>
            <!-- Magnifying glass -->
            <circle cx="148" cy="82" r="18" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
            <line x1="161" y1="95" x2="173" y2="107" stroke="var(--accent)" stroke-width="3" stroke-linecap="round"/>
            <line x1="138" y1="82" x2="158" y2="82" stroke="var(--accent)" stroke-width="1.5" opacity="0.4"/>
            <line x1="148" y1="72" x2="148" y2="92" stroke="var(--accent)" stroke-width="1.5" opacity="0.4"/>
        </svg>`,
    },
    {
        title: "To-do.art",
        description: "A Mondrian-inspired task manager that turns your to-do list into art.",
        link: "https://to-do.art",
        tag: "Art · React",
        accent: "#EF4444",
        svg: `<svg viewBox="0 0 200 130" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <!-- Mondrian grid — uses fixed colors, not accent -->
            <rect x="40" y="16" width="120" height="102" rx="4" fill="white" stroke="#111" stroke-width="2.5"/>
            <!-- Dividing lines -->
            <line x1="40" y1="70" x2="160" y2="70" stroke="#111" stroke-width="2.5"/>
            <line x1="105" y1="16" x2="105" y2="118" stroke="#111" stroke-width="2.5"/>
            <line x1="40" y1="90" x2="105" y2="90" stroke="#111" stroke-width="2"/>
            <line x1="128" y1="70" x2="128" y2="118" stroke="#111" stroke-width="2"/>
            <!-- Red block (top left) -->
            <rect x="41" y="17" width="63" height="52" fill="#E8312A"/>
            <!-- Blue block (bottom mid) -->
            <rect x="106" y="71" width="21" height="46" fill="#1B4FBF"/>
            <!-- Yellow block (bottom right) -->
            <rect x="129" y="71" width="30" height="46" fill="#F9D100"/>
            <!-- Small blue (bottom left) -->
            <rect x="41" y="91" width="63" height="26" fill="#1B4FBF" fill-opacity="0.7"/>
        </svg>`,
    },
    {
        title: "Car Racing",
        description: "A fast-paced browser racing game with realistic physics.",
        link: "racetrack.html",
        tag: "Game",
        accent: "#F59E0B",
        svg: `<svg viewBox="0 0 200 130" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <!-- Road -->
            <rect x="0" y="92" width="200" height="38" fill="var(--accent)" fill-opacity="0.07"/>
            <line x1="0" y1="111" x2="200" y2="111" stroke="var(--accent)" stroke-width="1" stroke-dasharray="14 10" opacity="0.3"/>
            <!-- Car body -->
            <path d="M 42 92 L 42 76 Q 44 70 54 70 L 78 70 Q 86 57 100 52 L 145 52 Q 160 52 166 65 L 172 76 L 174 92 Z" fill="var(--accent)" fill-opacity="0.18" stroke="var(--accent)" stroke-width="2" stroke-linejoin="round"/>
            <!-- Windshield -->
            <path d="M 102 54 L 88 70 L 146 70 L 150 56 Z" fill="var(--accent)" fill-opacity="0.25"/>
            <!-- Wheels -->
            <circle cx="72" cy="92" r="16" fill="white" stroke="var(--accent)" stroke-width="2.5"/>
            <circle cx="148" cy="92" r="16" fill="white" stroke="var(--accent)" stroke-width="2.5"/>
            <circle cx="72" cy="92" r="7" fill="var(--accent)" fill-opacity="0.5"/>
            <circle cx="148" cy="92" r="7" fill="var(--accent)" fill-opacity="0.5"/>
            <!-- Speed lines -->
            <line x1="10" y1="62" x2="34" y2="62" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" opacity="0.55"/>
            <line x1="4" y1="72" x2="32" y2="72" stroke="var(--accent)" stroke-width="1.5" stroke-linecap="round" opacity="0.4"/>
            <line x1="8" y1="82" x2="34" y2="82" stroke="var(--accent)" stroke-width="1" stroke-linecap="round" opacity="0.3"/>
        </svg>`,
    },
    {
        title: "Bomba",
        description: "Physics-based cannon game — aim at hotel rooms, eliminate evil businessmen.",
        link: "https://vinke29.github.io/bomba/",
        tag: "Game",
        accent: "#8B5CF6",
        svg: `<svg viewBox="0 0 200 130" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <!-- Cannon barrel -->
            <rect x="72" y="50" width="100" height="26" rx="13" fill="var(--accent)" fill-opacity="0.15" stroke="var(--accent)" stroke-width="2"/>
            <!-- Barrel mouth ring -->
            <ellipse cx="172" cy="63" rx="7" ry="13" fill="var(--accent)" fill-opacity="0.1" stroke="var(--accent)" stroke-width="1.5"/>
            <!-- Carriage -->
            <path d="M 80 76 L 160 76 L 160 90 L 80 90 Z" fill="var(--accent)" fill-opacity="0.1" stroke="var(--accent)" stroke-width="1.5"/>
            <!-- Wheels -->
            <circle cx="96" cy="96" r="18" fill="none" stroke="var(--accent)" stroke-width="2"/>
            <circle cx="144" cy="96" r="18" fill="none" stroke="var(--accent)" stroke-width="2"/>
            <line x1="96" y1="78" x2="96" y2="114" stroke="var(--accent)" stroke-width="1.5" opacity="0.4"/>
            <line x1="78" y1="96" x2="114" y2="96" stroke="var(--accent)" stroke-width="1.5" opacity="0.4"/>
            <line x1="144" y1="78" x2="144" y2="114" stroke="var(--accent)" stroke-width="1.5" opacity="0.4"/>
            <line x1="126" y1="96" x2="162" y2="96" stroke="var(--accent)" stroke-width="1.5" opacity="0.4"/>
            <!-- Cannonball in flight -->
            <circle cx="36" cy="36" r="14" fill="var(--accent)" fill-opacity="0.25" stroke="var(--accent)" stroke-width="2"/>
            <!-- Fuse -->
            <path d="M 42 24 Q 50 16 56 22" fill="none" stroke="var(--accent)" stroke-width="1.5" stroke-linecap="round"/>
            <!-- Trail dots -->
            <circle cx="56" cy="46" r="2.5" fill="var(--accent)" opacity="0.4"/>
            <circle cx="63" cy="52" r="2" fill="var(--accent)" opacity="0.3"/>
            <circle cx="70" cy="58" r="1.5" fill="var(--accent)" opacity="0.2"/>
        </svg>`,
    },
    {
        title: "AI in S&P 500",
        description: "How every S&P 500 company talks about AI across 2,678 earnings calls.",
        link: "https://grow-1k.vercel.app",
        tag: "Data · Finance",
        accent: "#06B6D4",
        svg: `<svg viewBox="0 0 200 130" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <!-- Grid lines -->
            <line x1="32" y1="108" x2="178" y2="108" stroke="var(--accent)" stroke-width="1.5" opacity="0.3"/>
            <line x1="32" y1="82"  x2="178" y2="82"  stroke="var(--accent)" stroke-width="1" opacity="0.15"/>
            <line x1="32" y1="56"  x2="178" y2="56"  stroke="var(--accent)" stroke-width="1" opacity="0.15"/>
            <line x1="32" y1="30"  x2="178" y2="30"  stroke="var(--accent)" stroke-width="1" opacity="0.15"/>
            <!-- Y axis -->
            <line x1="32" y1="18" x2="32" y2="108" stroke="var(--accent)" stroke-width="1.5" opacity="0.3"/>
            <!-- Area under curve -->
            <path d="M 40 98 L 65 90 L 85 80 L 108 66 L 128 52 L 150 38 L 168 26 L 168 108 L 40 108 Z" fill="var(--accent)" fill-opacity="0.1"/>
            <!-- Trend line -->
            <polyline points="40,98 65,90 85,80 108,66 128,52 150,38 168,26" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <!-- Up arrow at end -->
            <polyline points="162,22 168,26 174,22" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <!-- Data dots -->
            <circle cx="40" cy="98" r="3.5" fill="var(--accent)"/>
            <circle cx="108" cy="66" r="3" fill="var(--accent)" fill-opacity="0.6"/>
            <circle cx="168" cy="26" r="4.5" fill="var(--accent)"/>
        </svg>`,
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
        tile.style.setProperty('--phase', `${(i * 1.1).toFixed(1)}s`)

        tile.innerHTML = `
            <div class="tile-visual">${project.svg}</div>
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
