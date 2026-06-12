const common = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ProblemIcon({ name }: { name: string }) {
  return (
    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-mint text-olive">
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true" {...common}>
        {name === "clock" && (
          <>
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 3" />
          </>
        )}
        {name === "sheet" && (
          <>
            <rect x="5" y="3" width="14" height="18" rx="2" />
            <path d="M9 8h6M9 12h6M9 16h4" />
          </>
        )}
        {name === "stop" && (
          <>
            <circle cx="12" cy="12" r="9" />
            <path d="M5.5 5.5l13 13" />
          </>
        )}
        {!["clock", "sheet", "stop"].includes(name) && (
          <>
            <circle cx="12" cy="12" r="9" />
            <path d="M12 8v4M12 16h.01" />
          </>
        )}
      </svg>
    </span>
  );
}

export function Stars({ rating = 5 }: { rating?: number }) {
  return (
    <div className="flex gap-1 text-leaf" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`h-4 w-4 ${i < rating ? "fill-current" : "fill-cream"}`}
          aria-hidden="true"
        >
          <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.9l-5.3 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export function Check({ className = "text-sage" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={`h-4 w-4 shrink-0 ${className}`} aria-hidden="true" {...common} strokeWidth={2.2}>
      <path d="M4 10.5l4 4 8-9" />
    </svg>
  );
}
