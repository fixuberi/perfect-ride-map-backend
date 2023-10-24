import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DatabaseModule } from '@common/database/database.module';
import { AppDevtoolsModule } from '@common/utils/app-devtools.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: './env/.env' }),
    DatabaseModule,
    AppDevtoolsModule,
  ],
})
export class CoreModule {}
