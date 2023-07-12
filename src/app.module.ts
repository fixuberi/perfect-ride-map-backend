import { DevtoolsModule } from '@nestjs/devtools-integration';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RideModule } from './ride/ride.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import configFabric from 'typeorm.config';
import { Ride } from './ride/entities/ride.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(configFabric([Ride])),
    DevtoolsModule.register({
      port: 8222,
      http: process.env.NODE_ENV !== 'production',
    }),
    RideModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
