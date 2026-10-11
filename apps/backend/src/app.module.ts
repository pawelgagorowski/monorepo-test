import { Module } from '@nestjs/common';
import { HealthController } from './health/health.controller';
import { ModelsModule } from './models/models.module';
import { RequestsModule } from './requests/requests.module';

@Module({
  imports: [ModelsModule, RequestsModule],
  controllers: [HealthController],
})
export class AppModule {}
