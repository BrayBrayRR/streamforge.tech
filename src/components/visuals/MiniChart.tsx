export default function MiniChart({
  data,
  splitIndex,
  label,
  className,
}: {
  data: number[];
  splitIndex: number;
  label: string;
  className?: string;
}) {
  const max = Math.max(...data);
  const width = 280;
  const height = 96;
  const gap = 6;
  const barWidth = (width - gap * (data.length - 1)) / data.length;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      role="img"
      aria-label={label}
    >
      {data.map((value, i) => {
        const barHeight = Math.max((value / max) * (height - 8), 4);
        const x = i * (barWidth + gap);
        const y = height - barHeight;
        const isAfter = i >= splitIndex;
        return (
          <rect
            key={i}
            x={x}
            y={y}
            width={barWidth}
            height={barHeight}
            rx={3}
            fill={isAfter ? "var(--color-accent)" : "rgba(255,255,255,0.14)"}
          />
        );
      })}
    </svg>
  );
}
