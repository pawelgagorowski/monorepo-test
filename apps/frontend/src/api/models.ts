import { apiGet } from "api/client";

export type Model = {
  id: number;
  name: string;
  riskLevel: "low" | "medium" | "high";
};

export const getModels = () => apiGet<Model[]>("/models");

export const getModel = (id: number) => apiGet<Model>(`/models/${id}`);
