import express from 'express';
import cors from 'cors';
import { routes } from './routes';
import sequelize from '../config/database';
class Server {
  public Express: express.Application;

  constructor() {
    this.Init();
  }
  private Database() {
    sequelize.sync();
  }
  private Middleware() {
    this.Express.use(express.json());
    this.Express.use(cors());
    this.Express.use(routes);
  }
  private Init() {
    this.Database();
    this.Express = express();
    this.Middleware();
  }
}
export default new Server().Express;
