import { apiGet } from "api/client";
import type { ModelStatusCode } from "api/enums";

export type Model = {
  id: number;
  name: string;
  riskLevel: "low" | "medium" | "high";
  status: ModelStatusCode;
};

export const getModels = () => apiGet<Model[]>("/models");

export const getModel = (id: number) => apiGet<Model>(`/models/${id}`);
