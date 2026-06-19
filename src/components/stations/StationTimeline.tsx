import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { StationCard } from "./StationCard";
import { stations } from "@/data/stations";
import type { Station } from "@/data/stations";

interface StationTimelineProps {
  onSelectStation: (s: Station) => void;
}

export function StationTimeline({ onSelectStation }: StationTimelineProps) {
  const featured = stations.slice(0, 6);

  return (
    <SectionWrapper
      id="stations"
      eyebrow="驿站 · Stations"
      title="十里一铺 八十六驿"
      subtitle="从青衣江畔到金沙江岸，两千四百里山路上，曾有八十六处官办驿站与民间伙铺。每一处屋檐下，都曾歇过背夫的肩头与茶商的梦。"
      variant="light"
    >
      <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 hidden md:block">
          <div className="absolute inset-0 bg-ochre-300/50" />
          <div className="absolute inset-0 border-l-2 border-dashed border-ochre-500/60" />
        </div>

        <div className="space-y-14 sm:space-y-20 md:space-y-28">
          {featured.map((station, i) => (
            <StationCard
              key={station.id}
              station={station}
              index={i}
              onSelect={onSelectStation}
            />
          ))}
        </div>

        <div className="mt-20 sm:mt-28 vintage-card p-6 sm:p-8 lg:p-10 rounded-sm">
          <h4 className="font-black text-teabrown-700 text-xl sm:text-2xl mb-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-ochre-500 rounded-sm" />
            其余节点一览
          </h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stations.slice(6).map((s) => (
              <button
                key={s.id}
                onClick={() => onSelectStation(s)}
                className="group text-left p-4 bg-parchment-50/60 hover:bg-sutra-gold/12 border border-ochre-300/40 hover:border-sutra-gold/60 transition-all duration-300 rounded-sm"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <span className="font-bold text-teabrown-700 text-base group-hover:text-ochre-700 transition-colors">
                    {s.chineseName}
                  </span>
                  <span className="text-xs font-bold tabular-nums text-ochre-600 opacity-80">
                    No.{String(s.order).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs text-teabrown-600/70 truncate flex-1">
                    {s.era}
                  </span>
                  <span className="text-xs font-bold text-sutra-green/90 tabular-nums whitespace-nowrap">
                    ▲ {s.altitude}m
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
