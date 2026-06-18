import { useMemo, useState } from "react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { RouteMap } from "./RouteMap";
import { NodeList } from "./NodeList";
import { ElevationChart } from "./ElevationChart";
import { hikingRoutes } from "@/data/hikingRoutes";
import { stations } from "@/data/stations";
import type { Station } from "@/data/stations";
import {
  CalendarDays,
  Flag,
  Gauge,
  Footprints,
  Info,
} from "lucide-react";

interface RouteSectionProps {
  onSelectStation: (s: Station) => void;
  selectedStationId: string | null;
}

export function RouteSection({
  onSelectStation,
  selectedStationId,
}: RouteSectionProps) {
  const route = hikingRoutes[0];
  const routeStations = useMemo(
    () => stations.filter((s) => route.stations.includes(s.id)),
    [route],
  );

  const [showDesc, setShowDesc] = useState(false);
  const diffLabel = {
    easy: { text: "轻松", cls: "bg-sutra-green text-parchment-50" },
    moderate: { text: "中等", cls: "bg-ochre-500 text-parchment-50" },
    hard: { text: "挑战", cls: "bg-sutra-red text-parchment-50" },
  }[route.difficulty];

  return (
    <SectionWrapper
      id="route"
      eyebrow="徒步路线 · Hiking Route"
      title="沿古辙 向西行"
      subtitle="今日的川藏南线 318 国道，大半叠压在旧茶马古道的路基之上。你不必走完两千四百里——选一段精华，让山风告诉你，背夫的歌谣从未真正远去。"
      variant="light"
      showStamp={false}
    >
      <div className="vintage-card rounded-sm p-4 sm:p-6 mb-8 sm:mb-10">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <h3 className="font-black text-teabrown-700 text-2xl sm:text-3xl tracking-wide">
                {route.name}
              </h3>
              <span
                className={`px-2.5 py-0.5 text-xs font-bold tracking-wider rounded-sm ${diffLabel.cls}`}
              >
                <Gauge size={12} className="inline mr-1" strokeWidth={2.5} />
                {diffLabel.text}
              </span>
            </div>
            <p className="text-ochre-700 font-bold text-base sm:text-lg tracking-wider mb-4">
              {route.subtitle}
            </p>

            <p
              className={`text-teabrown-600/90 text-sm leading-8 font-medium transition-all duration-500 overflow-hidden ${
                showDesc ? "max-h-96" : "max-h-20"
              }`}
            >
              {route.description}
            </p>
            <button
              onClick={() => setShowDesc((v) => !v)}
              className="mt-2 text-xs font-bold text-ochre-700 hover:text-sutra-red tracking-wider underline-offset-4 hover:underline"
            >
              {showDesc ? "收起简介 ↑" : "展开完整简介 ↓"}
            </button>
          </div>

          <div className="grid grid-cols-2 lg:flex lg:flex-col gap-3 lg:w-80 shrink-0">
            <InfoChip
              icon={<CalendarDays size={18} strokeWidth={2.2} />}
              label="建议天数"
              value={route.duration}
            />
            <InfoChip
              icon={<Footprints size={18} strokeWidth={2.2} />}
              label="总长"
              value={`${route.totalDistance.toLocaleString()} km`}
            />
            <InfoChip
              icon={<Flag size={18} strokeWidth={2.2} />}
              label="节点"
              value={`${routeStations.length} 处`}
            />
            <InfoChip
              icon={<Info size={18} strokeWidth={2.2} />}
              label="推荐季节"
              value="9–10 月最佳"
            />
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-5 gap-6 sm:gap-8 mb-8 sm:mb-10">
        <div className="lg:col-span-3 space-y-6">
          <RouteMap
            stations={routeStations}
            selectedId={selectedStationId}
            onSelect={onSelectStation}
          />
          <ElevationChart
            stations={routeStations}
            selectedId={selectedStationId}
            onSelect={onSelectStation}
          />
        </div>
        <aside className="lg:col-span-2 lg:max-h-[820px] lg:overflow-y-auto lg:pr-2 lg:border-l lg:border-ochre-300/40 lg:pl-2">
          <NodeList
            stations={routeStations}
            selectedId={selectedStationId}
            onSelect={onSelectStation}
          />
        </aside>
      </div>
    </SectionWrapper>
  );
}

function InfoChip({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 p-3 sm:p-3.5 bg-parchment-50/70 border border-ochre-300/40 rounded-sm hover:border-sutra-gold/60 transition-colors">
      <span className="w-9 h-9 shrink-0 rounded-sm bg-ochre-500/15 border border-ochre-500/30 flex items-center justify-center text-ochre-700">
        {icon}
      </span>
      <div className="min-w-0">
        <div className="text-[10.5px] tracking-[0.2em] font-bold text-ochre-700/70 uppercase">
          {label}
        </div>
        <div className="font-black text-teabrown-700 text-base leading-tight">
          {value}
        </div>
      </div>
    </div>
  );
}
