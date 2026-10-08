import { Module } from '@nestjs/common';
import { HealthController } from './health/health.controller';
import { ModelsModule } from './models/models.module';

@Module({
  imports: [ModelsModule],
  controllers: [HealthController],
})
export class AppModule {}
