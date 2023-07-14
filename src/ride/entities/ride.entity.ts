import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from 'typeorm';
import { RideLocation } from './ride-location.entity';

@Entity()
export class Ride {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp' })
  startDate: string;

  @Column({ type: 'timestamp' })
  endDate: string;

  @OneToMany(() => RideLocation, (location) => location.ride, { cascade: true })
  locations: RideLocation[];
}
