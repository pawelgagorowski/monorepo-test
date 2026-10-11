import { ModelStatusCode } from './enums/model-status-code.enum';

export type RiskLevel = 'low' | 'medium' | 'high';

export interface Model {
  id: number;
  name: string;
  riskLevel: RiskLevel;
  status: ModelStatusCode;
}
