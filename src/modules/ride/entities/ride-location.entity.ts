import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Ride } from './ride.entity';

@Entity()
export class RideLocation {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'decimal', precision: 10, scale: 6 })
  longitude: number;

  @Column({ type: 'decimal', precision: 10, scale: 6 })
  latitude: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  altitude: number;

  @Column({ type: 'timestamptz' })
  timestamp: Date;

  @Column({ type: 'decimal', precision: 6, scale: 2, nullable: true })
  speed: number;

  @Column({ type: 'integer', nullable: true })
  heartRate: number | null;

  @ManyToOne(() => Ride, (ride) => ride.locations)
  ride: Ride;
}
