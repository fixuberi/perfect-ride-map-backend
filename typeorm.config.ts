import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import * as fs from 'fs';

config({ path: './src/env/.env.prod' });

export default new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['src/migrations/*{.ts,.js}'],
  ssl: {
    rejectUnauthorized: true,
    ca: fs.readFileSync('./global-bundle.pem').toString(),
  },
});
