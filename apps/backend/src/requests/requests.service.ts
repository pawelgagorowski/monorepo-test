import { Injectable } from '@nestjs/common';
import { RequestStatus } from './enums/request-status.enum';
import { AdvisorRequest } from './request.entity';

@Injectable()
export class RequestsService {
  private readonly requests: AdvisorRequest[] = [
    { id: 1, modelId: 1, status: RequestStatus.ASSIGNED, requestDate: '2026-10-01' },
    { id: 2, modelId: 2, status: RequestStatus.IN_PROCESS, requestDate: '2026-10-05' },
    { id: 3, modelId: 1, status: RequestStatus.REJECTED, requestDate: '2026-09-20' },
  ];

  findAll(): AdvisorRequest[] {
    return this.requests;
  }
}
