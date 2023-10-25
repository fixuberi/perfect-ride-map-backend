import { NestFactory, PartialGraphHost } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { writeFileSync } from 'fs';
import cookieParser from 'cookie-parser';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    snapshot: true,
    abortOnError: false,
    logger: console,
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
