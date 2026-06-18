import { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Mountain, Bus, MapPin } from "lucide-react";
import { AltitudeBadge } from "./AltitudeBadge";
import { OldPhoto } from "./OldPhoto";
import type { Station } from "@/data/stations";

interface NodeModalProps {
  station: Station | null;
  onClose: () => void;
}

export function NodeModal({ station, onClose }: NodeModalProps) {
  const [mounted, setMounted] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (station) {
      setMounted(true);
      document.body.style.overflow = "hidden";
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleEsc);
      return () => {
        window.removeEventListener("keydown", handleEsc);
        document.body.style.overflow = "";
      };
    } else {
      const t = setTimeout(() => setMounted(false), 300);
      return () => clearTimeout(t);
    }
  }, [station, onClose]);

  if (!mounted) return null;

  const isOpen = !!station;

  return createPortal(
    <div
      className={`fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="absolute inset-0 bg-teabrown-700/70 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        ref={panelRef}
        className={`relative w-full sm:max-w-3xl max-h-[92vh] overflow-hidden bg-parchment-50 rounded-none sm:rounded-lg shadow-2xl border border-ochre-400/40 flex flex-col transition-all duration-300 ease-out ${
          isOpen
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-16 sm:translate-y-8 sm:scale-95 opacity-0"
        }`}
      >
        {station && (
          <>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-parchment-50/90 backdrop-blur flex items-center justify-center text-teabrown-600 hover:text-sutra-red hover:bg-parchment-50 transition-all shadow-md"
              aria-label="关闭"
            >
              <X size={20} strokeWidth={2.5} />
            </button>

            <div className="relative flex-shrink-0 h-56 sm:h-72">
              <OldPhoto
                src={station.photo}
                alt={station.chineseName}
                className="w-full h-full"
              />
              <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-teabrown-700/90 via-teabrown-700/40 to-transparent" />
              <div className="absolute bottom-4 left-5 right-16 text-parchment-50">
                <div className="flex items-center gap-2 mb-1.5">
                  <MapPin size={14} strokeWidth={2.5} />
                  <span className="text-sm tracking-widest opacity-90">
                    {station.era}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black tracking-wide">
                  {station.chineseName}
                </h2>
              </div>
              <div className="absolute bottom-4 right-16">
                <AltitudeBadge altitude={station.altitude} size="md" />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6">
              <section>
                <h3 className="flex items-center gap-2 text-lg font-bold text-ochre-700 mb-3 border-b border-ochre-300/60 pb-2">
                  <Mountain size={18} strokeWidth={2.2} />
                  历史故事
                </h3>
                <p className="text-teabrown-600 leading-8 drop-cap font-medium">
                  {station.story}
                </p>
              </section>

              <section>
                <h3 className="flex items-center gap-2 text-lg font-bold text-sutra-green mb-3 border-b border-ochre-300/60 pb-2">
                  <Bus size={18} strokeWidth={2.2} />
                  今日交通
                </h3>
                <div className="bg-sutra-green/8 border-2 border-sutra-green/35 rounded-md p-4 text-teabrown-600 leading-7 font-medium shadow-sm">
                  {station.transportTip}
                </div>
              </section>

              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="text-center p-3 bg-parchment-100 rounded-sm border border-ochre-300/40">
                  <div className="text-xs text-ochre-600 tracking-widest mb-1">
                    海拔
                  </div>
                  <div className="font-black text-teabrown-700 text-lg tabular-nums">
                    {station.altitude.toLocaleString()}
                    <span className="text-sm font-medium ml-0.5">m</span>
                  </div>
                </div>
                <div className="text-center p-3 bg-parchment-100 rounded-sm border border-ochre-300/40">
                  <div className="text-xs text-ochre-600 tracking-widest mb-1">
                    路线序号
                  </div>
                  <div className="font-black text-teabrown-700 text-lg tabular-nums">
                    No.
                    {String(station.order).padStart(2, "0")}
                  </div>
                </div>
                <div className="text-center p-3 bg-parchment-100 rounded-sm border border-ochre-300/40">
                  <div className="text-xs text-ochre-600 tracking-widest mb-1">
                    徒步线上
                  </div>
                  <div
                    className={`font-black text-lg ${station.isOnRoute ? "text-sutra-green" : "text-sutra-red"}`}
                  >
                    {station.isOnRoute ? "✓ 经过" : "× 不经过"}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>,
    document.body,
  );
}
