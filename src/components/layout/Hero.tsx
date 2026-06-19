import { ChevronDown } from "lucide-react";
import { OldPhoto } from "@/components/shared/OldPhoto";

export function Hero() {
  const scrollToNext = () => {
    const el = document.getElementById("stations");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] w-full overflow-hidden flex items-center"
    >
      <div className="absolute inset-0">
        <img
          src="/images/hero-landscape.svg"
          alt="茶马古道高原风景"
          className="w-full h-full object-cover old-photo"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-teabrown-700/55 via-teabrown-700/35 to-teabrown-700/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_60%,rgba(249,168,37,0.18),transparent_55%)]" />
        <div
          className="absolute inset-0 opacity-25 mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.8'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <div className="container relative z-10 pt-28 pb-20">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-3 animate-fade-in-up">
              <span className="h-px w-12 bg-sutra-gold/80" />
              <span className="text-sutra-gold/90 tracking-[0.4em] text-xs sm:text-sm font-medium uppercase">
                Tea Horse Ancient Road
              </span>
            </div>

            <h1 className="animate-fade-in-up [animation-delay:120ms]">
              <span className="block font-black text-parchment-50 text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.02] tracking-[0.04em] drop-shadow-2xl">
                山地
                <span className="text-sutra-gold mx-2">茶</span>
                马古道
              </span>
              <span className="block mt-4 font-serif font-normal text-parchment-100/90 text-xl sm:text-2xl md:text-3xl tracking-[0.15em]">
                — 山河迢递处的人与茶 —
              </span>
            </h1>

            <p
              className="max-w-2xl text-parchment-100/85 text-base sm:text-lg leading-8 animate-fade-in-up [animation-delay:260ms] font-medium"
              style={{ animationDelay: "260ms" }}
            >
              从雅安青衣江到拉萨八角街，两千余里山路，横跨十座四千米雪山。
              茶包、背篓、拐子、马帮——十三代人，用脊梁驮起一条文明走廊。
              今天，你仍可沿着旧辙行走，在驿站的瓦砾里，听见背夫的歌谣。
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: "420ms" }}>
              <button
                onClick={scrollToNext}
                className="group relative px-7 py-3 bg-ochre-500 hover:bg-ochre-600 text-parchment-50 font-bold tracking-[0.2em] text-sm border border-sutra-gold/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                <span className="relative z-10">走进历史</span>
                <span className="absolute inset-0 bg-sutra-gold/0 group-hover:bg-sutra-gold/15 transition-colors duration-300" />
              </button>
              <span className="seal text-xs !py-1 !px-2">光绪三十二年引</span>
            </div>
          </div>

          <div className="lg:col-span-4 hidden lg:block">
            <div className="relative h-[480px]">
              <div
                className="absolute top-0 left-0 w-[62%] animate-float-slow"
                style={
                  {
                    animationDelay: "0s",
                    ["--rot" as never]: "-4deg",
                  } as React.CSSProperties
                }
              >
                <OldPhoto
                  src="/images/porters-group.svg"
                  alt="背夫旧照"
                  showTape
                  rotateDeg={-4}
                />
              </div>
              <div
                className="absolute top-20 right-0 w-[58%] animate-float-slow"
                style={
                  {
                    animationDelay: "1.5s",
                    ["--rot" as never]: "5deg",
                  } as React.CSSProperties
                }
              >
                <OldPhoto
                  src="/images/caravan-snow.svg"
                  alt="马帮过雪山"
                  showTape
                  rotateDeg={5}
                />
              </div>
              <div
                className="absolute bottom-0 left-8 w-[52%] animate-float-slow"
                style={
                  {
                    animationDelay: "3s",
                    ["--rot" as never]: "-2deg",
                  } as React.CSSProperties
                }
              >
                <OldPhoto
                  src="/images/tea-warehouse.svg"
                  alt="茶仓旧照"
                  showTape
                  rotateDeg={-2}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="hidden sm:grid sm:grid-cols-3 lg:grid-cols-5 gap-px mt-20 bg-ochre-400/25 backdrop-blur-sm rounded-sm overflow-hidden animate-fade-in-up" style={{ animationDelay: "600ms" }}>
          {[
            { k: "总长", v: "2,400", u: "余里" },
            { k: "驿站", v: "86", u: "余处" },
            { k: "最高山口", v: "4,298", u: "米" },
            { k: "兴盛年代", v: "1,300", u: "年" },
            { k: "今日徒步线", v: "10", u: "节点" },
          ].map((s) => (
            <div
              key={s.k}
              className="bg-parchment-50/8 py-5 px-4 text-center border-x border-ochre-400/10"
            >
              <div className="text-parchment-100/60 text-xs tracking-[0.3em] font-medium mb-1.5">
                {s.k}
              </div>
              <div className="text-parchment-50">
                <span className="font-black text-2xl sm:text-3xl tabular-nums">
                  {s.v}
                </span>
                <span className="text-sutra-gold/90 ml-1 text-sm font-bold">
                  {s.u}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-parchment-100/70 hover:text-sutra-gold transition-colors group"
        aria-label="向下滚动"
      >
        <span className="text-xs tracking-[0.3em] font-medium">SCROLL</span>
        <ChevronDown
          size={22}
          strokeWidth={2}
          className="animate-bounce group-hover:animate-none"
        />
      </button>
    </section>
  );
}
