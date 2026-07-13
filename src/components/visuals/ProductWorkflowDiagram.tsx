const nodes = [
  { label: "Trigger", x: 20 },
  { label: "Segment", x: 175 },
  { label: "Personalize", x: 330 },
  { label: "Send", x: 485 },
  { label: "Log", x: 610 },
];

export default function ProductWorkflowDiagram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 660 140" fill="none" aria-hidden="true" className={className}>
      <rect width="660" height="140" rx="16" fill="var(--color-surface)" />
      {nodes.slice(0, -1).map((node, i) => (
        <line
          key={node.label}
          x1={node.x + 60}
          y1="70"
          x2={nodes[i + 1].x}
          y2="70"
          stroke="var(--color-border-strong)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
      ))}
      {nodes.map((node, i) => (
        <g key={node.label}>
          <rect
            x={node.x}
            y="45"
            width="60"
            height="50"
            rx="10"
            fill={i === 0 ? "var(--color-accent-soft)" : "var(--color-background-elevated)"}
            stroke={i === 0 ? "var(--color-accent)" : "var(--color-border-strong)"}
            strokeWidth="1.5"
          />
          <text
            x={node.x + 30}
            y="120"
            textAnchor="middle"
            fontSize="12"
            fill="var(--color-foreground-muted)"
          >
            {node.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
