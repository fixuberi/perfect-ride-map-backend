import { DevtoolsModule } from '@nestjs/devtools-integration';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { RideModule } from './api/ride/ride.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
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
