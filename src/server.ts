import dotenv from 'dotenv';
import express, { Request, Response, NextFunction } from 'express';

import './database';
import 'express-async-errors';
import cors from 'cors';

import routes from './routes';
import AppError from './errors/AppError';
import uploadConfig from './config/upload';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);

app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  return res.status(500).json({
    status: 'Error',
    message: `Internal server error - ${err.message}`,
  });
});

dotenv.config();

app.listen(3333, () => console.log('Server is running!'));
