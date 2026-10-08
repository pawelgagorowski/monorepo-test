import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from './model.entity';

@Injectable()
export class ModelsService {
  private readonly models: Model[] = [
    { id: 1, name: 'Conservative Income', riskLevel: 'low' },
    { id: 2, name: 'Balanced Growth', riskLevel: 'medium' },
    { id: 3, name: 'Aggressive Equity', riskLevel: 'high' },
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
    return model;
  }
}
