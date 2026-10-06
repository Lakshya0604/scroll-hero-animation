// Top-view sports car drawn as inline SVG (original artwork, no external image).
export default function Car() {
  return (
    <svg viewBox="0 0 120 260" className="h-full w-full drop-shadow-[0_20px_30px_rgba(0,0,0,0.6)]">
      <rect x="6" y="40" width="16" height="42" rx="6" fill="#111" />
      <rect x="98" y="40" width="16" height="42" rx="6" fill="#111" />
      <rect x="6" y="176" width="16" height="46" rx="6" fill="#111" />
      <rect x="98" y="176" width="16" height="46" rx="6" fill="#111" />
      <path d="M60 4 C92 4 108 40 108 90 L112 190 C112 230 90 256 60 256 C30 256 8 230 8 190 L12 90 C12 40 28 4 60 4Z" fill="#ff6a1a" />
      <path d="M60 4 C70 4 78 6 84 10 L60 60 L36 10 C42 6 50 4 60 4Z" fill="#ff8a45" />
      <path d="M32 96 C36 76 84 76 88 96 L92 150 C84 160 36 160 28 150Z" fill="#14161c" />
      <path d="M36 96 C42 84 78 84 84 96 L86 108 L34 108Z" fill="#3a4152" />
      <rect x="28" y="170" width="64" height="48" rx="10" fill="#e85a10" />
      <rect x="40" y="176" width="40" height="6" rx="3" fill="#111" />
      <rect x="40" y="190" width="40" height="6" rx="3" fill="#111" />
      <rect x="18" y="12" width="14" height="6" rx="3" fill="#fff6c8" transform="rotate(25 25 15)" />
      <rect x="88" y="12" width="14" height="6" rx="3" fill="#fff6c8" transform="rotate(-25 95 15)" />
      <rect x="22" y="246" width="20" height="4" rx="2" fill="#ff2a2a" />
      <rect x="78" y="246" width="20" height="4" rx="2" fill="#ff2a2a" />
    </svg>
  );
}
