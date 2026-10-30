const TOP =
  'M0 60 C 120 20, 240 20, 360 60 S 600 100, 720 60 S 960 20, 1080 60 S 1320 100, 1440 60';

export default function Wave({ fill, speed = 20, reverse = false, foam = false, className = '', style }) {
  const body = `${TOP} L1440 200 L0 200 Z`;
  return (
    <div className={`wave ${className}`} style={style} aria-hidden="true">
      <svg
        viewBox="0 0 2880 200"
        preserveAspectRatio="none"
        style={{ animationDuration: `${speed}s`, animationDirection: reverse ? 'reverse' : 'normal' }}
      >
        <path d={body} fill={fill} />
        <path d={body} fill={fill} transform="translate(1440 0)" />
        {foam && (
          <>
            <path d={TOP} fill="none" stroke="rgba(170,205,255,.4)" strokeWidth="4" strokeLinecap="round" />
            <path d={TOP} fill="none" stroke="rgba(170,205,255,.4)" strokeWidth="4" strokeLinecap="round" transform="translate(1440 0)" />
          </>
        )}
      </svg>
    </div>
  );
}
