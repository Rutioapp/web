export const warmBlurDataUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 20" fill="none">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#f5efe3" />
        <stop offset="55%" stop-color="#eadfca" />
        <stop offset="100%" stop-color="#d9c4a0" />
      </linearGradient>
    </defs>
    <rect width="32" height="20" fill="url(#g)" />
    <circle cx="8" cy="7" r="10" fill="#ffffff" fill-opacity="0.18" />
    <circle cx="24" cy="13" r="8" fill="#c9a84c" fill-opacity="0.08" />
  </svg>
`)}`;
