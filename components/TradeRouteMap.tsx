"use client";

import { destinations } from "@/lib/content";

// Origin point: India, positioned on the same normalized 0-100 grid as `destinations`
const origin = { x: 64, y: 50 };

export default function TradeRouteMap() {
  return (
    <div className="relative aspect-[4/3] w-full max-w-xl">
      <svg viewBox="0 0 100 75" className="h-full w-full overflow-visible">
        {/* faint world grid, purely decorative */}
        <defs>
          <pattern id="dotgrid" width="5" height="5" patternUnits="userSpaceOnUse">
            <circle cx="0.6" cy="0.6" r="0.5" fill="rgba(255,255,255,0.06)" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="100" height="75" fill="url(#dotgrid)" />

        {/* routes */}
        {destinations.map((d, i) => (
          <path
            key={d.region}
            d={`M ${origin.x} ${origin.y} Q ${(origin.x + d.x) / 2} ${
              Math.min(origin.y, d.y) - 10
            }, ${d.x} ${d.y}`}
            fill="none"
            stroke="rgba(52,211,153,0.55)"
            strokeWidth="0.4"
            strokeDasharray="2 2"
            className="animate-dash-flow"
            style={{ animationDelay: `${i * 0.4}s` }}
          />
        ))}

        {/* origin marker: India */}
        <circle cx={origin.x} cy={origin.y} r="1.8" fill="#B8933E" />
        <circle
          cx={origin.x}
          cy={origin.y}
          r="3.2"
          fill="none"
          stroke="#B8933E"
          strokeWidth="0.3"
          opacity="0.5"
        />
        <text
          x={origin.x}
          y={origin.y - 5}
          textAnchor="middle"
          className="fill-gold-200 font-mono"
          fontSize="2.6"
        >
          INDIA
        </text>

        {/* destination markers */}
        {destinations.map((d) => (
          <g key={d.region}>
            <circle
              cx={d.x}
              cy={d.y}
              r="1.3"
              fill="#34D399"
              className="animate-pulse-dot"
              style={{ transformOrigin: `${d.x}px ${d.y}px` }}
            />
            <text
              x={d.x}
              y={d.y + (d.y > 50 ? 5 : -3.5)}
              textAnchor="middle"
              className="fill-white/70 font-mono"
              fontSize="2.3"
            >
              {d.region}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
