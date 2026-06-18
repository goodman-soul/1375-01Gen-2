import type { ReactNode } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface SectionWrapperProps {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  variant?: "light" | "dark" | "accent";
  align?: "left" | "center";
  showStamp?: boolean;
}

const variantStyles = {
  light: "bg-parchment-100 text-teabrown-700",
  dark: "bg-teabrown-600 text-parchment-50",
  accent: "bg-ochre-500/8 text-teabrown-700",
};

export function SectionWrapper({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  variant = "light",
  align = "left",
  showStamp = true,
}: SectionWrapperProps) {
  const headerRef = useScrollReveal<HTMLDivElement>("reveal");

  return (
    <section id={id} className={`relative py-20 sm:py-28 ${variantStyles[variant]}`}>
      <div className="container relative">
        <div
          ref={headerRef}
          className={`mb-14 sm:mb-16 lg:mb-20 max-w-4xl ${align === "center" ? "mx-auto text-center" : ""}`}
        >
          <div
            className={`flex items-center gap-3 mb-5 ${align === "center" ? "justify-center" : ""}`}
          >
            <span
              className={`h-px w-12 ${variant === "dark" ? "bg-sutra-gold/70" : "bg-ochre-600/60"}`}
            />
            <span
              className={`tracking-[0.4em] text-xs sm:text-sm font-semibold uppercase ${variant === "dark" ? "text-sutra-gold/90" : "text-ochre-700"}`}
            >
              {eyebrow}
            </span>
            {showStamp && (
              <span className={`seal text-[10px] sm:text-xs ml-2 ${variant === "dark" ? "!text-sutra-red !border-sutra-red" : ""}`}>
                古道印记
              </span>
            )}
          </div>

          <h2
            className={`font-black tracking-[0.06em] text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] ${
              variant === "dark" ? "text-parchment-50" : "text-teabrown-700"
            }`}
          >
            {title}
            <span
              className={`inline-block ml-3 w-3 h-3 rounded-sm align-middle -translate-y-1 ${
                variant === "dark" ? "bg-sutra-gold" : "bg-ochre-500"
              }`}
            />
          </h2>

          {subtitle && (
            <p
              className={`mt-6 text-base sm:text-lg leading-8 font-medium ${
                variant === "dark"
                  ? "text-parchment-100/80"
                  : "text-teabrown-600/80"
              } ${align === "center" ? "mx-auto max-w-2xl" : ""}`}
            >
              {subtitle}
            </p>
          )}
        </div>

        {children}
      </div>

      <div
        className={`absolute inset-x-0 top-0 h-px ${variant === "dark" ? "bg-sutra-gold/20" : "bg-ochre-400/25"}`}
      />
      <div
        className={`absolute inset-x-0 bottom-0 h-px ${variant === "dark" ? "bg-sutra-gold/20" : "bg-ochre-400/25"}`}
      />
    </section>
  );
}
