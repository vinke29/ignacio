const projects = [
    {
        title: "About Me",
        description: "Who I am, what I've built, and what drives me.",
        link: "about.html",
        tag: "Personal",
        accent: "#6366F1",
        svg: `<svg viewBox="0 0 200 130" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <!-- Person: refined proportions -->
            <circle cx="78" cy="44" r="14" fill="#6366F1" fill-opacity="0.9"/>
            <rect x="70" y="58" width="16" height="22" rx="4" fill="#6366F1" fill-opacity="0.75"/>
            <line x1="70" y1="64" x2="56" y2="78" stroke="#6366F1" stroke-width="1.5" stroke-linecap="round" opacity="0.7"/>
            <line x1="86" y1="64" x2="100" y2="78" stroke="#6366F1" stroke-width="1.5" stroke-linecap="round" opacity="0.7"/>
            <line x1="74" y1="80" x2="70" y2="96" stroke="#6366F1" stroke-width="1.5" stroke-linecap="round" opacity="0.7"/>
            <line x1="82" y1="80" x2="86" y2="96" stroke="#6366F1" stroke-width="1.5" stroke-linecap="round" opacity="0.7"/>
            <!-- Lightbulb: yellow, refined -->
            <circle cx="144" cy="44" r="18" fill="#FBBF24" fill-opacity="0.9" class="pulse-anim"/>
            <line x1="138" y1="62" x2="150" y2="62" stroke="#FBBF24" stroke-width="2" stroke-linecap="round"/>
            <line x1="140" y1="67" x2="148" y2="67" stroke="#FBBF24" stroke-width="2" stroke-linecap="round"/>
            <!-- Filament -->
            <path d="M 137 48 Q 144 42 151 48" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" opacity="0.7"/>
            <!-- Rays: orange, thin -->
            <line x1="144" y1="19" x2="144" y2="14" stroke="#F97316" stroke-width="2" stroke-linecap="round"/>
            <line x1="160" y1="26" x2="163" y2="22" stroke="#F97316" stroke-width="2" stroke-linecap="round"/>
            <line x1="128" y1="26" x2="125" y2="22" stroke="#F97316" stroke-width="2" stroke-linecap="round"/>
            <line x1="166" y1="44" x2="171" y2="44" stroke="#F97316" stroke-width="2" stroke-linecap="round"/>
            <line x1="122" y1="44" x2="117" y2="44" stroke="#F97316" stroke-width="2" stroke-linecap="round"/>
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
            <path d="M 60 68 Q 60 32 100 32 Q 140 32 140 68" fill="none" stroke="#F97316" stroke-width="2.5" stroke-linecap="round"/>
            <!-- Left ear cup -->
            <rect x="46" y="63" width="20" height="30" rx="8" fill="#F97316" fill-opacity="0.85"/>
            <!-- Right ear cup -->
            <rect x="134" y="63" width="20" height="30" rx="8" fill="#F97316" fill-opacity="0.85"/>
            <!-- EQ bars: multicolor -->
            <rect x="82"  y="74" width="7" height="20" rx="3" fill="#EF4444" class="eq-bar"/>
            <rect x="93"  y="65" width="7" height="29" rx="3" fill="#F97316" class="eq-bar"/>
            <rect x="104" y="70" width="7" height="24" rx="3" fill="#FBBF24" class="eq-bar"/>
            <rect x="115" y="61" width="7" height="33" rx="3" fill="#22C55E" class="eq-bar"/>
        </svg>`,
    },
    {
        title: "HomeFix",
        description: "Subscription handyman — one flat price, your own dedicated pro.",
        link: "https://homefix.team",
        tag: "Startup",
        accent: "#22C55E",
        svg: `<svg viewBox="0 0 200 130" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <!-- Walls -->
            <rect x="50" y="64" width="100" height="54" fill="#86EFAC"/>
            <!-- Roof with eaves -->
            <path d="M 100 16 L 168 66 L 32 66 Z" fill="#22C55E"/>
            <!-- Eave line -->
            <line x1="32" y1="66" x2="168" y2="66" stroke="#16A34A" stroke-width="1.5" opacity="0.6"/>
            <!-- Chimney -->
            <rect x="128" y="26" width="12" height="28" rx="1" fill="#16A34A"/>
            <!-- Window: sky blue -->
            <rect x="58" y="76" width="24" height="20" rx="2" fill="#60A5FA"/>
            <line x1="70" y1="76" x2="70" y2="96" stroke="white" stroke-width="1" opacity="0.6"/>
            <line x1="58" y1="86" x2="82" y2="86" stroke="white" stroke-width="1" opacity="0.6"/>
            <!-- Door: red -->
            <rect x="84" y="86" width="32" height="32" rx="2" fill="#EF4444"/>
            <circle cx="111" cy="103" r="3" fill="#FBBF24"/>
            <!-- Wrench: steel, swing animation -->
            <g class="swing-anim">
                <path d="M 150 34 Q 160 27 165 37 L 157 45 L 168 56 Q 172 60 168 64 Q 164 68 160 64 L 149 53 L 141 57 Q 132 52 136 41 Q 140 30 150 34 Z" fill="#94A3B8"/>
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
            <rect x="54" y="12" width="92" height="106" rx="6" fill="white" fill-opacity="0.55" stroke="#3B82F6" stroke-width="1.5" opacity="0.4"/>
            <!-- Header bar -->
            <rect x="54" y="12" width="92" height="24" rx="6" fill="#3B82F6"/>
            <rect x="54" y="28" width="92" height="8" fill="#3B82F6"/>
            <!-- Header label -->
            <rect x="63" y="18" width="44" height="4" rx="2" fill="white" fill-opacity="0.65"/>
            <!-- Line items -->
            <rect x="64" y="52" width="68" height="5" rx="2" fill="#3B82F6" fill-opacity="0.45"/>
            <rect x="64" y="63" width="54" height="5" rx="2" fill="#3B82F6" fill-opacity="0.3"/>
            <rect x="64" y="74" width="60" height="5" rx="2" fill="#3B82F6" fill-opacity="0.3"/>
            <!-- Total -->
            <line x1="64" y1="92" x2="134" y2="92" stroke="#94A3B8" stroke-width="1" opacity="0.4"/>
            <rect x="64" y="97" width="68" height="5" rx="2" fill="#F59E0B" fill-opacity="0.85"/>
            <!-- Checkmark: green -->
            <circle cx="134" cy="48" r="13" fill="#22C55E" class="pulse-anim"/>
            <polyline points="128,48 133,53 141,42" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
            <rect x="36" y="40" width="128" height="76" rx="10" fill="#A855F7" fill-opacity="0.85"/>
            <!-- Viewfinder -->
            <rect x="72" y="28" width="40" height="17" rx="5" fill="#7C3AED"/>
            <!-- Shutter: pink -->
            <circle cx="152" cy="36" r="7" fill="#EC4899" class="pulse-anim"/>
            <!-- Lens outer -->
            <circle cx="100" cy="78" r="27" fill="white" fill-opacity="0.12" stroke="white" stroke-width="1.5" opacity="0.5"/>
            <!-- Lens mid: teal -->
            <circle cx="100" cy="78" r="18" fill="#14B8A6" fill-opacity="0.9"/>
            <!-- Lens inner -->
            <circle cx="100" cy="78" r="10" fill="#0F172A" fill-opacity="0.85"/>
            <!-- Glint -->
            <circle cx="94" cy="72" r="3.5" fill="white" fill-opacity="0.75"/>
            <!-- Flash: yellow -->
            <rect x="44" y="48" width="16" height="9" rx="2" fill="#FBBF24" fill-opacity="0.9"/>
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
            <line x1="36" y1="112" x2="176" y2="112" stroke="#64748B" stroke-width="1.5" stroke-linecap="round"/>
            <line x1="36" y1="18"  x2="36"  y2="112" stroke="#64748B" stroke-width="1.5" stroke-linecap="round"/>
            <!-- Bars: rainbow -->
            <rect x="46"  y="82" width="18" height="30" rx="2" fill="#3B82F6" class="eq-bar"/>
            <rect x="73"  y="54" width="18" height="58" rx="2" fill="#22C55E" class="eq-bar"/>
            <rect x="100" y="66" width="18" height="46" rx="2" fill="#F59E0B" class="eq-bar"/>
            <rect x="127" y="38" width="18" height="74" rx="2" fill="#EF4444" class="eq-bar"/>
            <rect x="154" y="56" width="18" height="56" rx="2" fill="#A855F7" class="eq-bar"/>
            <!-- Trend line: teal dashed -->
            <polyline points="55,82 82,54 109,66 136,38 163,56" fill="none" stroke="#14B8A6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5 3"/>
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
                <rect x="42" y="76" width="84" height="18" rx="3" transform="rotate(-5 84 85)" fill="#F59E0B" fill-opacity="0.65"/>
                <!-- Mid book: blue -->
                <rect x="44" y="54" width="84" height="21" rx="3" fill="#3B82F6" fill-opacity="0.85"/>
                <rect x="44" y="54" width="11" height="21" rx="3" fill="#1D4ED8"/>
                <!-- Top book: pink -->
                <rect x="46" y="30" width="84" height="23" rx="3" fill="#EC4899" fill-opacity="0.9"/>
                <rect x="46" y="30" width="12" height="23" rx="3" fill="#BE185D"/>
                <!-- Title lines -->
                <rect x="66" y="38" width="48" height="4" rx="2" fill="white" fill-opacity="0.7"/>
                <rect x="66" y="46" width="32" height="3" rx="2" fill="white" fill-opacity="0.45"/>
            </g>
            <!-- Magnifying glass: green, refined -->
            <circle cx="152" cy="84" r="18" fill="none" stroke="#22C55E" stroke-width="2"/>
            <circle cx="152" cy="84" r="10" fill="#22C55E" fill-opacity="0.2"/>
            <line x1="164" y1="97" x2="176" y2="109" stroke="#22C55E" stroke-width="2.5" stroke-linecap="round"/>
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
            <!-- Road -->
            <rect x="0" y="96" width="200" height="34" fill="#334155" fill-opacity="0.75"/>
            <line x1="0" y1="113" x2="200" y2="113" stroke="white" stroke-width="1.5" stroke-dasharray="14 10" opacity="0.35"/>
            <!-- Car body: sleeker, lower silhouette -->
            <path d="M 36 96 L 36 80 Q 38 73 50 73 L 72 73 Q 84 58 104 54 L 148 54 Q 160 54 166 66 L 172 80 L 174 96 Z" fill="#F59E0B"/>
            <!-- Windshield: blue -->
            <path d="M 106 56 L 92 72 L 148 72 L 152 57 Z" fill="#60A5FA" fill-opacity="0.7"/>
            <!-- Wheels: dark, smaller r=13 -->
            <circle cx="68"  cy="97" r="13" fill="#1E293B"/>
            <circle cx="152" cy="97" r="13" fill="#1E293B"/>
            <!-- Tread rings -->
            <circle cx="68"  cy="97" r="8" fill="none" stroke="#0f172a" stroke-width="2.5"/>
            <circle cx="152" cy="97" r="8" fill="none" stroke="#0f172a" stroke-width="2.5"/>
            <!-- Hubs: red -->
            <circle cx="68"  cy="97" r="4" fill="#EF4444" class="spin-anim"/>
            <circle cx="152" cy="97" r="4" fill="#EF4444" class="spin-anim"/>
            <!-- Speed lines: red -->
            <line x1="8"  y1="64" x2="28" y2="64" stroke="#EF4444" stroke-width="2" stroke-linecap="round" opacity="0.8"/>
            <line x1="4"  y1="74" x2="28" y2="74" stroke="#EF4444" stroke-width="1.5" stroke-linecap="round" opacity="0.6"/>
            <line x1="10" y1="83" x2="28" y2="83" stroke="#EF4444" stroke-width="1" stroke-linecap="round" opacity="0.4"/>
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
            <rect x="70" y="50" width="102" height="26" rx="13" fill="#8B5CF6"/>
            <ellipse cx="172" cy="63" rx="7" ry="13" fill="#6D28D9"/>
            <!-- Carriage: wood brown -->
            <rect x="78" y="76" width="84" height="14" rx="3" fill="#92400E"/>
            <!-- Wheels: dark brown -->
            <circle cx="94"  cy="96" r="16" fill="#78350F"/>
            <circle cx="146" cy="96" r="16" fill="#78350F"/>
            <!-- Wheel spokes -->
            <line x1="94" y1="80" x2="94" y2="112" stroke="#D97706" stroke-width="1.5" opacity="0.5" class="spin-anim"/>
            <line x1="78" y1="96" x2="110" y2="96" stroke="#D97706" stroke-width="1.5" opacity="0.5" class="spin-anim"/>
            <circle cx="94"  cy="96" r="5" fill="#D97706" class="spin-anim"/>
            <circle cx="146" cy="96" r="5" fill="#D97706" class="spin-anim"/>
            <!-- Cannonball: near-black -->
            <g class="fly-anim">
                <circle cx="34" cy="36" r="14" fill="#1E293B"/>
                <circle cx="28" cy="30" r="4" fill="white" fill-opacity="0.12"/>
                <!-- Fuse: amber -->
                <path d="M 40 22 Q 50 12 58 20" fill="none" stroke="#FBBF24" stroke-width="2" stroke-linecap="round"/>
            </g>
            <!-- Trail -->
            <circle cx="57" cy="46" r="3" fill="#F97316" opacity="0.55"/>
            <circle cx="63" cy="52" r="2" fill="#F97316" opacity="0.35"/>
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
            <line x1="30" y1="108" x2="180" y2="108" stroke="#94A3B8" stroke-width="1.5" opacity="0.45"/>
            <line x1="30" y1="82"  x2="180" y2="82"  stroke="#94A3B8" stroke-width="1" opacity="0.2"/>
            <line x1="30" y1="56"  x2="180" y2="56"  stroke="#94A3B8" stroke-width="1" opacity="0.2"/>
            <line x1="30" y1="30"  x2="180" y2="30"  stroke="#94A3B8" stroke-width="1" opacity="0.2"/>
            <line x1="30" y1="16"  x2="30"  y2="108" stroke="#94A3B8" stroke-width="1.5" opacity="0.45"/>
            <!-- Area fill -->
            <path d="M 38 98 L 65 88 L 88 76 L 112 62 L 134 46 L 156 32 L 172 22 L 172 108 L 38 108 Z" fill="#06B6D4" fill-opacity="0.18"/>
            <!-- Trend line -->
            <polyline points="38,98 65,88 88,76 112,62 134,46 156,32 172,22" fill="none" stroke="#06B6D4" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <!-- Arrow -->
            <polyline points="166,18 172,22 178,18" fill="none" stroke="#06B6D4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <!-- Dots: red → amber → green -->
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

    projects.forEach((project) => {
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

// Dark mode toggle
;(function () {
    function applyTheme() {
        const saved = localStorage.getItem('theme')
        if (saved === 'dark') document.body.classList.add('dark')
    }
    applyTheme()

    document.addEventListener('DOMContentLoaded', () => {
        const toggle = document.getElementById('theme-toggle')
        if (!toggle) return
        toggle.addEventListener('click', () => {
            const isDark = document.body.classList.toggle('dark')
            localStorage.setItem('theme', isDark ? 'dark' : 'light')
        })
    })
})()

document.addEventListener('DOMContentLoaded', createProjectTiles)
