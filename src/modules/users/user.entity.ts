import { Ride } from '@features/ride/entities/ride.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class User {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column({ unique: true })
  public email: string;

  @Column()
  public name: string;

  @Column({ select: false })
  public password: string;

  @OneToMany(() => Ride, (ride) => ride.user)
  rides: Ride[];
}

export default User;
