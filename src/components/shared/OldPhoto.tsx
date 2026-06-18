import { useState, useRef, useEffect } from "react";

interface OldPhotoProps {
  src: string;
  alt: string;
  className?: string;
  caption?: string;
  showTape?: boolean;
  rotateDeg?: number;
}

export function OldPhoto({
  src,
  alt,
  className = "",
  caption,
  showTape = false,
  rotateDeg = 0,
}: OldPhotoProps) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.style.setProperty("--rot", `${rotateDeg}deg`);
  }, [rotateDeg]);

  return (
    <figure
      ref={containerRef}
      className={`relative group ${showTape ? "photo-tape" : ""} ${className}`}
      style={{
        transform: `rotate(${rotateDeg}deg)`,
        transition: "transform 0.4s ease-out",
      }}
    >
      <div
        className={`relative overflow-hidden bg-parchment-200/60 shadow-photo border-4 border-parchment-50 ${
          loaded ? "" : "animate-pulse"
        }`}
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-parchment-200 to-ochre-400/30 flex items-center justify-center text-ochre-700/60 text-sm font-medium transition-opacity duration-500"
          style={{ opacity: loaded ? 0 : 1 }}
        >
          {caption || "老照片加载中…"}
        </div>
        {!errored ? (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            onError={() => setErrored(true)}
            className={`old-photo block w-full h-full object-cover transition-opacity duration-700 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
            draggable={false}
          />
        ) : (
          <div className="w-full aspect-[4/3] flex flex-col items-center justify-center text-ochre-700/80 p-4 text-center text-sm bg-parchment-100">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              className="w-10 h-10 mb-2 opacity-60"
            >
              <rect x="3" y="4" width="18" height="16" rx="1" />
              <circle cx="9" cy="10" r="2" />
              <path d="M3 17l5-5 4 4 3-3 6 6" />
            </svg>
            <span>{alt}</span>
          </div>
        )}
        <div className="absolute inset-0 pointer-events-none bg-parchment-100/0 group-hover:bg-parchment-100/10 transition-colors duration-300" />
      </div>
      {caption && (
        <figcaption
          className="mt-2 text-center text-ochre-700/80 text-sm tracking-wide"
          style={{ transform: `rotate(${-rotateDeg}deg)` }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
