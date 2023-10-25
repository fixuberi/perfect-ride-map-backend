import { Module } from '@nestjs/common';

import { RideModule } from '@features/ride/ride.module';
import { UsersModule } from '@features/users/users.module';
import { AuthenticationModule } from './authentication/authentication.module';

@Module({
  imports: [UsersModule, AuthenticationModule, RideModule],
})
export class FeaturesModule {}
