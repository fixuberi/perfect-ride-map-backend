import { Module } from '@nestjs/common';

import { CoreModule } from '@common/core.module';
import { FeaturesModule } from '@features/features.module';

@Module({
  imports: [CoreModule, FeaturesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
