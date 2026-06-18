import { useState } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Hero } from "@/components/layout/Hero";
import { StationTimeline } from "@/components/stations/StationTimeline";
import { CarrierGallery } from "@/components/carriers/CarrierGallery";
import { TradeFlow } from "@/components/trade/TradeFlow";
import { RouteSection } from "@/components/route/RouteSection";
import { TravelTips } from "@/components/tips/TravelTips";
import { NodeModal } from "@/components/shared/NodeModal";
import type { Station } from "@/data/stations";
import { Compass } from "lucide-react";

function App() {
  const [selectedStation, setSelectedStation] = useState<Station | null>(null);

  return (
    <div className="relative min-h-screen bg-parchment-100 text-teabrown-700 overflow-x-hidden">
      <Navigation />

      <main>
        <Hero />
        <StationTimeline onSelectStation={setSelectedStation} />
        <CarrierGallery />
        <TradeFlow />
        <RouteSection
          selectedStationId={selectedStation?.id ?? null}
          onSelectStation={setSelectedStation}
        />
        <TravelTips />
      </main>

      <footer className="relative bg-teabrown-700 text-parchment-100/85 py-14 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(249,168,37,0.12),transparent_55%),radial-gradient(ellipse_at_80%_70%,rgba(198,40,40,0.08),transparent_55%)]" />
        <div
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.8'/%3E%3C/svg%3E\")",
          }}
        />
        <div className="container relative">
          <div className="grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-5 space-y-5">
              <div className="flex items-center gap-3">
                <span className="w-11 h-11 rounded-sm flex items-center justify-center border-2 border-sutra-gold/70 text-sutra-gold bg-teabrown-600/60">
                  <Compass size={22} strokeWidth={2.2} />
                </span>
                <h4 className="font-black text-parchment-50 tracking-[0.25em] text-xl sm:text-2xl">
                  茶马古道 · Te-Horse
                </h4>
              </div>
              <p className="text-parchment-100/75 leading-8 font-medium max-w-md text-sm sm:text-base">
                本专题为文化与旅行爱好者制作，历史资料参考《雅安县志》《西康图经》《茶马古道志》
                等文献，路线信息与旅行建议采集于近年实地踏勘，仅供参考，出行请以实际路况为准。
              </p>
              <div className="flex flex-wrap gap-2.5 pt-1">
                {[
                  "文化遗产",
                  "西南丝路",
                  "川藏南线",
                  "徒步旅行",
                  "人文地理",
                ].map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-xs font-bold tracking-wider text-sutra-gold/90 border border-sutra-gold/35 rounded-sm bg-sutra-gold/6"
                  >
                    # {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="md:col-span-4 space-y-4">
              <h5 className="font-bold text-sutra-gold tracking-[0.2em] text-sm uppercase">
                页面导航
              </h5>
              <ul className="grid grid-cols-2 gap-y-2.5 text-sm font-medium">
                {[
                  ["#hero", "开篇"],
                  ["#stations", "驿站历史"],
                  ["#carriers", "背夫文化"],
                  ["#trade", "茶叶贸易"],
                  ["#route", "徒步路线"],
                  ["#tips", "旅行攻略"],
                ].map(([href, label]) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="inline-flex items-center gap-2 text-parchment-100/85 hover:text-sutra-gold transition-colors group"
                    >
                      <span className="w-1 h-1 rounded-full bg-sutra-gold/0 group-hover:bg-sutra-gold transition-colors" />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-3 space-y-4">
              <h5 className="font-bold text-sutra-gold tracking-[0.2em] text-sm uppercase">
                核心数据
              </h5>
              <dl className="space-y-3 text-sm">
                {[
                  ["古道总长", "约 2,400 里"],
                  ["沿线驿站", "86 余处"],
                  ["兴盛跨度", "唐至清 1300 年"],
                  ["年运茶量", "1,000 万斤+"],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-baseline justify-between gap-3 pb-2 border-b border-parchment-50/10">
                    <dt className="text-parchment-100/60 tracking-wider">{k}</dt>
                    <dd className="font-bold text-parchment-50 tabular-nums">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-parchment-50/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-parchment-100/60 tracking-wide">
            <p className="font-medium leading-6">
              © 2025 山地茶马古道专题 · 本页历史叙事与旅行建议分栏呈现，叙事内容仅供学习参考。
            </p>
            <p className="font-bold tracking-[0.2em] text-sutra-gold/80">
              — 山河迢递 茶行万里 —
            </p>
          </div>
        </div>
      </footer>

      <NodeModal station={selectedStation} onClose={() => setSelectedStation(null)} />
    </div>
  );
}

export default App;
