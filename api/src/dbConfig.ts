import dotenv from 'dotenv';

dotenv.config();

export const dbConfig = {
  host: process.env.API_RAILWAY_HOST,
  user: process.env.API_RAILWAY_USER,
  password: process.env.API_RAILWAY_PASSWORD,
  database: process.env.API_RAILWAY_DATABASE,
  port: Number(process.env.API_RAILWAY_PORT),
};
