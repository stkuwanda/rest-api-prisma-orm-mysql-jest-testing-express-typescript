import express, { Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import config from './config';
import v1 from './routes/v1';

export const createServer = () => {
  const app = express();

  app
    .disable('x-powered-by')
    .use(morgan('dev'))
    .use(express.urlencoded({ extended: true }))
    .use(express.json())
    .use(cors());

  app.get('/health', (req: Request, res: Response) => {
    res.status(200).json({
      ok: true,
      message: 'Server is healthy',
      env: config.env, // use process.env.NODE_ENV or default to 'unknown'
    });
  });

  // API routes
  app.use('/api/v1', v1); // Prefix all v1 routes with /api/v1

  return app;
};
