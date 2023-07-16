import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from 'typeorm';
import { RideLocation } from './ride-location.entity';

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
}
