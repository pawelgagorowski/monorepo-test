import { RequestStatus } from './enums/request-status.enum';

export interface AdvisorRequest {
  id: number;
  modelId: number;
  status: RequestStatus;
  requestDate: string;
}
