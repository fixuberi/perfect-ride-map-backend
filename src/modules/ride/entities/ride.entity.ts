import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { RideLocation } from './ride-location.entity';
import User from '@features/users/user.entity';

@Entity()
export class Ride {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamptz' })
  startDate: Date;

  @Column({ type: 'timestamptz' })
  endDate: Date;

  @OneToMany(() => RideLocation, (location) => location.ride, { cascade: true })
  locations: RideLocation[];

  @ManyToOne(() => User, (user) => user.rides)
  user: User;
}
