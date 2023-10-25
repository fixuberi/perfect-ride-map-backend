import { NestFactory, PartialGraphHost } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { writeFileSync } from 'fs';

import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    snapshot: true,
    abortOnError: false,
  });

  app.use(cookieParser());
  app.enableCors();
  app.setGlobalPrefix('api');
  const configService = app.get(ConfigService);
  const PORT = configService.get<number>('PORT') || 3000;

  await app.listen(PORT);
}

bootstrap().catch((err) => {
  writeFileSync('graph.json', PartialGraphHost.toString() ?? '');
});
