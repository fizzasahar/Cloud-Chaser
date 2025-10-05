export const SunSVG = (props) => (
  <svg
    {...props}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={props.className}
  >
    <circle cx="32" cy="32" r="14" fill="#FFD54F" />
    {/* Rays */}
    {[...Array(8)].map((_, i) => {
      const angle = (i * 45) * (Math.PI / 180);
      const x1 = 32 + Math.cos(angle) * 20;
      const y1 = 32 + Math.sin(angle) * 20;
      const x2 = 32 + Math.cos(angle) * 28;
      const y2 = 32 + Math.sin(angle) * 28;
      return (
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="#FFD54F"
          strokeWidth="4"
          strokeLinecap="round"
        />
      );
    })}
  </svg>
);