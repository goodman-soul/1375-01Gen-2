import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { carriers } from "@/data/carriers";
import type { Carrier } from "@/data/carriers";
import { MapPin, Package, Quote, Timer } from "lucide-react";

export function CarrierGallery() {
  return (
    <SectionWrapper
      id="carriers"
      eyebrow="背夫 · Carriers"
      title="脊梁上的千里路"
      subtitle="他们不是商人，却是茶马古道上最不可或缺的人。每人背负三百余斤茶砖，日行三十里，翻雪山，过溜索，用脚丈量出一部活着的运输史。"
      variant="dark"
    >
      <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-start mb-16 lg:mb-20">
        <QuoteIntro />
        <GearInfographic />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {carriers.map((c, i) => (
          <CarrierCard key={c.id} carrier={c} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}

function QuoteIntro() {
  const ref = useScrollReveal<HTMLDivElement>("reveal-left");
  return (
    <div ref={ref} className="relative">
      <Quote
        size={80}
        strokeWidth={1.2}
        className="absolute -top-4 -left-2 text-sutra-gold/30"
      />
      <blockquote className="relative pl-10 pr-4 py-4">
        <p className="font-serif text-parchment-50 text-lg sm:text-xl leading-9 italic">
          『有女莫嫁背茶郎，一年四季守空房。
          <br className="hidden sm:block" />
          有朝一日回了家，
          <br className="hidden sm:block" />
          磨烂脊梁扯断肠。』
        </p>
        <footer className="mt-5 text-sutra-gold/90 tracking-widest text-sm">
          —— 雅安民间旧谣
        </footer>
      </blockquote>

      <div className="mt-8 p-5 sm:p-6 border border-sutra-gold/25 rounded-sm bg-teabrown-700/40 backdrop-blur-sm">
        <h4 className="font-bold text-sutra-gold mb-3 text-base tracking-wide">
          背夫小百科
        </h4>
        <dl className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm">
          <div>
            <dt className="text-parchment-100/60 text-xs mb-1 tracking-widest">
              平均负重
            </dt>
            <dd className="font-bold text-parchment-50 text-xl tabular-nums">
              240–320 <span className="text-sm">斤</span>
            </dd>
          </div>
          <div>
            <dt className="text-parchment-100/60 text-xs mb-1 tracking-widest">
              日均行程
            </dt>
            <dd className="font-bold text-parchment-50 text-xl tabular-nums">
              30 <span className="text-sm">里</span>
            </dd>
          </div>
          <div>
            <dt className="text-parchment-100/60 text-xs mb-1 tracking-widest">
              雅康单程
            </dt>
            <dd className="font-bold text-parchment-50 text-xl tabular-nums">
              20 <span className="text-sm">天</span>
            </dd>
          </div>
          <div>
            <dt className="text-parchment-100/60 text-xs mb-1 tracking-widest">
              茶包单价
            </dt>
            <dd className="font-bold text-parchment-50 text-xl tabular-nums">
              1.5 <span className="text-sm">铜钱/斤</span>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

function GearInfographic() {
  const ref = useScrollReveal<HTMLDivElement>("reveal-right");
  const gears = [
    { name: "背夹子", desc: "十根竹片编就，贴合脊背，分散茶包重量。", icon: "▲" },
    { name: "丁字拐", desc: "行路时拄力支撑，歇脚时撑起背篓，片刻不离。", icon: "⊥" },
    { name: "背垫子", desc: "牦牛毛或棕麻编织，垫在脊背上，一月磨穿一层。", icon: "▬" },
    { name: "脚码子", desc: "鞋底钉上铁掌，冰面上不打滑，山径上更耐磨。", icon: "✦" },
    { name: "汗刮子", desc: "竹片一枚，挂在胸前随时刮汗，防盐霜腌蚀肌肤。", icon: "~" },
  ];
  return (
    <div ref={ref} className="space-y-4">
      <h4 className="font-bold text-sutra-gold text-lg tracking-wider pl-4 border-l-4 border-sutra-gold/80">
        背夫五件宝
      </h4>
      <ol className="space-y-3">
        {gears.map((g, i) => (
          <li
            key={g.name}
            className="flex gap-4 p-4 bg-parchment-50/5 hover:bg-parchment-50/10 border border-parchment-50/10 hover:border-sutra-gold/30 rounded-sm transition-all duration-300"
          >
            <span className="shrink-0 w-10 h-10 rounded-sm bg-sutra-gold/15 border border-sutra-gold/40 flex items-center justify-center text-sutra-gold font-black text-lg">
              {g.icon}
            </span>
            <div className="flex-1">
              <div className="flex items-baseline justify-between mb-1">
                <span className="font-bold text-parchment-50">
                  <span className="text-sutra-gold/90 mr-2 text-xs font-bold tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {g.name}
                </span>
              </div>
              <p className="text-parchment-100/75 text-sm leading-7 font-medium">
                {g.desc}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

interface CarrierCardProps {
  carrier: Carrier;
  index: number;
}
function CarrierCard({ carrier, index }: CarrierCardProps) {
  const ref = useScrollReveal<HTMLLIElement>(
    "reveal",
    { threshold: 0.15 },
    index * 100,
  );
  return (
    <li
      ref={ref}
      className="group relative bg-parchment-50/5 border border-parchment-50/15 hover:border-sutra-gold/40 rounded-sm p-5 sm:p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
    >
      <div className="flex items-start gap-4 mb-5">
        <div className="portrait-ring shrink-0">
          <div className="w-20 h-20 rounded-full overflow-hidden bg-teabrown-500 old-photo">
            <img
              src={carrier.portrait}
              alt={carrier.name}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h5 className="font-black text-parchment-50 text-xl">
              {carrier.name}
            </h5>
            <span className="text-xs px-2 py-0.5 rounded-sm bg-sutra-gold/20 text-sutra-gold font-bold tracking-wider whitespace-nowrap">
              「{carrier.nickname}」
            </span>
          </div>
          <div className="mt-2 space-y-1 text-xs text-parchment-100/70">
            <div className="flex items-center gap-1.5">
              <MapPin size={12} className="text-sutra-gold/80 shrink-0" />
              <span>{carrier.origin}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Timer size={12} className="text-sutra-gold/80 shrink-0" />
              <span>从业 {carrier.activeYears}</span>
            </div>
          </div>
        </div>
      </div>

      <p className="text-parchment-100/85 text-sm leading-7 mb-4 line-clamp-6 font-medium">
        {carrier.story}
      </p>

      <div className="pt-4 border-t border-parchment-50/15 space-y-2 text-xs">
        <div className="flex items-center gap-2">
          <Package size={13} className="text-sutra-gold/80 shrink-0" />
          <span className="text-parchment-100/70">常年背负：</span>
          <span className="font-bold text-parchment-50">{carrier.cargo}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={13} className="text-sutra-gold/80 shrink-0" />
          <span className="text-parchment-100/70">常走路段：</span>
          <span className="font-bold text-parchment-50">{carrier.route}</span>
        </div>
      </div>
    </li>
  );
}
