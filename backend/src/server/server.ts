import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import envLocal from '../config/local';
import { routes } from './routes';

class Server {
  public express: express.Application;

  constructor() {
    this.init();
  }
  private database() {
    mongoose.connect(`mongodb://${envLocal.HOSTNAME}:${envLocal.DB_PORT}/${envLocal.DB_NAME}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true
      // auth: {
      //   user: envLocal.DB_USER,
      //   password: envLocal.DB_PW
      // }
    });
  }
  private middleware() {
    this.express.use(express.json());
    this.express.use(cors());
    this.express.use(routes);
  }
  private init() {
    this.database();
    this.express = express();
    this.middleware();
  }
}
export default new Server().express;
