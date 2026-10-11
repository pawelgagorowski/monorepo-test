import { apiGet } from "api/client";
import type { RequestStatus } from "api/enums";

export type AdvisorRequest = {
  id: number;
  modelId: number;
  status: RequestStatus;
  requestDate: string;
};

export const getRequests = () => apiGet<AdvisorRequest[]>("/requests");
