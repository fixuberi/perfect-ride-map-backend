import { Module } from '@nestjs/common';
import { RideService } from './ride.service';
import { RideController } from './ride.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ride } from './entities/ride.entity';
import { RideLocation } from './entities/ride-location.entity';

@Module({
  controllers: [RideController],
  imports: [TypeOrmModule.forFeature([Ride, RideLocation])],
  providers: [RideService],
})
export class RideModule {}
