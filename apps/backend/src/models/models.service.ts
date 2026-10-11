import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { ModelStatusCode } from './enums/model-status-code.enum';
import { Model } from './model.entity';

@Injectable()
export class ModelsService {
  private readonly models: Model[] = [
    { id: 1, name: 'Conservative Income', riskLevel: 'low', status: ModelStatusCode.ACTIVE },
    { id: 2, name: 'Balanced Growth', riskLevel: 'medium', status: ModelStatusCode.APPROVED },
    { id: 3, name: 'Aggressive Equity', riskLevel: 'high', status: ModelStatusCode.DRAFT },
  ];

  findAll(search?: string): Model[] {
    if (!search) {
      return this.models;
    }
    const needle = search.toLowerCase();
    return this.models.filter((model) => model.name.toLowerCase().includes(needle));
  }

  findOne(id: number): Model {
    const model = this.models.find((candidate) => candidate.id === id);
    if (!model) {
      throw new NotFoundException(`Model ${id} not found`);
    }
    if (model.status === ModelStatusCode.DRAFT) {
      throw new ForbiddenException('Draft models are visible only to their owner');
    }
    return model;
  }
}
