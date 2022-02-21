import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectToDatabase } from './config/database/dbClient';
import { routes } from './controllers';

function startServer() {
  dotenv.config();
  connectToDatabase()
    .then(async () => {
      const app = express();

      app.use(
        cors({
          credentials: true,
          origin: process.env.ACCESS_CONTROL_ALLOW_ORIGIN,
        })
      );

      app.use(routes());

      app
        .listen(process.env.PORT, () => {
          console.log(`Server listening on port: ${process.env.PORT}`);
        })
        .on('error', err => {
          console.error(err);
          process.exit(1);
        });
    })
    .catch(error => console.error('Data Access Error : %o', error));
}

startServer();
