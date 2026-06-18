import type { Station } from "@/data/stations";
import { AltitudeBadge } from "@/components/shared/AltitudeBadge";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MapPin } from "lucide-react";

interface NodeListProps {
  stations: Station[];
  selectedId: string | null;
  onSelect: (s: Station) => void;
}

export function NodeList({ stations, selectedId, onSelect }: NodeListProps) {
  const sorted = [...stations].sort((a, b) => a.order - b.order);
  const ref = useScrollReveal<HTMLDivElement>("reveal-right", {
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="space-y-3">
      <div className="flex items-center justify-between px-1 mb-2">
        <h4 className="font-black text-teabrown-700 text-lg flex items-center gap-2">
          <MapPin size={18} className="text-ochre-600" strokeWidth={2.2} />
          沿线节点
        </h4>
        <span className="text-xs text-ochre-700/70 font-bold">
          共 {sorted.length} 站
        </span>
      </div>

      <ol className="relative space-y-2.5 before:absolute before:left-[22px] before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-sutra-green/60 before:via-ochre-500/60 before:to-sutra-red/60 before:rounded-full">
        {sorted.map((s, i) => {
          const selected = selectedId === s.id;
          const high = s.altitude >= 4000;
          return (
            <li key={s.id} className="relative pl-12">
              <span
                className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 w-4 h-4 rounded-full border-2 border-parchment-50 transition-all duration-300 ${
                  selected
                    ? "scale-125 ring-2 ring-sutra-gold ring-offset-1 ring-offset-parchment-100"
                    : ""
                } ${high ? "bg-sutra-red" : s.altitude >= 3000 ? "bg-ochre-500" : "bg-sutra-green"}`}
              />
              <button
                onClick={() => onSelect(s)}
                className={`w-full text-left p-3 sm:p-4 rounded-sm border transition-all duration-300 group ${
                  selected
                    ? "bg-sutra-gold/15 border-sutra-gold/70 shadow-md -translate-y-0.5"
                    : "bg-parchment-50/50 border-ochre-300/40 hover:bg-parchment-50 hover:border-ochre-500/50"
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-1.5">
                  <div className="flex items-baseline gap-2 min-w-0">
                    <span className="text-[11px] font-black tabular-nums text-ochre-700/60 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`font-bold truncate ${
                        selected ? "text-ochre-700" : "text-teabrown-700"
                      }`}
                    >
                      {s.chineseName}
                    </span>
                  </div>
                  <AltitudeBadge altitude={s.altitude} size="sm" />
                </div>
                <p className="text-xs sm:text-sm text-teabrown-600/80 leading-6 line-clamp-2 font-medium">
                  {s.story}
                </p>
                <div className="mt-2 flex items-center justify-between text-[11px]">
                  <span className="text-ochre-700/70">{s.era}</span>
                  <span
                    className={`font-bold transition-colors ${
                      selected
                        ? "text-ochre-700"
                        : "text-ochre-600/70 group-hover:text-ochre-700"
                    }`}
                  >
                    查看详情 →
                  </span>
                </div>
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
