import express from 'express';
import { connectToDatabase } from './config/database/dbClient';
import applyServerConfig from './config/server';

function startServer() {
  connectToDatabase()
    .then(async () => {
      const app = express();
      applyServerConfig(app);

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
