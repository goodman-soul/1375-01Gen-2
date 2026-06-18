import { useScrollReveal } from "@/hooks/useScrollReveal";
import { AltitudeBadge } from "@/components/shared/AltitudeBadge";
import { OldPhoto } from "@/components/shared/OldPhoto";
import { Calendar } from "lucide-react";
import type { Station } from "@/data/stations";

interface StationCardProps {
  station: Station;
  index: number;
  onSelect: (s: Station) => void;
}

export function StationCard({ station, index, onSelect }: StationCardProps) {
  const ref = useScrollReveal<HTMLDivElement>(
    index % 2 === 0 ? "reveal-left" : "reveal-right",
    { threshold: 0.1, rootMargin: "0px 0px -80px 0px" },
    index * 60,
  );
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className="relative">
      <div
        className={`grid md:grid-cols-2 gap-6 sm:gap-10 items-center ${
          isLeft ? "" : "md:[&>*:first-child]:order-2"
        }`}
      >
        <button
          onClick={() => onSelect(station)}
          className="group relative block text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-ochre-500 rounded-sm"
        >
          <OldPhoto
            src={station.photo}
            alt={station.chineseName}
            rotateDeg={isLeft ? -1.5 : 1.5}
            className="aspect-[4/3]"
          />
          <div className="absolute top-3 right-3 z-10 transform transition-transform duration-300 group-hover:scale-110">
            <AltitudeBadge altitude={station.altitude} size="sm" />
          </div>
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-sutra-gold/60 transition-colors duration-300 pointer-events-none" />
        </button>

        <div className="space-y-4">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="font-black text-ochre-600 text-5xl sm:text-6xl leading-none opacity-60">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="flex items-center gap-1.5 text-ochre-700/70 text-sm">
              <Calendar size={14} strokeWidth={2} />
              <span className="tracking-wide">{station.era}</span>
            </div>
          </div>

          <h3 className="font-black text-teabrown-700 text-2xl sm:text-3xl tracking-wide">
            {station.chineseName}
          </h3>

          <p className="text-teabrown-600/90 leading-8 font-medium text-[0.95rem] line-clamp-6">
            {station.story}
          </p>

          <div className="flex items-center gap-3 pt-1">
            <button
              onClick={() => onSelect(station)}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-bold tracking-wider text-ochre-700 border-2 border-ochre-500/60 hover:bg-ochre-500 hover:text-parchment-50 transition-all duration-300"
            >
              查看详情
              <span className="text-lg leading-none">→</span>
            </button>
            <AltitudeBadge altitude={station.altitude} size="sm" />
          </div>
        </div>
      </div>

      <div
        className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-4 bg-parchment-100 z-10 shadow-md ${
          isLeft
            ? "left-1/2 -translate-x-1/2 border-ochre-500"
            : "left-1/2 -translate-x-1/2 border-ochre-600"
        }`}
      />
    </div>
  );
}
