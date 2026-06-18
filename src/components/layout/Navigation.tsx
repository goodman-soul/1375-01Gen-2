import { useEffect, useState } from "react";
import { Compass, Menu, X } from "lucide-react";

const navItems = [
  { id: "hero", label: "开篇" },
  { id: "stations", label: "驿站" },
  { id: "carriers", label: "背夫" },
  { id: "trade", label: "茶贸" },
  { id: "route", label: "路线" },
  { id: "tips", label: "攻略" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const offsets = navItems.map(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return { id, top: Infinity };
        const rect = el.getBoundingClientRect();
        return { id, top: Math.abs(rect.top - 120) };
      });
      offsets.sort((a, b) => a.top - b.top);
      if (offsets[0]) setActive(offsets[0].id);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-parchment-100/92 backdrop-blur-md border-b border-ochre-400/30 shadow-vintage"
          : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between h-16 sm:h-[72px]">
        <button
          onClick={() => handleClick("hero")}
          className="flex items-center gap-2.5 group"
        >
          <span
            className={`w-9 h-9 rounded-sm flex items-center justify-center border-2 transition-all duration-300 ${
              scrolled
                ? "border-ochre-600 text-ochre-700 bg-parchment-200/70"
                : "border-parchment-100/80 text-parchment-50 bg-teabrown-600/40"
            }`}
          >
            <Compass size={18} strokeWidth={2.2} />
          </span>
          <span
            className={`font-black tracking-[0.2em] text-base sm:text-lg transition-colors ${
              scrolled ? "text-teabrown-700" : "text-parchment-50 drop-shadow"
            }`}
          >
            茶马古道
          </span>
        </button>

        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleClick(item.id)}
                className={`relative px-3.5 py-2 text-sm font-semibold tracking-wide transition-colors ${
                  active === item.id
                    ? scrolled
                      ? "text-ochre-700"
                      : "text-sutra-gold"
                    : scrolled
                      ? "text-teabrown-600/80 hover:text-ochre-700"
                      : "text-parchment-50/85 hover:text-parchment-50"
                }`}
              >
                {item.label}
                <span
                  className={`absolute left-1/2 -translate-x-1/2 bottom-0.5 h-0.5 rounded-full transition-all duration-300 ${
                    active === item.id
                      ? `w-7 ${scrolled ? "bg-ochre-600" : "bg-sutra-gold"}`
                      : "w-0 bg-current opacity-60"
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>

        <button
          className={`md:hidden w-10 h-10 flex items-center justify-center rounded-sm border transition-colors ${
            scrolled
              ? "border-ochre-400/50 text-ochre-700 bg-parchment-50/60"
              : "border-parchment-50/60 text-parchment-50"
          }`}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="切换菜单"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden bg-parchment-100/97 border-b border-ochre-400/30 backdrop-blur transition-[max-height] duration-300 ease-out ${
          mobileOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <ul className="container py-3 space-y-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleClick(item.id)}
                className={`w-full text-left px-4 py-2.5 rounded-sm font-medium transition-colors ${
                  active === item.id
                    ? "bg-ochre-500/15 text-ochre-700"
                    : "text-teabrown-600 hover:bg-ochre-500/8"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
