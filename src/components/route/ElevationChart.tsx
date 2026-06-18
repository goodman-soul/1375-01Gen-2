import type { Station } from "@/data/stations";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface ElevationChartProps {
  stations: Station[];
  selectedId: string | null;
  onSelect: (s: Station) => void;
}

export function ElevationChart({
  stations,
  selectedId,
  onSelect,
}: ElevationChartProps) {
  const ref = useScrollReveal<SVGSVGElement>("reveal", { threshold: 0.2 });
  const sorted = [...stations].sort((a, b) => a.order - b.order);

  const W = 800;
  const H = 240;
  const padL = 56;
  const padR = 24;
  const padT = 24;
  const padB = 44;
  const innerW = W - padL - padR;
  const innerH = H - padT - padB;

  const minAlt = 0;
  const maxAlt = 5000;
  const yScale = (alt: number) =>
    padT + innerH - ((alt - minAlt) / (maxAlt - minAlt)) * innerH;
  const stepX = sorted.length > 1 ? innerW / (sorted.length - 1) : 0;
  const xScale = (i: number) => padL + stepX * i;

  const areaPath =
    `M ${xScale(0)} ${padT + innerH} ` +
    sorted.map((s, i) => `L ${xScale(i)} ${yScale(s.altitude)}`).join(" ") +
    ` L ${xScale(sorted.length - 1)} ${padT + innerH} Z`;

  const linePath = sorted
    .map((s, i) => `${i === 0 ? "M" : "L"} ${xScale(i)} ${yScale(s.altitude)}`)
    .join(" ");

  const yTicks = [0, 1000, 2000, 3000, 4000, 5000];

  return (
    <div className="vintage-card p-4 sm:p-6 rounded-sm">
      <div className="flex items-center justify-between mb-4 px-1">
        <h4 className="font-black text-teabrown-700 text-lg">海拔剖面示意</h4>
        <span className="text-xs text-ochre-700/70 tracking-wider font-bold">
          单位 · 米 (m)
        </span>
      </div>

      <div className="w-full overflow-x-auto">
        <svg
          ref={ref}
          viewBox={`0 0 ${W} ${H}`}
          className="w-full min-w-[640px] h-auto"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="areaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8B5A2B" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#8B5A2B" stopOpacity="0.04" />
            </linearGradient>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2E7D32" />
              <stop offset="40%" stopColor="#8B5A2B" />
              <stop offset="65%" stopColor="#C62828" />
              <stop offset="100%" stopColor="#1565C0" />
            </linearGradient>
          </defs>

          {yTicks.map((t) => (
            <g key={t}>
              <line
                x1={padL}
                x2={W - padR}
                y1={yScale(t)}
                y2={yScale(t)}
                stroke="#8B5A2B"
                strokeOpacity="0.1"
                strokeDasharray="3 4"
              />
              <text
                x={padL - 10}
                y={yScale(t) + 4}
                fontSize="11"
                fontWeight="700"
                textAnchor="end"
                fill="#5A3B1B"
                fillOpacity="0.7"
              >
                {t.toLocaleString()}
              </text>
            </g>
          ))}

          <path d={areaPath} fill="url(#areaGrad)" />
          <path
            d={linePath}
            fill="none"
            stroke="url(#lineGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {sorted.map((s, i) => {
            const selected = selectedId === s.id;
            const high = s.altitude >= 4000;
            const cx = xScale(i);
            const cy = yScale(s.altitude);
            const fill = high
              ? "#C62828"
              : s.altitude >= 3000
                ? "#8B5A2B"
                : "#2E7D32";
            const below = cy > padT + innerH / 2;
            return (
              <g
                key={s.id}
                className="cursor-pointer"
                onClick={() => onSelect(s)}
              >
                {selected && (
                  <circle
                    cx={cx}
                    cy={cy}
                    r="14"
                    fill={fill}
                    fillOpacity="0.12"
                  >
                    <animate
                      attributeName="r"
                      from="8"
                      to="22"
                      dur="1.6s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="fill-opacity"
                      from="0.25"
                      to="0"
                      dur="1.6s"
                      repeatCount="indefinite"
                    />
                  </circle>
                )}
                <circle
                  cx={cx}
                  cy={cy}
                  r={selected ? 7 : 5}
                  fill={fill}
                  stroke="#FBF6E8"
                  strokeWidth="2"
                  className="transition-all duration-200"
                />
                <text
                  x={cx}
                  y={cy + (below ? 20 : -10)}
                  fontSize="11.5"
                  fontWeight="900"
                  fill="#3E2723"
                  textAnchor="middle"
                  className="pointer-events-none"
                >
                  {s.chineseName.split("·")[1] ?? s.chineseName}
                </text>
                <text
                  x={cx}
                  y={cy + (below ? 34 : 4)}
                  fontSize="10"
                  fontWeight="700"
                  fill={fill}
                  textAnchor="middle"
                  className="pointer-events-none"
                >
                  {s.altitude}m
                </text>
              </g>
            );
          })}

          <g>
            <line
              x1={padL}
              x2={padL}
              y1={padT}
              y2={padT + innerH}
              stroke="#8B5A2B"
              strokeOpacity="0.35"
              strokeWidth="1.5"
            />
            <line
              x1={padL}
              x2={W - padR}
              y1={padT + innerH}
              y2={padT + innerH}
              stroke="#8B5A2B"
              strokeOpacity="0.35"
              strokeWidth="1.5"
            />
            <text
              x={padL - 44}
              y={padT - 8}
              fontSize="10.5"
              fontWeight="700"
              fill="#5A3B1B"
              transform={`rotate(-90 ${padL - 30} ${padT + innerH / 2})`}
              textAnchor="middle"
            >
              海拔 · 米
            </text>
            <text
              x={(padL + W - padR) / 2}
              y={H - 14}
              fontSize="10.5"
              fontWeight="700"
              fill="#5A3B1B"
              textAnchor="middle"
            >
              雅安 · 起点 → 芒康 · 终点（由东向西）
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
}
