import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { OldPhoto } from "@/components/shared/OldPhoto";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { teaTrades, tradeFacts } from "@/data/teaTrade";
import { ArrowRight, BookText, Coins, Scale } from "lucide-react";

export function TradeFlow() {
  return (
    <SectionWrapper
      id="trade"
      eyebrow="茶贸 · Tea Trade"
      title="一片茶叶的西行记"
      subtitle="茶入藏，马入川，银入汉——三种商品，三条路径，织就十三世纪以来东亚最庞大的内陆贸易网络。每一片茶叶的背后，都是王朝的边疆政策与市井的烟火生计。"
      variant="accent"
    >
      <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-16 lg:mb-20">
        {teaTrades.map((t, i) => (
          <TeaCard key={t.id} tea={t} index={i} />
        ))}
      </div>

      <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-2 space-y-6">
          <TradeMap />
        </div>
        <div className="lg:col-span-3 space-y-5">
          <h3 className="font-black text-teabrown-700 text-2xl sm:text-3xl flex items-center gap-3">
            <BookText size={24} className="text-ochre-600" strokeWidth={2.2} />
            茶马互市三百年
          </h3>
          {tradeFacts.map((fact, i) => (
            <FactBlock key={fact.title} fact={fact} index={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

interface TeaCardProps {
  tea: (typeof teaTrades)[number];
  index: number;
}
function TeaCard({ tea, index }: TeaCardProps) {
  const ref = useScrollReveal<HTMLDivElement>(
    "reveal",
    { threshold: 0.1 },
    index * 120,
  );
  return (
    <article
      ref={ref}
      className="vintage-card group overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1.5"
    >
      <div className="relative aspect-[5/3]">
        <OldPhoto
          src={tea.image}
          alt={tea.teaName}
          className="w-full h-full"
        />
        <div
          className="absolute top-3 left-3 px-3 py-1 text-xs font-bold tracking-widest text-parchment-50 rounded-sm shadow-md"
          style={{ backgroundColor: tea.iconColor }}
        >
          No.{String(index + 1).padStart(2, "0")}
        </div>
      </div>

      <div className="p-5 sm:p-6 space-y-4">
        <h4 className="font-black text-teabrown-700 text-xl sm:text-2xl tracking-wide flex items-baseline justify-between">
          {tea.teaName}
          <span className="text-xs px-2 py-0.5 rounded-sm bg-ochre-500/12 text-ochre-700 font-bold tracking-wider border border-ochre-500/30">
            边茶
          </span>
        </h4>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="p-3 bg-parchment-200/40 border border-ochre-300/30 rounded-sm">
            <div className="text-[11px] text-ochre-700 tracking-widest font-bold mb-1 opacity-70">
              产地
            </div>
            <div className="font-bold text-teabrown-700 leading-5">
              {tea.origin}
            </div>
          </div>
          <div className="p-3 bg-parchment-200/40 border border-ochre-300/30 rounded-sm">
            <div className="text-[11px] text-ochre-700 tracking-widest font-bold mb-1 opacity-70">
              销地
            </div>
            <div className="font-bold text-teabrown-700 leading-5">
              {tea.destination}
            </div>
          </div>
        </div>

        <p className="text-teabrown-600/90 text-sm leading-7 line-clamp-4 font-medium">
          {tea.description}
        </p>

        <div className="pt-3 border-t border-ochre-300/40 space-y-2 text-xs">
          <div className="flex items-center justify-between gap-3">
            <span className="flex items-center gap-1.5 text-ochre-700/80">
              <Coins size={13} strokeWidth={2.2} />
              旧时价
            </span>
            <span className="font-bold text-teabrown-700">{tea.priceEra}</span>
          </div>
          <div className="flex items-center justify-between gap-3">
            <span className="flex items-center gap-1.5 text-ochre-700/80">
              <Scale size={13} strokeWidth={2.2} />
              年交易量
            </span>
            <span className="font-bold text-teabrown-700">
              {tea.tradeVolume}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

function TradeMap() {
  const ref = useScrollReveal<HTMLDivElement>("reveal-left", { threshold: 0.2 });
  const nodes = [
    { name: "雅安", x: 12, y: 60, color: "#8B5A2B" },
    { name: "康定", x: 38, y: 42, color: "#3E2723" },
    { name: "理塘", x: 62, y: 34, color: "#2E7D32" },
    { name: "巴塘", x: 82, y: 40, color: "#1565C0" },
    { name: "拉萨", x: 96, y: 30, color: "#C62828" },
  ];
  return (
    <div ref={ref} className="vintage-card p-5 sm:p-6 rounded-sm">
      <h4 className="font-bold text-teabrown-700 text-lg mb-4 flex items-center gap-2">
        <ArrowRight size={18} className="text-ochre-600" strokeWidth={2.2} />
        川藏茶路流向图
      </h4>
      <div className="relative aspect-[16/10] bg-gradient-to-br from-parchment-50 to-parchment-200/40 border border-ochre-300/40 rounded-sm overflow-hidden">
        <svg viewBox="0 0 100 70" className="absolute inset-0 w-full h-full">
          <defs>
            <pattern
              id="grid1"
              width="5"
              height="5"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 5 0 L 0 0 0 5"
                fill="none"
                stroke="#8B5A2B"
                strokeOpacity="0.1"
                strokeWidth="0.2"
              />
            </pattern>
          </defs>
          <rect width="100" height="70" fill="url(#grid1)" />
          <path
            d="M 8 55 Q 18 48 25 45 T 45 40 T 65 35 T 85 38 L 97 28"
            fill="none"
            stroke="#8B5A2B"
            strokeWidth="1.6"
            strokeDasharray="2.2 1.4"
            className="route-path"
            strokeLinecap="round"
          />
          {nodes.map((n, i) => (
            <g key={n.name} transform={`translate(${n.x} ${n.y})`}>
              <circle
                r="2"
                fill={n.color}
                stroke="#FBF6E8"
                strokeWidth="0.8"
              />
              <text
                y={i % 2 === 0 ? -3 : 5.5}
                fontSize="3.2"
                fontWeight="900"
                fill="#3E2723"
                textAnchor={i > 2 ? "end" : "start"}
              >
                {n.name}
              </text>
            </g>
          ))}
          <g transform="translate(50 60)">
            <rect
              x="-24"
              y="-5"
              width="48"
              height="9"
              fill="#8B5A2B"
              opacity="0.08"
              rx="1"
            />
            <text
              textAnchor="middle"
              y="1"
              fontSize="3.2"
              fontWeight="700"
              fill="#5A3B1B"
              letterSpacing="0.5"
            >
              川藏南线 · 全程约 2400 里
            </text>
          </g>
        </svg>
      </div>
      <div className="mt-4 grid grid-cols-5 gap-2 text-[11px] text-center">
        {["川茶产地", "互市枢纽", "南路重镇", "出藏门户", "销地终点"].map(
          (l, i) => (
            <div
              key={l}
              className="flex flex-col items-center gap-1 font-medium"
            >
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: nodes[i].color }}
              />
              <span className="text-teabrown-600">{l}</span>
            </div>
          ),
        )}
      </div>
    </div>
  );
}

function FactBlock({
  fact,
  index,
}: {
  fact: (typeof tradeFacts)[number];
  index: number;
}) {
  const ref = useScrollReveal<HTMLDivElement>(
    "reveal-right",
    { threshold: 0.15 },
    index * 80,
  );
  return (
    <div
      ref={ref}
      className="relative p-5 sm:p-6 bg-parchment-50/60 border border-ochre-300/40 hover:border-sutra-gold/60 transition-all duration-300 rounded-sm group"
    >
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-ochre-500/60 group-hover:bg-sutra-gold transition-colors duration-300 rounded-l-sm" />
      <h5 className="font-black text-ochre-700 text-lg mb-2 pl-2">
        <span className="inline-block w-6 text-teabrown-700/60 font-black text-sm align-middle mr-2">
          {String(index + 1).padStart(2, "0")}
        </span>
        {fact.title}
      </h5>
      <p className="text-teabrown-600/90 text-sm leading-8 font-medium pl-2">
        {fact.content}
      </p>
    </div>
  );
}
