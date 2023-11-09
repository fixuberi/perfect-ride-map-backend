import { Injectable, NotFoundException } from '@nestjs/common';
import { FindOneOptions, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import User from '@features/users/user.entity';

import { CreateRideDto } from './dto/create-ride.dto';
import { UpdateRideDto } from './dto/update-ride.dto';
import { Ride } from './entities/ride.entity';
import { RideLocation } from './entities/ride-location.entity';

@Injectable()
export class RideService {
  constructor(
    @InjectRepository(Ride)
    private rideRepository: Repository<Ride>,
    @InjectRepository(RideLocation)
    private readonly rideLocationRepository: Repository<RideLocation>,
  ) {}

  async findAll(user: User): Promise<Ride[]> {
    return this.rideRepository.find({
      relations: ['locations'],
      where: { user },
    });
  }

  async findOne(id: number, user: User) {
    await this.verifyUserRide(id, user);

    return this.findOneById(id);
  }

  async create(createRideDto: CreateRideDto, user: User) {
    const { rideHistory, ...rideData } = createRideDto;

    const ride = this.rideRepository.create({ ...rideData, user });
    ride.locations = rideHistory.map((locationData) =>
      this.rideLocationRepository.create(locationData),
    );

    return this.rideRepository.save(ride);
  }

  async update(id: number, updateRideDto: UpdateRideDto, user: User) {
    await this.verifyUserRide(id, user);
    await this.rideRepository.update(id, updateRideDto);

    return this.findOneById(id);
  }

  async remove(id: number, user: User) {
    await this.verifyUserRide(id, user);

    return this.rideRepository.delete(id);
  }

  private async findOneById(id: number) {
    const options: FindOneOptions<Ride> = {
      where: { id },
      relations: ['locations'],
    };

    return this.rideRepository.findOne(options);
  }

  private async verifyUserRide(id: number, user: User): Promise<boolean> {
    const isRideExists = await this.rideRepository.exist({
      where: { id, user },
    });

    if (!isRideExists) {
      throw new NotFoundException('Ride not found or not owned by user');
    }

    return isRideExists;
  }
}
