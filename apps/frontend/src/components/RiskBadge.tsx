import type { Model } from "api/models";

const COLORS: Record<Model["riskLevel"], string> = {
  low: "#2e7d32",
  medium: "#ed6c02",
  high: "#d32f2f",
};

export function RiskBadge({ riskLevel }: { riskLevel: Model["riskLevel"] }) {
  return (
    <span style={{ color: "white", background: COLORS[riskLevel], padding: "2px 8px", borderRadius: 4 }}>
      {riskLevel}
    </span>
  );
}
