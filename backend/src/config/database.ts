import { Sequelize } from 'sequelize';
import localEnv from './local';

const sequelize = new Sequelize({
  username: localEnv.DB_USER,
  password: localEnv.DB_PW,
  database: localEnv.DB_NAME,
  host: localEnv.DB_HOST,
  dialect: 'mysql',
  logging: false
});

export default sequelize;
