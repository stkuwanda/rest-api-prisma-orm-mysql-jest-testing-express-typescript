import express, { Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';

export const createServer = () => {
  const app = express();

  app
    .disable('x-powered-by')
    .use(morgan('dev'))
    .use(express.urlencoded({ extended: true }))
    .use(express.json())
    .use(cors());

  app.get('/health', (req: Request, res: Response) => {
    res.status(200).json({ ok: true, message: 'Server is healthy' });
  });

  return app;
};
