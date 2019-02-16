import { env } from '@app/config/environment';

import compression from 'compression';
import cors from 'cors';
import express from 'express';

import passport from 'passport';
import './passport';

import {
  authRouter,
  maintenanceRouter,
  todoRouter,
  userRouter
} from './routes';

const app = express();

const startApp = async () => {
  app.use(cors());
  app.use(express.json());
  app.use(compression());
  app.use(passport.initialize());

  app.use('/api/maintenance', maintenanceRouter);
  app.use('/api/users', userRouter);
  app.use('/api/todos', todoRouter);
  app.use('/api', authRouter);

  app.listen(env.PORT, () => {
    // tslint:disable-next-line:no-console
    console.info(`Server is now up @ ${env.HOST}:${env.PORT}`);
  });
};
startApp();
