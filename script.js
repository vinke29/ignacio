const projects = [
    {
        title: "About Me",
        description: "Who I am, what I've built, and what drives me.",
        link: "about.html",
        tag: "Personal",
        accent: "#6366F1",
        svg: `<svg viewBox="0 0 200 130" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <!-- Person: indigo -->
            <circle cx="80" cy="48" r="22" fill="#6366F1" fill-opacity="0.9"/>
            <path d="M 42 118 Q 42 80 80 76 Q 118 80 118 118" fill="#6366F1" fill-opacity="0.75"/>
            <!-- Lightbulb: yellow -->
            <circle cx="148" cy="42" r="20" fill="#FBBF24" fill-opacity="0.95" class="pulse-anim"/>
            <rect x="141" y="60" width="14" height="5" rx="2" fill="#FBBF24"/>
            <rect x="143" y="65" width="10" height="4" rx="2" fill="#FBBF24"/>
            <!-- Filament: white -->
            <path d="M 140 46 Q 148 40 156 46" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" opacity="0.8"/>
            <!-- Rays: orange -->
            <line x1="148" y1="16" x2="148" y2="10" stroke="#F97316" stroke-width="2.5" stroke-linecap="round"/>
            <line x1="166" y1="24" x2="170" y2="20" stroke="#F97316" stroke-width="2.5" stroke-linecap="round"/>
            <line x1="130" y1="24" x2="126" y2="20" stroke="#F97316" stroke-width="2.5" stroke-linecap="round"/>
            <line x1="174" y1="42" x2="180" y2="42" stroke="#F97316" stroke-width="2.5" stroke-linecap="round"/>
            <line x1="122" y1="42" x2="116" y2="42" stroke="#F97316" stroke-width="2.5" stroke-linecap="round"/>
        </svg>`,
    },
    {
        title: "listen.",
        description: "Turn any article into a podcast episode in seconds.",
        link: "https://listentothis.xyz",
        tag: "AI · Audio",
        accent: "#F97316",
        svg: `<svg viewBox="0 0 200 130" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <!-- Headphones arc: orange -->
            <path d="M 58 68 Q 58 30 100 30 Q 142 30 142 68" fill="none" stroke="#F97316" stroke-width="3" stroke-linecap="round"/>
            <!-- Left ear cup: orange -->
            <rect x="44" y="62" width="22" height="34" rx="9" fill="#F97316" fill-opacity="0.85"/>
            <!-- Right ear cup: orange -->
            <rect x="134" y="62" width="22" height="34" rx="9" fill="#F97316" fill-opacity="0.85"/>
            <!-- EQ bars: multicolor -->
            <rect x="80"  y="72" width="8" height="22" rx="4" fill="#EF4444" class="eq-bar"/>
            <rect x="92"  y="62" width="8" height="32" rx="4" fill="#F97316" class="eq-bar"/>
            <rect x="104" y="68" width="8" height="26" rx="4" fill="#FBBF24" class="eq-bar"/>
            <rect x="116" y="58" width="8" height="36" rx="4" fill="#22C55E" class="eq-bar"/>
        </svg>`,
    },
    {
        title: "HomeFix",
        description: "Subscription handyman — one flat price, your own dedicated pro.",
        link: "https://homefix.team",
        tag: "Startup",
        accent: "#22C55E",
        svg: `<svg viewBox="0 0 200 130" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <!-- Walls: light green -->
            <rect x="48" y="62" width="104" height="56" fill="#86EFAC"/>
            <!-- Roof: deep green -->
            <path d="M 100 18 L 162 62 L 38 62 Z" fill="#22C55E"/>
            <!-- Window: sky blue -->
            <rect x="56" y="72" width="22" height="20" rx="3" fill="#60A5FA"/>
            <line x1="67" y1="72" x2="67" y2="92" stroke="white" stroke-width="1.5" opacity="0.7"/>
            <line x1="56" y1="82" x2="78" y2="82" stroke="white" stroke-width="1.5" opacity="0.7"/>
            <!-- Door: red -->
            <rect x="82" y="84" width="36" height="34" rx="3" fill="#EF4444"/>
            <circle cx="112" cy="102" r="3.5" fill="#FBBF24"/>
            <!-- Wrench: steel gray -->
            <g class="swing-anim">
                <path d="M 148 30 Q 160 22 166 34 L 157 43 L 170 56 Q 174 60 170 64 Q 166 68 162 64 L 149 51 L 140 55 Q 130 50 134 38 Q 138 26 148 30 Z" fill="#94A3B8"/>
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
            <rect x="52" y="12" width="96" height="108" rx="7" fill="white" fill-opacity="0.6" stroke="#3B82F6" stroke-width="1.5"/>
            <!-- Header bar: blue -->
            <rect x="52" y="12" width="96" height="26" rx="7" fill="#3B82F6"/>
            <rect x="52" y="30" width="96" height="8" fill="#3B82F6"/>
            <!-- Header text lines: white -->
            <rect x="62" y="18" width="48" height="5" rx="2" fill="white" fill-opacity="0.7"/>
            <!-- Line items: varying colors -->
            <rect x="64" y="54" width="72" height="6" rx="3" fill="#3B82F6" fill-opacity="0.5"/>
            <rect x="64" y="66" width="58" height="6" rx="3" fill="#3B82F6" fill-opacity="0.35"/>
            <rect x="64" y="78" width="64" height="6" rx="3" fill="#3B82F6" fill-opacity="0.35"/>
            <!-- Total bar: amber -->
            <line x1="64" y1="98" x2="136" y2="98" stroke="#94A3B8" stroke-width="1.5" opacity="0.4"/>
            <rect x="64" y="103" width="72" height="6" rx="3" fill="#F59E0B" fill-opacity="0.8"/>
            <!-- Checkmark badge: green -->
            <circle cx="136" cy="48" r="14" fill="#22C55E" class="pulse-anim"/>
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
            <!-- Camera body: purple -->
            <rect x="34" y="38" width="132" height="80" rx="12" fill="#A855F7" fill-opacity="0.85"/>
            <!-- Viewfinder hump: darker purple -->
            <rect x="70" y="26" width="44" height="18" rx="6" fill="#7C3AED"/>
            <!-- Shutter button: pink -->
            <circle cx="154" cy="35" r="8" fill="#EC4899" class="pulse-anim"/>
            <!-- Lens outer: white ring -->
            <circle cx="100" cy="78" r="30" fill="white" fill-opacity="0.15" stroke="white" stroke-width="2" opacity="0.6"/>
            <!-- Lens mid: teal -->
            <circle cx="100" cy="78" r="20" fill="#14B8A6" fill-opacity="0.9"/>
            <!-- Lens inner: dark -->
            <circle cx="100" cy="78" r="11" fill="#0F172A" fill-opacity="0.85"/>
            <!-- Glint: white -->
            <circle cx="93" cy="71" r="4" fill="white" fill-opacity="0.8"/>
            <!-- Flash: yellow -->
            <rect x="42" y="46" width="18" height="10" rx="2" fill="#FBBF24" fill-opacity="0.9"/>
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
            <line x1="36" y1="112" x2="176" y2="112" stroke="#64748B" stroke-width="2" stroke-linecap="round"/>
            <line x1="36" y1="16"  x2="36"  y2="112" stroke="#64748B" stroke-width="2" stroke-linecap="round"/>
            <!-- Bars: rainbow -->
            <rect x="46"  y="80" width="20" height="32" rx="3" fill="#3B82F6" class="eq-bar"/>
            <rect x="74"  y="52" width="20" height="60" rx="3" fill="#22C55E" class="eq-bar"/>
            <rect x="102" y="64" width="20" height="48" rx="3" fill="#F59E0B" class="eq-bar"/>
            <rect x="130" y="36" width="20" height="76" rx="3" fill="#EF4444" class="eq-bar"/>
            <rect x="158" y="54" width="20" height="58" rx="3" fill="#A855F7" class="eq-bar"/>
            <!-- Trend line: teal -->
            <polyline points="56,80 84,52 112,64 140,36 168,54" fill="none" stroke="#14B8A6" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5 3"/>
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
                <!-- Back book: amber -->
                <rect x="42" y="76" width="86" height="20" rx="4" transform="rotate(-5 85 86)" fill="#F59E0B" fill-opacity="0.7"/>
                <!-- Mid book: blue -->
                <rect x="44" y="54" width="86" height="22" rx="4" fill="#3B82F6" fill-opacity="0.85"/>
                <rect x="44" y="54" width="13" height="22" rx="4" fill="#1D4ED8"/>
                <!-- Top book: pink -->
                <rect x="46" y="30" width="86" height="24" rx="4" fill="#EC4899" fill-opacity="0.9"/>
                <rect x="46" y="30" width="14" height="24" rx="4" fill="#BE185D"/>
                <!-- Title lines -->
                <rect x="68" y="38" width="50" height="5" rx="2" fill="white" fill-opacity="0.75"/>
                <rect x="68" y="47" width="34" height="4" rx="2" fill="white" fill-opacity="0.5"/>
            </g>
            <!-- Magnifying glass: green -->
            <circle cx="152" cy="84" r="20" fill="none" stroke="#22C55E" stroke-width="3"/>
            <circle cx="152" cy="84" r="12" fill="#22C55E" fill-opacity="0.2"/>
            <line x1="166" y1="98" x2="178" y2="110" stroke="#22C55E" stroke-width="4" stroke-linecap="round"/>
        </svg>`,
    },
    {
        title: "To-do.art",
        description: "A Mondrian-inspired task manager that turns your to-do list into art.",
        link: "https://to-do.art",
        tag: "Art · React",
        accent: "#EF4444",
        svg: `<svg viewBox="0 0 200 130" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <rect x="40" y="14" width="122" height="104" rx="4" fill="white" stroke="#111" stroke-width="2.5"/>
            <line x1="40"  y1="70"  x2="162" y2="70"  stroke="#111" stroke-width="2.5"/>
            <line x1="106" y1="14"  x2="106" y2="118" stroke="#111" stroke-width="2.5"/>
            <line x1="40"  y1="90"  x2="106" y2="90"  stroke="#111" stroke-width="2"/>
            <line x1="128" y1="70"  x2="128" y2="118" stroke="#111" stroke-width="2"/>
            <rect x="41"  y="15"  width="64" height="54" fill="#E8312A"/>
            <rect x="107" y="71"  width="20" height="46" fill="#1B4FBF"/>
            <rect x="129" y="71"  width="32" height="46" fill="#F9D100"/>
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
            <!-- Road: dark gray -->
            <rect x="0" y="94" width="200" height="36" fill="#334155" fill-opacity="0.8"/>
            <line x1="0" y1="112" x2="200" y2="112" stroke="white" stroke-width="2" stroke-dasharray="14 10" opacity="0.4"/>
            <!-- Car body: amber/yellow -->
            <path d="M 38 94 L 38 76 Q 40 68 52 68 L 78 68 Q 88 54 102 50 L 148 50 Q 162 50 168 64 L 174 76 L 176 94 Z" fill="#F59E0B"/>
            <!-- Windshield: blue -->
            <path d="M 104 52 L 90 68 L 148 68 L 153 54 Z" fill="#60A5FA" fill-opacity="0.75"/>
            <!-- Wheels: dark -->
            <circle cx="70"  cy="96" r="18" fill="#1E293B"/>
            <circle cx="150" cy="96" r="18" fill="#1E293B"/>
            <!-- Wheel hubs: red -->
            <circle cx="70"  cy="96" r="8" fill="#EF4444" class="spin-anim"/>
            <circle cx="150" cy="96" r="8" fill="#EF4444" class="spin-anim"/>
            <!-- Speed lines: red -->
            <line x1="8"  y1="60" x2="30" y2="60" stroke="#EF4444" stroke-width="2.5" stroke-linecap="round" opacity="0.85"/>
            <line x1="4"  y1="72" x2="30" y2="72" stroke="#EF4444" stroke-width="2"   stroke-linecap="round" opacity="0.65"/>
            <line x1="10" y1="82" x2="30" y2="82" stroke="#EF4444" stroke-width="1.5" stroke-linecap="round" opacity="0.45"/>
        </svg>`,
    },
    {
        title: "Bomba",
        description: "Physics-based cannon game — aim at hotel rooms, eliminate evil businessmen.",
        link: "https://vinke29.github.io/bomba/",
        tag: "Game",
        accent: "#8B5CF6",
        svg: `<svg viewBox="0 0 200 130" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <!-- Cannon barrel: purple -->
            <rect x="70" y="48" width="104" height="28" rx="14" fill="#8B5CF6"/>
            <ellipse cx="174" cy="62" rx="8" ry="14" fill="#6D28D9"/>
            <!-- Carriage: brown wood -->
            <rect x="78" y="76" width="86" height="16" rx="4" fill="#92400E"/>
            <!-- Wheels: dark brown -->
            <circle cx="96"  cy="98" r="18" fill="#78350F"/>
            <circle cx="148" cy="98" r="18" fill="#78350F"/>
            <!-- Wheel hubs: tan -->
            <circle cx="96"  cy="98" r="8" fill="#D97706" class="spin-anim"/>
            <circle cx="148" cy="98" r="8" fill="#D97706" class="spin-anim"/>
            <!-- Cannonball: near-black -->
            <g class="fly-anim">
                <circle cx="34" cy="34" r="16" fill="#1E293B"/>
                <!-- Shine -->
                <circle cx="28" cy="28" r="5" fill="white" fill-opacity="0.15"/>
                <!-- Fuse: amber -->
                <path d="M 40 20 Q 50 10 58 18" fill="none" stroke="#FBBF24" stroke-width="2.5" stroke-linecap="round"/>
            </g>
            <!-- Trail: orange sparks -->
            <circle cx="58" cy="46" r="3.5" fill="#F97316" opacity="0.6"/>
            <circle cx="65" cy="52" r="2.5" fill="#F97316" opacity="0.4"/>
            <circle cx="71" cy="58" r="1.5" fill="#F97316" opacity="0.25"/>
        </svg>`,
    },
    {
        title: "AI in S&P 500",
        description: "How every S&P 500 company talks about AI across 2,678 earnings calls.",
        link: "https://grow-1k.vercel.app",
        tag: "Data · Finance",
        accent: "#06B6D4",
        svg: `<svg viewBox="0 0 200 130" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <!-- Grid -->
            <line x1="30" y1="108" x2="180" y2="108" stroke="#94A3B8" stroke-width="1.5" opacity="0.5"/>
            <line x1="30" y1="82"  x2="180" y2="82"  stroke="#94A3B8" stroke-width="1" opacity="0.25"/>
            <line x1="30" y1="56"  x2="180" y2="56"  stroke="#94A3B8" stroke-width="1" opacity="0.25"/>
            <line x1="30" y1="30"  x2="180" y2="30"  stroke="#94A3B8" stroke-width="1" opacity="0.25"/>
            <line x1="30" y1="16"  x2="30"  y2="108" stroke="#94A3B8" stroke-width="1.5" opacity="0.5"/>
            <!-- Area fill: cyan -->
            <path d="M 38 98 L 65 88 L 88 76 L 112 62 L 134 46 L 156 32 L 172 22 L 172 108 L 38 108 Z" fill="#06B6D4" fill-opacity="0.2"/>
            <!-- Trend line: cyan -->
            <polyline points="38,98 65,88 88,76 112,62 134,46 156,32 172,22" fill="none" stroke="#06B6D4" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <!-- Arrow: cyan -->
            <polyline points="166,18 172,22 178,18" fill="none" stroke="#06B6D4" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <!-- Dots: red → amber → green (showing growth over time) -->
            <circle cx="38"  cy="98" r="5" fill="#EF4444" class="dot-pulse"/>
            <circle cx="112" cy="62" r="4" fill="#F59E0B" class="dot-pulse" style="animation-delay:0.6s"/>
            <circle cx="172" cy="22" r="5" fill="#22C55E" class="dot-pulse" style="animation-delay:1.2s"/>
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
