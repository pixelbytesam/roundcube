import { useEffect, useRef, useState } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Syne:wght@500;600&display=swap');

  .fo-hero-wrap {
    width: 100%;
    background: transparent;
    border-radius: 20px;
    // overflow: hidden;
    position: relative;
    min-height: 480px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'JetBrains Mono', monospace;
  }

  .fo-svg-wrap {
    width: 100%;
    max-width: 1000px;
    position: relative;
  }

  @keyframes fo-orbit-spin {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  @keyframes fo-orbit-spin-rev {
    from { transform: rotate(0deg); }
    to   { transform: rotate(-360deg); }
  }
  @keyframes fo-float {
    0%, 100% { transform: translateY(0px); }
    50%       { transform: translateY(-8px); }
  }
  @keyframes fo-float2 {
    0%, 100% { transform: translateY(0px); }
    50%       { transform: translateY(-6px); }
  }
  @keyframes fo-float3 {
    0%, 100% { transform: translateY(0px); }
    50%       { transform: translateY(-10px); }
  }
  @keyframes fo-pulse {
    0%, 100% { opacity: 0.6; }
    50%       { opacity: 1; }
  }
  @keyframes fo-dash {
    to { stroke-dashoffset: -20; }
  }
  @keyframes fo-fadein {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fo-draw-line {
    from { stroke-dashoffset: 200; }
    to   { stroke-dashoffset: 0; }
  }
  @keyframes fo-grow-bar {
    from { transform: scaleX(0); }
    to   { transform: scaleX(1); }
  }
  @keyframes fo-counter-dot {
    0%,100% { r: 3px; opacity:0.5; }
    50%      { r: 5px; opacity:1; }
  }
  @keyframes fo-scan {
    0%   { transform: translateY(0px);   opacity: 0.6; }
    100% { transform: translateY(100px); opacity: 0; }
  }
  @keyframes fo-blink {
    0%,100% { opacity: 1; }
    50%      { opacity: 0; }
  }
  @keyframes fo-chart-rise {
    from { stroke-dashoffset: 400; }
    to   { stroke-dashoffset: 0; }
  }
  @keyframes fo-glow-pulse {
    0%,100% { opacity: 0.15; }
    50%      { opacity: 0.4; }
  }

  .fo-orbit-ring-1 {
    transform-origin: 340px 240px;
    animation: fo-orbit-spin 30s linear infinite;
  }
  .fo-orbit-ring-2 {
    transform-origin: 340px 240px;
    animation: fo-orbit-spin-rev 20s linear infinite;
  }
  .fo-orbit-dot-1 {
    animation: fo-orbit-spin 30s linear infinite;
    transform-origin: 340px 240px;
  }
  .fo-orbit-dot-2 {
    animation: fo-orbit-spin-rev 20s linear infinite;
    transform-origin: 340px 240px;
  }

  .fo-main-card {
    animation: fo-float 6s ease-in-out infinite, fo-fadein 0.8s ease both;
    transform-origin: 340px 180px;
  }
  .fo-card-design {
    animation: fo-float2 7s ease-in-out infinite 0.5s, fo-fadein 0.8s ease 0.2s both;
  }
  .fo-card-build {
    animation: fo-float3 8s ease-in-out infinite 1s, fo-fadein 0.8s ease 0.4s both;
  }
  .fo-card-deploy {
    animation: fo-float2 6.5s ease-in-out infinite 0.8s, fo-fadein 0.8s ease 0.3s both;
  }
  .fo-card-launch {
    animation: fo-float 7.5s ease-in-out infinite 1.2s, fo-fadein 0.8s ease 0.5s both;
  }
  .fo-tagline-card {
    animation: fo-float2 9s ease-in-out infinite 0.3s, fo-fadein 0.8s ease 0.6s both;
  }

  .fo-chart-line {
    stroke-dasharray: 400;
    stroke-dashoffset: 400;
    animation: fo-chart-rise 2s ease 1s forwards;
  }
  .fo-chart-line2 {
    stroke-dasharray: 400;
    stroke-dashoffset: 400;
    animation: fo-chart-rise 2s ease 1.3s forwards;
  }

  .fo-connector-1 {
    stroke-dasharray: 6 4;
    animation: fo-dash 1.5s linear infinite;
  }
  .fo-connector-2 {
    stroke-dasharray: 6 4;
    animation: fo-dash 1.8s linear infinite;
  }
  .fo-connector-3 {
    stroke-dasharray: 6 4;
    animation: fo-dash 2s linear infinite;
  }
  .fo-connector-4 {
    stroke-dasharray: 6 4;
    animation: fo-dash 1.6s linear infinite;
  }

  .fo-cursor {
    animation: fo-blink 1s step-end infinite;
  }

  .fo-dot-pulse-1 { animation: fo-pulse 2s ease-in-out infinite; }
  .fo-dot-pulse-2 { animation: fo-pulse 2.5s ease-in-out infinite 0.5s; }
  .fo-dot-pulse-3 { animation: fo-pulse 3s ease-in-out infinite 1s; }
  .fo-dot-pulse-4 { animation: fo-pulse 2s ease-in-out infinite 1.5s; }

  .fo-glow {
    animation: fo-glow-pulse 3s ease-in-out infinite;
  }

  .fo-scan-line {
    animation: fo-scan 3s linear infinite;
  }

  .fo-bar-1 { transform-origin: 285px 185px; animation: fo-grow-bar 1s ease 1.5s both; }
  .fo-bar-2 { transform-origin: 285px 185px; animation: fo-grow-bar 1s ease 1.7s both; }
  .fo-bar-3 { transform-origin: 285px 185px; animation: fo-grow-bar 1s ease 1.9s both; }

  .fo-stat-1 { animation: fo-fadein 0.6s ease 2s both; }
  .fo-stat-2 { animation: fo-fadein 0.6s ease 2.2s both; }
  .fo-stat-3 { animation: fo-fadein 0.6s ease 2.4s both; }

  .fo-tag-1 { animation: fo-fadein 0.5s ease 2.6s both; }
  .fo-tag-2 { animation: fo-fadein 0.5s ease 2.8s both; }
  .fo-tag-3 { animation: fo-fadein 0.5s ease 3s both; }
  .fo-tag-4 { animation: fo-fadein 0.5s ease 3.2s both; }

  @media (prefers-reduced-motion: reduce) {
    .fo-main-card, .fo-card-design, .fo-card-build,
    .fo-card-deploy, .fo-card-launch, .fo-tagline-card,
    .fo-orbit-ring-1, .fo-orbit-ring-2,
    .fo-orbit-dot-1, .fo-orbit-dot-2,
    .fo-connector-1, .fo-connector-2,
    .fo-connector-3, .fo-connector-4,
    .fo-cursor, .fo-scan-line {
      animation: none;
    }
    .fo-chart-line, .fo-chart-line2 {
      stroke-dashoffset: 0;
    }
  }
`;

export default function FlatOrbitHero() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);

    return (
        <>
            <style>{styles}</style>
            <div className="fo-hero-wrap">
                <div className="fo-svg-wrap">
                    <svg
                        width="100%"
                        viewBox="0 0 680 480"
                        style={{ transform: "scale(1.5)" }}
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-label="FlatOrbit hero illustration showing a floating dashboard with code editor, analytics, and workflow cards"
                    >
                        <title>FlatOrbit — Build beyond the horizon</title>
                        <desc>Animated tech illustration for FlatOrbit showing a dashboard UI, code editor, analytics chart, and workflow stages orbiting a central interface.</desc>

                        {/* <rect x="0" y="0" width="680" height="480" fill="#0d1117"/> */}

                        <ellipse cx="340" cy="240" rx="240" ry="66" fill="none" stroke="#c9622f" strokeWidth="0.5" opacity="0.12" className="fo-glow" />
                        <circle cx="340" cy="240" r="200" fill="none" stroke="#c9622f" strokeWidth="0.4" opacity="0.08" />

                        <ellipse cx="340" cy="240" rx="260" ry="72" fill="none" stroke="#c9622f" strokeWidth="0.8" opacity="0.18" className="fo-orbit-ring-1" transform="rotate(-12 340 240)" />
                        <ellipse cx="340" cy="240" rx="200" ry="55" fill="none" stroke="#79c0ff" strokeWidth="0.5" opacity="0.12" className="fo-orbit-ring-2" transform="rotate(8 340 240)" />

                        <g className="fo-orbit-dot-1">
                            <circle cx="540" cy="188" r="4" fill="#c9622f" opacity="0.8" />
                            <circle cx="540" cy="188" r="8" fill="#c9622f" opacity="0.15" />
                        </g>
                        <g className="fo-orbit-dot-2">
                            <circle cx="148" cy="272" r="3" fill="#79c0ff" opacity="0.7" />
                            <circle cx="148" cy="272" r="6" fill="#79c0ff" opacity="0.12" />
                        </g>

                        <g className="fo-main-card">
                            <rect x="158" y="58" width="364" height="244" rx="16" fill="#161b22" stroke="#30363d" strokeWidth="1" />
                            <rect x="158" y="58" width="364" height="38" rx="16" fill="#1c2128" />
                            <rect x="158" y="80" width="364" height="16" fill="#1c2128" />
                            <circle cx="182" cy="77" r="5" fill="#ff5f57" opacity="0.85" />
                            <circle cx="198" cy="77" r="5" fill="#febc2e" opacity="0.85" />
                            <circle cx="214" cy="77" r="5" fill="#28c840" opacity="0.85" />
                            <rect x="246" y="68" width="176" height="18" rx="9" fill="#0d1117" opacity="0.7" />
                            <text x="334" y="80" textAnchor="middle" fill="#8b949e" fontSize="9" fontFamily="'JetBrains Mono', monospace">flatorbit.com</text>
                            <rect x="440" y="68" width="18" height="18" rx="4" fill="#0d1117" opacity="0.5" />
                            <text x="449" y="80" textAnchor="middle" fill="#8b949e" fontSize="9" fontFamily="'JetBrains Mono', monospace">↗</text>

                            <rect x="158" y="96" width="112" height="206" fill="#0d1117" opacity="0.45" />
                            <text x="173" y="116" fill="#c9622f" fontSize="9" fontFamily="'JetBrains Mono', monospace">const</text>
                            <text x="210" y="116" fill="#e6edf3" fontSize="9" fontFamily="'JetBrains Mono', monospace">ship =</text>
                            <text x="173" y="130" fill="#79c0ff" fontSize="9" fontFamily="'JetBrains Mono', monospace">  async</text>
                            <text x="173" y="130" fill="#e6edf3" fontSize="9" fontFamily="'JetBrains Mono', monospace">        (idea)</text>
                            <text x="173" y="144" fill="#e6edf3" fontSize="9" fontFamily="'JetBrains Mono', monospace">{"  => {"}</text>
                            <text x="173" y="158" fill="#3fb950" fontSize="9" fontFamily="'JetBrains Mono', monospace">    build(</text>
                            <text x="173" y="172" fill="#c9622f" fontSize="9" fontFamily="'JetBrains Mono', monospace">      idea</text>
                            <text x="173" y="186" fill="#e6edf3" fontSize="9" fontFamily="'JetBrains Mono', monospace">    )</text>
                            <text x="173" y="200" fill="#3fb950" fontSize="9" fontFamily="'JetBrains Mono', monospace">    return</text>
                            <text x="173" y="214" fill="#79c0ff" fontSize="9" fontFamily="'JetBrains Mono', monospace">    product</text>
                            <text x="173" y="228" fill="#e6edf3" fontSize="9" fontFamily="'JetBrains Mono', monospace">{"  }"}</text>
                            <text x="173" y="242" fill="#e6edf3" fontSize="9" fontFamily="'JetBrains Mono', monospace">{"}"}</text>
                            <rect x="173" y="248" width="2" height="11" fill="#c9622f" className="fo-cursor" />

                            <rect x="270" y="96" width="252" height="108" fill="#0d1117" opacity="0.25" />
                            <text x="280" y="113" fill="#8b949e" fontSize="8" fontFamily="'JetBrains Mono', monospace">Revenue growth</text>
                            <text x="504" y="113" textAnchor="end" fill="#c9622f" fontSize="8" fontFamily="'JetBrains Mono', monospace">+$2.5M</text>

                            <line x1="280" y1="192" x2="510" y2="192" stroke="#30363d" strokeWidth="0.5" />
                            <line x1="280" y1="170" x2="510" y2="170" stroke="#30363d" strokeWidth="0.5" opacity="0.5" />
                            <line x1="280" y1="148" x2="510" y2="148" stroke="#30363d" strokeWidth="0.5" opacity="0.5" />
                            <line x1="280" y1="126" x2="510" y2="126" stroke="#30363d" strokeWidth="0.5" opacity="0.5" />

                            <polyline
                                className="fo-chart-line"
                                points="280,192 305,178 330,165 358,152 385,138 415,124 445,113 475,106 510,100"
                                fill="none"
                                stroke="#c9622f"
                                strokeWidth="1.8"
                            />
                            <polyline
                                className="fo-chart-line2"
                                points="280,192 305,185 330,180 358,174 385,168 415,160 445,154 475,150 510,146"
                                fill="none"
                                stroke="#3fb950"
                                strokeWidth="1"
                                opacity="0.5"
                            />
                            <circle cx="510" cy="100" r="3" fill="#c9622f" className="fo-dot-pulse-1" />
                            <circle cx="510" cy="146" r="2.5" fill="#3fb950" opacity="0.6" className="fo-dot-pulse-2" />

                            <g className="fo-stat-1">
                                <rect x="270" y="208" width="72" height="44" rx="8" fill="#1c2128" stroke="#30363d" strokeWidth="0.5" />
                                <text x="306" y="226" textAnchor="middle" fill="#c9622f" fontSize="13" fontFamily="'JetBrains Mono', monospace" fontWeight="500">10+</text>
                                <text x="306" y="240" textAnchor="middle" fill="#8b949e" fontSize="7" fontFamily="'JetBrains Mono', monospace">shipped</text>
                            </g>
                            <g className="fo-stat-2">
                                <rect x="350" y="208" width="72" height="44" rx="8" fill="#1c2128" stroke="#30363d" strokeWidth="0.5" />
                                <text x="386" y="226" textAnchor="middle" fill="#3fb950" fontSize="13" fontFamily="'JetBrains Mono', monospace" fontWeight="500">98%</text>
                                <text x="386" y="240" textAnchor="middle" fill="#8b949e" fontSize="7" fontFamily="'JetBrains Mono', monospace">on time</text>
                            </g>
                            <g className="fo-stat-3">
                                <rect x="430" y="208" width="72" height="44" rx="8" fill="#1c2128" stroke="#30363d" strokeWidth="0.5" />
                                <text x="466" y="226" textAnchor="middle" fill="#79c0ff" fontSize="13" fontFamily="'JetBrains Mono', monospace" fontWeight="500">4.8</text>
                                <text x="466" y="240" textAnchor="middle" fill="#8b949e" fontSize="7" fontFamily="'JetBrains Mono', monospace">rating</text>
                            </g>

                            <rect x="270" y="260" width="252" height="32" fill="#1c2128" opacity="0.4" />
                            <g className="fo-tag-1">
                                <rect x="280" y="268" width="44" height="16" rx="8" fill="#c9622f" opacity="0.15" stroke="#c9622f" strokeWidth="0.5" />
                                <text x="302" y="279" textAnchor="middle" fill="#c9622f" fontSize="7" fontFamily="'JetBrains Mono', monospace">React</text>
                            </g>
                            <g className="fo-tag-2">
                                <rect x="330" y="268" width="44" height="16" rx="8" fill="#79c0ff" opacity="0.1" stroke="#79c0ff" strokeWidth="0.5" />
                                <text x="352" y="279" textAnchor="middle" fill="#79c0ff" fontSize="7" fontFamily="'JetBrains Mono', monospace">Node</text>
                            </g>
                            <g className="fo-tag-3">
                                <rect x="380" y="268" width="56" height="16" rx="8" fill="#3fb950" opacity="0.1" stroke="#3fb950" strokeWidth="0.5" />
                                <text x="408" y="279" textAnchor="middle" fill="#3fb950" fontSize="7" fontFamily="'JetBrains Mono', monospace">TypeScript</text>
                            </g>
                            <g className="fo-tag-4">
                                <rect x="442" y="268" width="36" height="16" rx="8" fill="#8b949e" opacity="0.1" stroke="#8b949e" strokeWidth="0.5" />
                                <text x="460" y="279" textAnchor="middle" fill="#8b949e" fontSize="7" fontFamily="'JetBrains Mono', monospace">AWS</text>
                            </g>

                            <rect x="270" y="292" width="252" height="10" rx="0" fill="#161b22" />
                        </g>

                        <g className="fo-card-design">
                            <rect x="60" y="138" width="86" height="80" rx="12" fill="#161b22" stroke="#c9622f" strokeWidth="0.6" opacity="0.95" />
                            <text x="103" y="160" textAnchor="middle" fill="#c9622f" fontSize="9" fontFamily="'JetBrains Mono', monospace">Design</text>
                            <rect x="72" y="168" width="52" height="3" rx="1.5" fill="#c9622f" opacity="0.35" />
                            <rect x="72" y="175" width="36" height="3" rx="1.5" fill="#30363d" />
                            <rect x="72" y="182" width="44" height="3" rx="1.5" fill="#30363d" />
                            <rect x="72" y="189" width="28" height="3" rx="1.5" fill="#c9622f" opacity="0.2" />
                            <circle cx="126" cy="150" r="3" fill="#c9622f" opacity="0.5" className="fo-dot-pulse-1" />
                        </g>

                        <g className="fo-card-build">
                            <rect x="60" y="268" width="86" height="80" rx="12" fill="#161b22" stroke="#3fb950" strokeWidth="0.6" opacity="0.95" />
                            <text x="103" y="290" textAnchor="middle" fill="#3fb950" fontSize="9" fontFamily="'JetBrains Mono', monospace">Build</text>
                            <circle cx="78" cy="308" r="7" fill="#3fb950" opacity="0.15" stroke="#3fb950" strokeWidth="0.5" />
                            <circle cx="93" cy="308" r="7" fill="#3fb950" opacity="0.25" stroke="#3fb950" strokeWidth="0.5" />
                            <circle cx="108" cy="308" r="7" fill="#3fb950" opacity="0.45" stroke="#3fb950" strokeWidth="0.5" />
                            <circle cx="123" cy="308" r="7" fill="#3fb950" opacity="0.7" stroke="#3fb950" strokeWidth="0.7" />
                            <rect x="72" y="322" width="52" height="3" rx="1.5" fill="#30363d" />
                            <circle cx="126" cy="280" r="3" fill="#3fb950" opacity="0.5" className="fo-dot-pulse-3" />
                        </g>

                        <g className="fo-card-deploy">
                            <rect x="534" y="108" width="86" height="80" rx="12" fill="#161b22" stroke="#79c0ff" strokeWidth="0.6" opacity="0.95" />
                            <text x="577" y="130" textAnchor="middle" fill="#79c0ff" fontSize="9" fontFamily="'JetBrains Mono', monospace">Deploy</text>
                            <rect x="546" y="138" width="52" height="3" rx="1.5" fill="#3fb950" opacity="0.6" />
                            <rect x="546" y="145" width="38" height="3" rx="1.5" fill="#3fb950" opacity="0.4" />
                            <rect x="546" y="152" width="46" height="3" rx="1.5" fill="#3fb950" opacity="0.25" />
                            <rect x="546" y="159" width="28" height="3" rx="1.5" fill="#30363d" />
                            <rect x="546" y="168" width="52" height="10" rx="4" fill="#3fb950" opacity="0.15" stroke="#3fb950" strokeWidth="0.4" />
                            <text x="572" y="176" textAnchor="middle" fill="#3fb950" fontSize="7" fontFamily="'JetBrains Mono', monospace">✓ Live</text>
                            <circle cx="534" cy="130" r="3" fill="#79c0ff" opacity="0.5" className="fo-dot-pulse-2" />
                        </g>

                        <g className="fo-card-launch">
                            <rect x="534" y="268" width="86" height="80" rx="12" fill="#161b22" stroke="#febc2e" strokeWidth="0.6" opacity="0.95" />
                            <text x="577" y="290" textAnchor="middle" fill="#febc2e" fontSize="9" fontFamily="'JetBrains Mono', monospace">Launch</text>
                            <polygon points="556,308 572,298 572,318" fill="#febc2e" opacity="0.7" />
                            <rect x="578" y="304" width="14" height="4" rx="2" fill="#febc2e" opacity="0.5" />
                            <rect x="578" y="312" width="9" height="4" rx="2" fill="#febc2e" opacity="0.3" />
                            <rect x="546" y="328" width="52" height="3" rx="1.5" fill="#30363d" />
                            <circle cx="534" cy="310" r="3" fill="#febc2e" opacity="0.5" className="fo-dot-pulse-4" />
                        </g>

                        <line x1="146" y1="178" x2="158" y2="178" stroke="#c9622f" strokeWidth="0.8" opacity="0.5" className="fo-connector-1" />
                        <line x1="146" y1="308" x2="158" y2="260" stroke="#3fb950" strokeWidth="0.8" opacity="0.5" className="fo-connector-2" />
                        <line x1="522" y1="148" x2="534" y2="148" stroke="#79c0ff" strokeWidth="0.8" opacity="0.5" className="fo-connector-3" />
                        <line x1="522" y1="302" x2="534" y2="302" stroke="#febc2e" strokeWidth="0.8" opacity="0.5" className="fo-connector-4" />

                        <line x1="340" y1="302" x2="340" y2="368" stroke="#c9622f" strokeWidth="0.6" opacity="0.25" strokeDasharray="4 3" />

                        <g className="fo-tagline-card">
                            <rect x="260" y="368" width="160" height="48" rx="12" fill="#161b22" stroke="#c9622f" strokeWidth="1" opacity="0.95" />
                            <rect x="260" y="368" width="160" height="48" rx="12" fill="#c9622f" opacity="0.04" />
                            <text x="340" y="388" textAnchor="middle" fill="#e6edf3" fontSize="11" fontFamily="'Syne', sans-serif" fontWeight="600" letterSpacing="1">FlatOrbit</text>
                            <text x="340" y="404" textAnchor="middle" fill="#c9622f" fontSize="8" fontFamily="'JetBrains Mono', monospace">Build beyond the horizon</text>
                        </g>

                        <circle cx="60" cy="72" r="1.5" fill="#c9622f" opacity="0.3" />
                        <circle cx="620" cy="430" r="1.5" fill="#c9622f" opacity="0.3" />
                        <circle cx="42" cy="390" r="1" fill="#79c0ff" opacity="0.3" />
                        <circle cx="638" cy="88" r="1" fill="#3fb950" opacity="0.3" />
                        <circle cx="600" cy="52" r="1" fill="#c9622f" opacity="0.35" />
                        <circle cx="76" cy="448" r="1" fill="#79c0ff" opacity="0.25" />
                        <circle cx="620" cy="200" r="1.5" fill="#febc2e" opacity="0.2" />
                        <circle cx="48" cy="200" r="1.5" fill="#febc2e" opacity="0.2" />
                    </svg>
                </div>
            </div>
        </>
    );
}