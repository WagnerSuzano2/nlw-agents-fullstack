import { z } from 'zod';

const envSchema = z.object({
  //NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.coerce.number().default(3333),
  DATABASE_URL: z.string().url().startsWith('postgresql://'),
  // JWT_SECRET: z.string().min(32).max(64),
  // API_KEY: z.string().optional(),
});

export const env = envSchema.parse(process.env);
