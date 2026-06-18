import { useState, useMemo, useRef, useEffect } from "react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { hikingRoutes } from "@/data/hikingRoutes";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Backpack,
  CalendarCheck2,
  ShieldAlert,
  Bus,
  Star,
  CheckCircle2,
  AlertTriangle,
  Clock,
  ArrowRightLeft,
} from "lucide-react";

type TabKey = "gear" | "season" | "safety" | "transport";

const tabs: { key: TabKey; label: string; icon: React.ReactNode; hint: string }[] = [
  { key: "gear", label: "装备清单", icon: <Backpack size={18} strokeWidth={2.2} />, hint: "徒步必备" },
  { key: "season", label: "季节推荐", icon: <CalendarCheck2 size={18} strokeWidth={2.2} />, hint: "出行时机" },
  { key: "safety", label: "安全须知", icon: <ShieldAlert size={18} strokeWidth={2.2} />, hint: "高原健康" },
  { key: "transport", label: "交通接驳", icon: <Bus size={18} strokeWidth={2.2} />, hint: "分段指南" },
];

export function TravelTips() {
  const route = hikingRoutes[0];
  const [active, setActive] = useState<TabKey>("gear");
  const navRef = useRef<HTMLDivElement>(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const sectionRef = useScrollReveal<HTMLDivElement>("reveal");

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const el = nav.querySelector<HTMLElement>(`[data-tab="${active}"]`);
    if (el) {
      setIndicator({ left: el.offsetLeft, width: el.offsetWidth });
    }
  }, [active]);

  const gearList = useMemo(() => route.gearList, [route]);
  const seasons = useMemo(() => route.seasonRecommendation, [route]);
  const safety = useMemo(() => route.safetyNotes, [route]);
  const transport = useMemo(() => route.transportConnections, [route]);

  return (
    <SectionWrapper
      id="tips"
      eyebrow="旅行建议 · Travel Guide"
      title="踏上古道之前"
      subtitle="历史叙事与实用攻略在此分野。以下内容专为今日徒步旅行者准备：装备选型、时令判断、高反应对与分段交通——愿你走得从容，看得深入。"
      variant="dark"
      showStamp={false}
    >
      <div ref={sectionRef}>
        <div
          ref={navRef}
          className="relative flex flex-wrap md:flex-nowrap gap-2 md:gap-0 border-b border-sutra-gold/30 mb-8 sm:mb-10"
          role="tablist"
          aria-label="旅行建议分类"
        >
          {tabs.map((t) => (
            <button
              key={t.key}
              role="tab"
              aria-selected={active === t.key}
              data-tab={t.key}
              onClick={() => setActive(t.key)}
              className={`relative flex-1 md:flex-none md:px-7 sm:px-5 px-3 py-4 text-left md:text-center transition-all duration-300 z-10 ${
                active === t.key
                  ? "text-sutra-gold"
                  : "text-parchment-100/70 hover:text-parchment-50"
              }`}
            >
              <div className="flex items-center md:flex-col md:items-center gap-2.5 md:gap-1.5">
                <span
                  className={`shrink-0 transition-transform duration-300 ${
                    active === t.key ? "scale-110" : ""
                  }`}
                >
                  {t.icon}
                </span>
                <span className="flex-1 md:flex-none">
                  <span className="block font-bold tracking-wide text-sm sm:text-base">
                    {t.label}
                  </span>
                  <span className="block text-[10.5px] md:text-[11px] tracking-widest opacity-75 font-medium md:mt-0.5">
                    {t.hint}
                  </span>
                </span>
              </div>
            </button>
          ))}
          <span
            className="tab-indicator absolute bottom-0 h-[3px] bg-sutra-gold rounded-full shadow-[0_0_12px_rgba(249,168,37,0.5)]"
            style={{ transform: `translateX(${indicator.left}px)`, width: indicator.width }}
          />
        </div>

        <div className="min-h-[420px]">
          {active === "gear" && (
            <GearPanel list={gearList} />
          )}
          {active === "season" && (
            <SeasonPanel seasons={seasons} />
          )}
          {active === "safety" && (
            <SafetyPanel notes={safety} />
          )}
          {active === "transport" && (
            <TransportPanel connections={transport} />
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}

function GearPanel({ list }: { list: typeof hikingRoutes[0]["gearList"] }) {
  return (
    <div className="grid md:grid-cols-2 gap-5 sm:gap-6 animate-fade-in-up">
      {list.map((g, i) => (
        <div
          key={g.category}
          className={`relative p-5 sm:p-6 rounded-sm border backdrop-blur-sm transition-all duration-500 ${
            g.essential
              ? "bg-sutra-gold/8 border-sutra-gold/40"
              : "bg-parchment-50/5 border-parchment-50/15"
          }`}
          style={{ animationDelay: `${i * 80}ms` }}
        >
          <div className="flex items-center justify-between mb-4">
            <h5 className="font-black text-parchment-50 text-lg flex items-center gap-2.5">
              <span
                className={`inline-flex w-8 h-8 items-center justify-center rounded-sm text-sm font-black ${
                  g.essential
                    ? "bg-sutra-gold/25 text-sutra-gold border border-sutra-gold/50"
                    : "bg-parchment-50/10 text-parchment-100/90 border border-parchment-50/20"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              {g.category}
            </h5>
            {g.essential && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10.5px] font-bold tracking-wider bg-sutra-gold/20 text-sutra-gold border border-sutra-gold/40">
                <CheckCircle2 size={12} strokeWidth={3} />
                必备
              </span>
            )}
          </div>
          <ul className="space-y-2.5">
            {g.items.map((it, j) => (
              <li
                key={j}
                className="flex items-start gap-2.5 text-sm text-parchment-100/90 font-medium leading-6"
              >
                <span
                  className={`mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full ${
                    g.essential ? "bg-sutra-gold" : "bg-parchment-100/50"
                  }`}
                />
                <span>{it}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function SeasonPanel({
  seasons,
}: {
  seasons: typeof hikingRoutes[0]["seasonRecommendation"];
}) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 animate-fade-in-up">
      {seasons.map((s, i) => (
        <div
          key={s.season}
          className="group relative p-5 sm:p-6 rounded-sm bg-parchment-50/5 border border-parchment-50/15 hover:border-sutra-gold/50 transition-all duration-500 hover:-translate-y-1"
          style={{ animationDelay: `${i * 80}ms` }}
        >
          <div className="flex items-center justify-between mb-4">
            <h5 className="font-black text-parchment-50 text-xl">{s.season}</h5>
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star
                  key={j}
                  size={14}
                  className={`transition-colors duration-300 ${
                    j < s.rating
                      ? "fill-sutra-gold text-sutra-gold"
                      : "fill-transparent text-parchment-100/25"
                  }`}
                  strokeWidth={2}
                />
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2 mb-3 text-[11px] font-bold tracking-widest text-sutra-gold/90">
            <span>推荐指数</span>
            <span className="ml-auto text-lg tabular-nums">
              {s.rating}
              <span className="text-parchment-100/40"> / 5</span>
            </span>
          </div>
          <div className="h-1.5 rounded-full bg-parchment-50/10 overflow-hidden mb-4">
            <div
              className="h-full bg-gradient-to-r from-sutra-gold/60 via-sutra-gold to-sutra-red/80 rounded-full transition-all duration-700"
              style={{ width: `${s.rating * 20}%` }}
            />
          </div>
          <p className="text-sm text-parchment-100/85 leading-7 font-medium">
            {s.desc}
          </p>
        </div>
      ))}

      <div className="sm:col-span-2 lg:col-span-4 mt-2 p-5 sm:p-6 bg-sutra-gold/8 border border-sutra-gold/35 rounded-sm animate-fade-in-up" style={{ animationDelay: "380ms" }}>
        <div className="flex items-start gap-3">
          <AlertTriangle
            size={22}
            className="text-sutra-gold shrink-0 mt-0.5"
            strokeWidth={2.2}
          />
          <div className="text-sm sm:text-base text-parchment-100/90 leading-7 font-medium">
            <strong className="text-sutra-gold font-black tracking-wide">
              出行建议：
            </strong>
            综合天气稳定度、风景观赏、安全系数三方面，
            <span className="text-parchment-50 font-bold">9 月中旬至 10 月中旬</span>
            是川藏南线徒步的黄金窗口。此时段新都桥杨树金黄、理塘草原初雪未封、塌方概率最低。
            <span className="text-sutra-red font-bold">
              7 月下旬至 8 月上旬为雨季高峰
            </span>
            ，非经验丰富者不建议此段出行。
          </div>
        </div>
      </div>
    </div>
  );
}

function SafetyPanel({ notes }: { notes: string[] }) {
  return (
    <div className="space-y-4 animate-fade-in-up">
      {notes.map((n, i) => (
        <div
          key={i}
          className="group flex items-start gap-4 sm:gap-5 p-4 sm:p-5 bg-parchment-50/5 border border-parchment-50/15 hover:border-sutra-red/50 transition-all duration-300 rounded-sm"
          style={{ animationDelay: `${i * 70}ms` }}
        >
          <div className="shrink-0">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-sm bg-sutra-red/18 border border-sutra-red/50 flex items-center justify-center text-sutra-red">
              <span className="font-black text-sm tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          </div>
          <p className="flex-1 text-parchment-100/90 text-sm sm:text-base leading-8 font-medium">
            {n}
          </p>
        </div>
      ))}

      <div className="mt-6 grid sm:grid-cols-3 gap-4 animate-fade-in-up" style={{ animationDelay: "450ms" }}>
        {[
          {
            title: "高反黄金法则",
            content:
              "慢慢走、少洗澡、多喝水、不饮酒。出现头痛先服布洛芬，若呕吐立即下撤。",
            color: "sutra-gold",
          },
          {
            title: "徒步礼仪",
            content:
              "遇见牦牛群侧面避让，勿穿红色；转经筒顺时针，玛尼堆勿踏勿取。",
            color: "sutra-green",
          },
          {
            title: "紧急联络",
            content:
              "康定市人民医院（0836-2822065）、理塘县医院（0836-5322296）、巴塘急救 120",
            color: "sutra-red",
          },
        ].map((c) => (
          <div
            key={c.title}
            className="p-4 sm:p-5 rounded-sm bg-teabrown-700/60 border border-parchment-50/10"
          >
            <h6
              className={`font-black mb-2 text-sm tracking-wider ${
                c.color === "sutra-gold"
                  ? "text-sutra-gold"
                  : c.color === "sutra-green"
                    ? "text-[#4ade80]"
                    : "text-[#fca5a5]"
              }`}
            >
              {c.title}
            </h6>
            <p className="text-parchment-100/85 text-sm leading-7 font-medium">
              {c.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TransportPanel({
  connections,
}: {
  connections: typeof hikingRoutes[0]["transportConnections"];
}) {
  return (
    <div className="relative animate-fade-in-up">
      <div className="absolute left-5 sm:left-6 top-4 bottom-4 w-0.5 bg-gradient-to-b from-sutra-green via-sutra-gold to-sutra-red rounded-full" />
      <ol className="space-y-4">
        {connections.map((c, i) => (
          <li
            key={`${c.from}-${c.to}`}
            className="relative pl-14 sm:pl-16"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="absolute left-0 top-3 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-teabrown-600 border-2 border-sutra-gold/60 flex items-center justify-center text-sutra-gold shadow-xl z-10">
              <ArrowRightLeft size={16} strokeWidth={2.5} />
            </div>
            <div className="relative p-5 sm:p-6 bg-parchment-50/5 border border-parchment-50/15 hover:border-sutra-gold/45 transition-all duration-300 rounded-sm group">
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4">
                <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-[260px]">
                  <span className="font-black text-parchment-50 text-lg sm:text-xl">
                    {c.from}
                  </span>
                  <span className="flex-1 max-w-[100px] h-px bg-gradient-to-r from-sutra-gold via-sutra-gold/60 to-sutra-gold/30 relative">
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[5px] border-l-[7px] border-y-transparent border-l-sutra-gold/80" />
                  </span>
                  <span className="font-black text-parchment-50 text-lg sm:text-xl">
                    {c.to}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm shrink-0">
                  <span className="inline-flex items-center gap-1.5 text-sutra-gold/90 font-bold">
                    <Bus size={15} strokeWidth={2.2} />
                    {c.method}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-parchment-100/80 font-bold">
                    <Clock size={15} strokeWidth={2.2} />
                    {c.duration}
                  </span>
                </div>
              </div>
              <div className="pl-3 border-l-2 border-sutra-gold/35">
                <p className="text-parchment-100/85 text-sm sm:text-base leading-7 font-medium">
                  {c.note}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-8 p-5 sm:p-7 vintage-card rounded-sm animate-fade-in-up text-teabrown-700" style={{ animationDelay: "520ms" }}>
        <h6 className="font-black text-xl mb-3 flex items-center gap-3">
          <AlertTriangle size={22} className="text-ochre-600" strokeWidth={2.2} />
          徒步 + 搭车组合建议
        </h6>
        <p className="text-teabrown-600/90 text-sm sm:text-base leading-8 font-medium">
          全线徒步需 12–16 天且难度较大，推荐「徒步 + 分段搭车」组合：
          <span className="font-bold text-ochre-700 block mt-2">
            ① 天全 → 泸定（步行 2 天，80km，体验二郎山老路）
          </span>
          <span className="font-bold text-ochre-700 block">
            ② 折多山口 → 新都桥（步行 1 天，40km，高原适应徒步）
          </span>
          <span className="font-bold text-ochre-700 block">
            ③ 理塘 → 巴塘（搭车 + 毛垭草原徒步，精华段步行 2 天，60km）
          </span>
          <span className="block mt-2">
            其余路段可乘乡村客车或拼车接驳，全程压缩至 6–8 天，体验与效率兼得。
          </span>
        </p>
      </div>
    </div>
  );
}
