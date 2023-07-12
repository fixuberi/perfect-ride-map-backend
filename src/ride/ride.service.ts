import { Injectable } from '@nestjs/common';
import { CreateRideDto } from './dto/create-ride.dto';
import { UpdateRideDto } from './dto/update-ride.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Ride } from './entities/ride.entity';
import { FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class RideService {
  constructor(
    @InjectRepository(Ride)
    private rideRepository: Repository<Ride>,
  ) {}

  create(createRideDto: CreateRideDto) {
    return this.rideRepository.save(createRideDto);
  }

  async findAll(): Promise<Ride[]> {
    return this.rideRepository.find();
  }

  async findOne(id: number) {
    const options: FindOneOptions<Ride> = {
      where: { id },
    };

    return this.rideRepository.findOne(options);
  }

  async update(id: number, updateRideDto: UpdateRideDto) {
    await this.rideRepository.update(id, updateRideDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    return this.rideRepository.delete(id);
  }
}
