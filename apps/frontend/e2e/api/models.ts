import type { APIRequestContext } from "@playwright/test";

const API_URL = process.env.E2E_API_URL ?? "http://localhost:3000";

export type ModelResponse = {
  id: number;
  name: string;
  riskLevel: string;
  status: "Active" | "Inactive" | "Draft";
};

export async function findModelsByName(request: APIRequestContext, name: string): Promise<ModelResponse[]> {
  const response = await request.get(`${API_URL}/models`, { params: { name } });
  return response.json();
}
