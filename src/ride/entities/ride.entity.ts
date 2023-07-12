import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class Ride {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: string;
}
