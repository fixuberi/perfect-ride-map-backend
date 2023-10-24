import { Module } from '@nestjs/common';

import { RideModule } from '@features/ride/ride.module';
import { UsersModule } from '@features/users/users.module';

@Module({
  imports: [UsersModule, RideModule],
})
export class FeaturesModule {}
