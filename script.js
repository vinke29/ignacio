const projects = [
    {
        title: "About Me",
        description: "Who I am, what I've built, and what drives me.",
        link: "about.html",
        tag: "Personal",
        accent: "#6366F1",
        svg: `<svg viewBox="0 0 200 130" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <!-- Person silhouette -->
            <circle cx="80" cy="48" r="22" fill="var(--accent)" fill-opacity="0.9"/>
            <path d="M 42 118 Q 42 80 80 76 Q 118 80 118 118" fill="var(--accent)" fill-opacity="0.75"/>
            <!-- Lightbulb body -->
            <circle cx="148" cy="42" r="20" fill="var(--accent)" fill-opacity="0.85" class="pulse-anim"/>
            <!-- Lightbulb base -->
            <rect x="141" y="60" width="14" height="5" rx="2" fill="var(--accent)" fill-opacity="0.9"/>
            <rect x="143" y="65" width="10" height="4" rx="2" fill="var(--accent)" fill-opacity="0.9"/>
            <!-- Rays -->
            <line x1="148" y1="16" x2="148" y2="10" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round" opacity="0.9"/>
            <line x1="166" y1="24" x2="170" y2="20" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round" opacity="0.9"/>
            <line x1="130" y1="24" x2="126" y2="20" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round" opacity="0.9"/>
            <line x1="172" y1="42" x2="178" y2="42" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round" opacity="0.9"/>
            <line x1="124" y1="42" x2="118" y2="42" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round" opacity="0.9"/>
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
            <path d="M 58 68 Q 58 30 100 30 Q 142 30 142 68" fill="none" stroke="var(--accent)" stroke-width="3" stroke-linecap="round"/>
            <!-- Left ear cup -->
            <rect x="44" y="62" width="22" height="34" rx="9" fill="var(--accent)" fill-opacity="0.85" stroke="var(--accent)" stroke-width="1.5"/>
            <!-- Right ear cup -->
            <rect x="134" y="62" width="22" height="34" rx="9" fill="var(--accent)" fill-opacity="0.85" stroke="var(--accent)" stroke-width="1.5"/>
            <!-- EQ bars -->
            <rect x="80" y="72" width="8" height="22" rx="4" fill="var(--accent)" class="eq-bar"/>
            <rect x="92" y="62" width="8" height="32" rx="4" fill="var(--accent)" class="eq-bar"/>
            <rect x="104" y="68" width="8" height="26" rx="4" fill="var(--accent)" class="eq-bar"/>
            <rect x="116" y="58" width="8" height="36" rx="4" fill="var(--accent)" class="eq-bar"/>
        </svg>`,
    },
    {
        title: "HomeFix",
        description: "Subscription handyman — one flat price, your own dedicated pro.",
        link: "https://homefix.team",
        tag: "Startup",
        accent: "#22C55E",
        svg: `<svg viewBox="0 0 200 130" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <!-- House roof -->
            <path d="M 100 18 L 162 62 L 38 62 Z" fill="var(--accent)" fill-opacity="0.9"/>
            <!-- House walls -->
            <rect x="48" y="62" width="104" height="56" fill="var(--accent)" fill-opacity="0.6"/>
            <!-- Door -->
            <rect x="82" y="84" width="36" height="34" rx="3" fill="var(--accent)" fill-opacity="0.95"/>
            <!-- Door knob -->
            <circle cx="112" cy="102" r="3.5" fill="white" fill-opacity="0.9"/>
            <!-- Window -->
            <rect x="56" y="72" width="22" height="20" rx="3" fill="white" fill-opacity="0.85"/>
            <!-- Wrench -->
            <g class="swing-anim">
                <path d="M 148 30 Q 160 22 166 34 L 157 43 L 170 56 Q 174 60 170 64 Q 166 68 162 64 L 149 51 L 140 55 Q 130 50 134 38 Q 138 26 148 30 Z" fill="var(--accent)" fill-opacity="0.95"/>
            </g>
        </svg>`,
    },
    {
        title: "Billie",
        description: "Smart invoice management through intelligent automation.",
        link: "https://billienow.com",
        tag: "Fintech",
        accent: "#3B82F6",
        svg: `<svg viewBox="0 0 200 130" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <!-- Document body -->
            <rect x="52" y="12" width="96" height="108" rx="7" fill="var(--accent)" fill-opacity="0.15" stroke="var(--accent)" stroke-width="1.5"/>
            <!-- Header bar -->
            <rect x="52" y="12" width="96" height="26" rx="7" fill="var(--accent)" fill-opacity="0.9"/>
            <rect x="52" y="30" width="96" height="8" fill="var(--accent)" fill-opacity="0.9"/>
            <!-- Line items -->
            <rect x="64" y="54" width="72" height="7" rx="3" fill="var(--accent)" fill-opacity="0.55"/>
            <rect x="64" y="67" width="58" height="7" rx="3" fill="var(--accent)" fill-opacity="0.4"/>
            <rect x="64" y="80" width="64" height="7" rx="3" fill="var(--accent)" fill-opacity="0.4"/>
            <!-- Total divider -->
            <line x1="64" y1="98" x2="136" y2="98" stroke="var(--accent)" stroke-width="1.5" opacity="0.5"/>
            <rect x="64" y="103" width="72" height="7" rx="3" fill="var(--accent)" fill-opacity="0.7"/>
            <!-- Checkmark badge -->
            <circle cx="136" cy="48" r="14" fill="var(--accent)" fill-opacity="0.9" class="pulse-anim"/>
            <polyline points="129,48 134,53 143,42" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
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
            <rect x="34" y="38" width="132" height="80" rx="12" fill="var(--accent)" fill-opacity="0.8"/>
            <!-- Viewfinder hump -->
            <rect x="70" y="26" width="44" height="18" rx="6" fill="var(--accent)" fill-opacity="0.9"/>
            <!-- Shutter button -->
            <circle cx="154" cy="35" r="8" fill="var(--accent)" fill-opacity="0.95" class="pulse-anim"/>
            <!-- Lens outer ring -->
            <circle cx="100" cy="78" r="30" fill="white" fill-opacity="0.2" stroke="var(--accent)" stroke-width="2"/>
            <!-- Lens mid ring -->
            <circle cx="100" cy="78" r="20" fill="var(--accent)" fill-opacity="0.5"/>
            <!-- Lens inner -->
            <circle cx="100" cy="78" r="11" fill="var(--accent)" fill-opacity="0.95"/>
            <!-- Glint -->
            <circle cx="93" cy="71" r="4" fill="white" fill-opacity="0.7"/>
            <!-- Flash -->
            <rect x="42" y="46" width="18" height="10" rx="2" fill="white" fill-opacity="0.5"/>
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
            <line x1="36" y1="112" x2="176" y2="112" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" opacity="0.7"/>
            <line x1="36" y1="16"  x2="36"  y2="112" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" opacity="0.7"/>
            <!-- Bars — bold filled -->
            <rect x="46"  y="80" width="20" height="32" rx="3" fill="var(--accent)" fill-opacity="0.55" class="eq-bar"/>
            <rect x="74"  y="52" width="20" height="60" rx="3" fill="var(--accent)" fill-opacity="0.7"  class="eq-bar"/>
            <rect x="102" y="64" width="20" height="48" rx="3" fill="var(--accent)" fill-opacity="0.6"  class="eq-bar"/>
            <rect x="130" y="36" width="20" height="76" rx="3" fill="var(--accent)" fill-opacity="0.9"  class="eq-bar"/>
            <rect x="158" y="54" width="20" height="58" rx="3" fill="var(--accent)" fill-opacity="0.75" class="eq-bar"/>
        </svg>`,
    },
    {
        title: "Bookfinder",
        description: "Book discovery reimagined — color grids, emotional spectrums, blind dates.",
        link: "https://books-project-navy.vercel.app",
        tag: "Design",
        accent: "#EC4899",
        svg: `<svg viewBox="0 0 200 130" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <g class="bob-anim">
                <!-- Back book -->
                <rect x="42" y="78" width="86" height="20" rx="4" transform="rotate(-5 85 88)" fill="var(--accent)" fill-opacity="0.4"/>
                <!-- Mid book -->
                <rect x="44" y="56" width="86" height="22" rx="4" fill="var(--accent)" fill-opacity="0.65"/>
                <rect x="44" y="56" width="12" height="22" rx="4" fill="var(--accent)" fill-opacity="0.9"/>
                <!-- Top book -->
                <rect x="46" y="32" width="86" height="24" rx="4" fill="var(--accent)" fill-opacity="0.9"/>
                <rect x="46" y="32" width="14" height="24" rx="4" fill="var(--accent)"/>
                <!-- Title lines on top book -->
                <rect x="68" y="40" width="52" height="5" rx="2" fill="white" fill-opacity="0.7"/>
                <rect x="68" y="49" width="36" height="4" rx="2" fill="white" fill-opacity="0.5"/>
            </g>
            <!-- Magnifying glass -->
            <circle cx="152" cy="84" r="20" fill="none" stroke="var(--accent)" stroke-width="3"/>
            <circle cx="152" cy="84" r="12" fill="var(--accent)" fill-opacity="0.25"/>
            <line x1="166" y1="98" x2="178" y2="110" stroke="var(--accent)" stroke-width="4" stroke-linecap="round"/>
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
            <rect x="40" y="14" width="122" height="104" rx="4" fill="white" stroke="#111" stroke-width="2.5"/>
            <!-- Dividing lines -->
            <line x1="40"  y1="70"  x2="162" y2="70"  stroke="#111" stroke-width="2.5"/>
            <line x1="106" y1="14"  x2="106" y2="118" stroke="#111" stroke-width="2.5"/>
            <line x1="40"  y1="90"  x2="106" y2="90"  stroke="#111" stroke-width="2"/>
            <line x1="128" y1="70"  x2="128" y2="118" stroke="#111" stroke-width="2"/>
            <!-- Red block (top left) -->
            <rect x="41"  y="15"  width="64" height="54" fill="#E8312A"/>
            <!-- Blue block (bottom mid) -->
            <rect x="107" y="71"  width="20" height="46" fill="#1B4FBF"/>
            <!-- Yellow block (bottom right) -->
            <rect x="129" y="71"  width="32" height="46" fill="#F9D100"/>
            <!-- Small blue (bottom left) -->
            <rect x="41"  y="91"  width="64" height="26" fill="#1B4FBF" fill-opacity="0.8"/>
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
            <rect x="0" y="94" width="200" height="36" fill="var(--accent)" fill-opacity="0.18"/>
            <line x1="0" y1="112" x2="200" y2="112" stroke="var(--accent)" stroke-width="1.5" stroke-dasharray="14 10" opacity="0.5"/>
            <!-- Car body -->
            <path d="M 38 94 L 38 76 Q 40 68 52 68 L 78 68 Q 88 54 102 50 L 148 50 Q 162 50 168 64 L 174 76 L 176 94 Z" fill="var(--accent)" fill-opacity="0.9"/>
            <!-- Windshield -->
            <path d="M 104 52 L 90 68 L 148 68 L 153 54 Z" fill="white" fill-opacity="0.4"/>
            <!-- Wheels -->
            <circle cx="70"  cy="96" r="18" fill="var(--accent)" fill-opacity="0.9"/>
            <circle cx="150" cy="96" r="18" fill="var(--accent)" fill-opacity="0.9"/>
            <circle cx="70"  cy="96" r="8"  fill="white" fill-opacity="0.8" class="spin-anim"/>
            <circle cx="150" cy="96" r="8"  fill="white" fill-opacity="0.8" class="spin-anim"/>
            <!-- Wheel cross -->
            <line x1="70" y1="88" x2="70" y2="104" stroke="var(--accent)" stroke-width="2" class="spin-anim"/>
            <line x1="62" y1="96" x2="78"  y2="96" stroke="var(--accent)" stroke-width="2" class="spin-anim"/>
            <!-- Speed lines -->
            <line x1="8"  y1="60" x2="30"  y2="60" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round" opacity="0.7"/>
            <line x1="4"  y1="72" x2="30"  y2="72" stroke="var(--accent)" stroke-width="2"   stroke-linecap="round" opacity="0.5"/>
            <line x1="10" y1="82" x2="30"  y2="82" stroke="var(--accent)" stroke-width="1.5" stroke-linecap="round" opacity="0.35"/>
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
            <rect x="70" y="48" width="104" height="28" rx="14" fill="var(--accent)" fill-opacity="0.9"/>
            <!-- Barrel mouth ring -->
            <ellipse cx="174" cy="62" rx="8" ry="14" fill="var(--accent)"/>
            <!-- Carriage -->
            <rect x="78" y="76" width="86" height="16" rx="4" fill="var(--accent)" fill-opacity="0.7"/>
            <!-- Wheels -->
            <circle cx="96"  cy="98" r="18" fill="var(--accent)" fill-opacity="0.85"/>
            <circle cx="148" cy="98" r="18" fill="var(--accent)" fill-opacity="0.85"/>
            <circle cx="96"  cy="98" r="8"  fill="white" fill-opacity="0.7" class="spin-anim"/>
            <circle cx="148" cy="98" r="8"  fill="white" fill-opacity="0.7" class="spin-anim"/>
            <!-- Cannonball in flight -->
            <g class="fly-anim">
                <circle cx="34" cy="34" r="16" fill="var(--accent)" fill-opacity="0.95"/>
                <!-- Fuse -->
                <path d="M 40 20 Q 50 10 58 18" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
            </g>
            <!-- Trail -->
            <circle cx="58" cy="46" r="3" fill="var(--accent)" opacity="0.4"/>
            <circle cx="64" cy="52" r="2" fill="var(--accent)" opacity="0.3"/>
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
            <line x1="30" y1="108" x2="180" y2="108" stroke="var(--accent)" stroke-width="1.5" opacity="0.4"/>
            <line x1="30" y1="82"  x2="180" y2="82"  stroke="var(--accent)" stroke-width="1" opacity="0.2"/>
            <line x1="30" y1="56"  x2="180" y2="56"  stroke="var(--accent)" stroke-width="1" opacity="0.2"/>
            <line x1="30" y1="30"  x2="180" y2="30"  stroke="var(--accent)" stroke-width="1" opacity="0.2"/>
            <line x1="30" y1="16"  x2="30"  y2="108" stroke="var(--accent)" stroke-width="1.5" opacity="0.4"/>
            <!-- Area fill -->
            <path d="M 38 98 L 65 88 L 88 76 L 112 62 L 134 46 L 156 32 L 172 22 L 172 108 L 38 108 Z" fill="var(--accent)" fill-opacity="0.3"/>
            <!-- Trend line -->
            <polyline points="38,98 65,88 88,76 112,62 134,46 156,32 172,22" fill="none" stroke="var(--accent)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <!-- Arrow -->
            <polyline points="166,18 172,22 178,18" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <!-- Data dots -->
            <circle cx="38"  cy="98" r="4" fill="var(--accent)" class="dot-pulse"/>
            <circle cx="112" cy="62" r="4" fill="var(--accent)" class="dot-pulse" style="animation-delay:0.6s"/>
            <circle cx="172" cy="22" r="5" fill="var(--accent)" class="dot-pulse" style="animation-delay:1.2s"/>
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
