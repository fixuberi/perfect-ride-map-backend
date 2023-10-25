import { Module } from '@nestjs/common';
import { DevtoolsModule } from '@nestjs/devtools-integration';

@Module({
  imports: [
    DevtoolsModule.register({
      port: 8222,
      http: process.env.NODE_ENV !== 'production',
    }),
  ],
})
export class AppDevtoolsModule {}
