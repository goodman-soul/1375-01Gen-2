import { Mountain } from "lucide-react";

interface AltitudeBadgeProps {
  altitude: number;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
}

const sizeMap = {
  sm: "px-2 py-0.5 text-xs gap-1",
  md: "px-3 py-1 text-sm gap-1.5",
  lg: "px-4 py-1.5 text-base gap-2",
};

const iconSizeMap = {
  sm: 12,
  md: 14,
  lg: 18,
};

export function AltitudeBadge({
  altitude,
  size = "md",
  showLabel = true,
}: AltitudeBadgeProps) {
  const color =
    altitude >= 4000
      ? "bg-sutra-red/90 text-sutra-white border-sutra-red"
      : altitude >= 3000
        ? "bg-ochre-600/90 text-parchment-50 border-ochre-700"
        : "bg-sutra-green/90 text-parchment-50 border-sutra-green";

  return (
    <span
      className={`inline-flex items-center font-semibold border rounded-sm shadow-sm tracking-wide ${color} ${sizeMap[size]}`}
    >
      <Mountain size={iconSizeMap[size]} strokeWidth={2.5} />
      <span className="font-bold tabular-nums">{altitude.toLocaleString()}</span>
      {showLabel && <span className="opacity-90 font-medium">m</span>}
    </span>
  );
}
