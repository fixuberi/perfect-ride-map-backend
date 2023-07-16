import { Injectable } from '@nestjs/common';
import { CreateRideDto } from './dto/create-ride.dto';
import { UpdateRideDto } from './dto/update-ride.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Ride } from './entities/ride.entity';
import { FindOneOptions, Repository } from 'typeorm';
import { RideLocation } from './entities/ride-location.entity';

@Injectable()
export class RideService {
  constructor(
    @InjectRepository(Ride)
    private rideRepository: Repository<Ride>,
    @InjectRepository(RideLocation)
    private readonly rideLocationRepository: Repository<RideLocation>,
  ) {}

  async create(createRideDto: CreateRideDto) {
    const { rideHistory, ...rideData } = createRideDto;

    const ride = this.rideRepository.create(rideData);
    ride.locations = rideHistory.map((locationData) =>
      this.rideLocationRepository.create(locationData),
    );

    return this.rideRepository.save(ride);
  }

  async findAll(): Promise<Ride[]> {
    return this.rideRepository.find({
      relations: ['locations'],
    });
  }

  async findOne(id: number) {
    const options: FindOneOptions<Ride> = {
      where: { id },
      relations: ['locations'],
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
