import { defineConfig } from '@prisma/config';
import * as dotenv from 'dotenv';

// Carga las variables de entorno del archivo .env
dotenv.config();

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
    // Registramos el comando seed de forma compatible con Node/TS en Prisma 7
    seed: 'ts-node prisma/seed.ts',
  },
  datasource: {
    url: process.env.DATABASE_URL,
  },
});