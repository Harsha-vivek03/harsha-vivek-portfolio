const bubbles = Array.from({ length: 16 }).map((_, i) => ({
  left: `${(i * 61 + 7) % 100}%`,
  size: 6 + ((i * 7) % 16),
  dur: 16 + ((i * 5) % 18),
  delay: -((i * 3) % 20),
}));

export default function Bubbles() {
  return (
    <div className="bubbles" aria-hidden="true">
      {bubbles.map((b, i) => (
        <span key={i} style={{ left: b.left, width: b.size, height: b.size, animationDuration: `${b.dur}s`, animationDelay: `${b.delay}s` }} />
      ))}
    </div>
  );
}
