export type RiskLevel = 'low' | 'medium' | 'high';

export interface Model {
  id: number;
  name: string;
  riskLevel: RiskLevel;
}
