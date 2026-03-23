export function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="topGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fca5a5" />
          <stop offset="50%" stopColor="#d8b4fe" />
          <stop offset="100%" stopColor="#818cf8" />
        </linearGradient>
        <linearGradient id="midGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
        <linearGradient id="botGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4338ca" />
          <stop offset="100%" stopColor="#1e3a8a" />
        </linearGradient>
      </defs>
      
      {/* Bottom Layer */}
      {Array.from({ length: 6 }).map((_, i) => (
        <g key={`bot-${i}`} transform={`translate(0, ${30 + i})`}>
          <g transform="translate(50, 50) scale(1, 0.577) rotate(45) translate(-50, -50)">
            <rect x="25" y="25" width="50" height="50" rx="12" fill="#1e1b4b" />
          </g>
        </g>
      ))}
      <g transform="translate(0, 30)">
        <g transform="translate(50, 50) scale(1, 0.577) rotate(45) translate(-50, -50)">
          <rect x="25" y="25" width="50" height="50" rx="12" fill="url(#botGrad)" />
        </g>
      </g>
      
      {/* Middle Layer */}
      {Array.from({ length: 6 }).map((_, i) => (
        <g key={`mid-${i}`} transform={`translate(0, ${15 + i})`}>
          <g transform="translate(50, 50) scale(1, 0.577) rotate(45) translate(-50, -50)">
            <rect x="25" y="25" width="50" height="50" rx="12" fill="#3730a3" />
          </g>
        </g>
      ))}
      <g transform="translate(0, 15)">
        <g transform="translate(50, 50) scale(1, 0.577) rotate(45) translate(-50, -50)">
          <rect x="25" y="25" width="50" height="50" rx="12" fill="url(#midGrad)" />
        </g>
      </g>

      {/* Top Layer */}
      {Array.from({ length: 6 }).map((_, i) => (
        <g key={`top-${i}`} transform={`translate(0, ${i})`}>
          <g transform="translate(50, 50) scale(1, 0.577) rotate(45) translate(-50, -50)">
            <rect x="25" y="25" width="50" height="50" rx="12" fill="#7c3aed" />
          </g>
        </g>
      ))}
      <g transform="translate(0, 0)">
        <g transform="translate(50, 50) scale(1, 0.577) rotate(45) translate(-50, -50)">
          <rect x="25" y="25" width="50" height="50" rx="12" fill="url(#topGrad)" />
        </g>
      </g>
    </svg>
  );
}
