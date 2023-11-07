import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DatabaseModule } from '@common/database/database.module';
import { AppDevtoolsModule } from '@common/utils/app-devtools.module';
import { HealthCheckController } from './utils/health-check.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: 'src/env/.env.prod',
      ignoreEnvFile: process.env.NODE_ENV === 'production',
    }),
    DatabaseModule,
    AppDevtoolsModule,
  ],
  controllers: [HealthCheckController],
})
export class CoreModule {}
