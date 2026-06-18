import { useState } from "react";
import type { Station } from "@/data/stations";

interface RouteMapProps {
  stations: Station[];
  selectedId: string | null;
  onSelect: (s: Station) => void;
}

export function RouteMap({ stations, selectedId, onSelect }: RouteMapProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const activeId = hoveredId ?? selectedId;

  const sorted = [...stations].sort((a, b) => a.order - b.order);
  const pathD = sorted
    .map(
      (s, i) =>
        `${i === 0 ? "M" : "L"} ${s.mapPosition.x} ${s.mapPosition.y}`,
    )
    .join(" ");

  const smoothPath = buildCatmullRom(sorted.map((s) => s.mapPosition));

  const labelSide = (i: number) => (i % 2 === 0 ? 1 : -1);

  return (
    <div className="relative w-full aspect-[16/10] bg-gradient-to-br from-parchment-50 via-parchment-100/70 to-ochre-400/15 border-2 border-ochre-500/30 rounded-sm shadow-vintage overflow-hidden">
      <svg
        viewBox="0 0 100 80"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <pattern
            id="mapGrid"
            width="4"
            height="4"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 4 0 L 0 0 0 4"
              fill="none"
              stroke="#8B5A2B"
              strokeOpacity="0.15"
              strokeWidth="0.15"
            />
          </pattern>
          <radialGradient id="mountGrad" cx="30%" cy="30%">
            <stop offset="0%" stopColor="#A67B42" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#A67B42" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="pathGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8B5A2B" />
            <stop offset="50%" stopColor="#C62828" />
 <stop offset="100%" stopColor="#1565C0" />
          </linearGradient>
        </defs>

        <rect width="100" height="80" fill="url(#mapGrid)" />

        <g opacity="0.55">
          <ellipse cx="30" cy="18" rx="26" ry="14" fill="url(#mountGrad)" />
          <ellipse cx="72" cy="42" rx="28" ry="18" fill="url(#mountGrad)" />
          <path
            d="M 0 68 Q 20 56 36 62 T 70 58 T 100 66 L 100 80 L 0 80 Z"
            fill="#2E7D32"
            fillOpacity="0.12"
          />
          <path
            d="M 0 74 Q 30 66 55 70 T 100 72"
            fill="none"
            stroke="#2E7D32"
            strokeOpacity="0.3"
            strokeWidth="0.3"
            strokeDasharray="0.8 1"
          />
        </g>

        <g transform="translate(4 6)">
          <rect
            x="0"
            y="0"
            width="15"
            height="4"
            fill="#FBF6E8"
            stroke="#8B5A2B"
            strokeOpacity="0.35"
            strokeWidth="0.2"
          />
          <path
            d="M 0.8 2.5 L 4 0.8 L 6 2.8 L 9 1.2 L 12 2.8"
            fill="none"
            stroke="#8B5A2B"
            strokeOpacity="0.5"
            strokeWidth="0.2"
          />
          <text
            x="0.6"
            y="1.6"
            fontSize="1.2"
            fontWeight="900"
            fill="#5A3B1B"
            letterSpacing="0.1"
          >
            川藏南线图
          </text>
        </g>

        <path
          d={pathD}
          fill="none"
          stroke="#8B5A2B"
          strokeOpacity="0.2"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d={smoothPath}
          fill="none"
          stroke="url(#pathGrad)"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="route-path"
        />

        {sorted.map((s, i) => {
          const next = sorted[i + 1];
          if (!next) return null;
          const mx = (s.mapPosition.x + next.mapPosition.x) / 2;
          const my = (s.mapPosition.y + next.mapPosition.y) / 2;
          return (
            <text
              key={`seg-${s.id}`}
              x={mx}
              y={my - 1.5}
              fontSize="1.1"
              fontWeight="700"
              fill="#8B5A2B"
              fillOpacity="0.7"
              textAnchor="middle"
            >
              段 {i + 1}
            </text>
          );
        })}

        {sorted.map((s, i) => {
          const isActive = activeId === s.id;
          const side = labelSide(i);
          const highAlt = s.altitude >= 4000;
          const midAlt = s.altitude >= 3000 && s.altitude < 4000;
          const fill = highAlt ? "#C62828" : midAlt ? "#8B5A2B" : "#2E7D32";
          return (
            <g
              key={s.id}
              transform={`translate(${s.mapPosition.x} ${s.mapPosition.y})`}
              className="map-node cursor-pointer"
              onClick={() => onSelect(s)}
              onMouseEnter={() => setHoveredId(s.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {isActive && (
                <circle
                  className="node-ring"
                  r="3.2"
                  fill="none"
                  stroke={fill}
                  strokeOpacity="0.6"
                  strokeWidth="0.6"
                  style={{ transformOrigin: "center" }}
                />
              )}
              <circle
                r={isActive ? 2.4 : 1.9}
                fill={fill}
                stroke="#FBF6E8"
                strokeWidth={isActive ? 0.7 : 0.5}
                className="transition-all duration-200"
              />
              <circle
                r="0.45"
                fill="#FBF6E8"
                className="transition-opacity duration-200"
                opacity={isActive ? 1 : 0.7}
              />

              <g
                transform={`translate(${side * 3.5} ${side > 0 ? 0.5 : -1})`}
                className="transition-opacity duration-200"
                opacity={isActive ? 1 : 0.85}
              >
                <rect
                  x={side > 0 ? 0 : -14}
                  y="-2.8"
                  width="14"
                  height="5.2"
                  rx="0.5"
                  fill="#FBF6E8"
                  stroke={fill}
                  strokeWidth="0.35"
                  opacity={isActive ? 1 : 0.92}
                />
                <text
                  x={side > 0 ? 0.8 : -13.2}
                  y="-0.2"
                  fontSize="1.65"
                  fontWeight="900"
                  fill="#3E2723"
                >
                  {s.chineseName.split("·")[1] ?? s.chineseName}
                </text>
                <text
                  x={side > 0 ? 0.8 : -13.2}
                  y="1.7"
                  fontSize="1.05"
                  fontWeight="700"
                  fill={fill}
                >
                  ▲ {s.altitude}m
                </text>
              </g>

              <text
                y={s.mapPosition.y < 30 ? 6 : -4}
                fontSize="1"
                fontWeight="900"
                fill="#5A3B1B"
                textAnchor="middle"
                opacity={isActive ? 0 : 0.55}
              >
                {String(s.order).padStart(2, "0")}
              </text>
            </g>
          );
        })}

        <g transform="translate(76 72)">
          <rect
            x="0"
            y="0"
            width="22"
            height="7"
            fill="#FBF6E8"
            stroke="#8B5A2B"
            strokeOpacity="0.3"
            strokeWidth="0.15"
            rx="0.3"
          />
          <circle cx="1.8" cy="2" r="0.6" fill="#2E7D32" />
          <text x="3" y="2.4" fontSize="1" fontWeight="700" fill="#3E2723">
            ＜3000m
          </text>
          <circle cx="1.8" cy="4.5" r="0.6" fill="#8B5A2B" />
          <text x="3" y="4.9" fontSize="1" fontWeight="700" fill="#3E2723">
            3–4000m
          </text>
          <circle cx="12.8" cy="2" r="0.6" fill="#C62828" />
          <text x="14" y="2.4" fontSize="1" fontWeight="700" fill="#3E2723">
            ≥4000m
          </text>
        </g>
      </svg>

      <div className="absolute bottom-2 right-3 text-[10px] tracking-widest text-ochre-700/70 font-bold">
        点击任意节点查看详情 ↗
      </div>
    </div>
  );
}

function buildCatmullRom(points: { x: number; y: number }[]) {
  if (points.length < 2) return "";
  const pts = [points[0], ...points, points[points.length - 1]];
  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 0; i < pts.length - 3; i++) {
    const p0 = pts[i];
    const p1 = pts[i + 1];
    const p2 = pts[i + 2];
    const p3 = pts[i + 3];
    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;
    d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
  }
  return d;
}
