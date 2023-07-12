import { Module } from '@nestjs/common';
import { RideService } from './ride.service';
import { RideController } from './ride.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ride } from './entities/ride.entity';

@Module({
  controllers: [RideController],
  imports: [TypeOrmModule.forFeature([Ride])],
  providers: [RideService],
})
export class RideModule {}
