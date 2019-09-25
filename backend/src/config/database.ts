import { Sequelize } from 'sequelize';
import localEnv from './local';

const sequelize = new Sequelize({
  username: localEnv.DB_USER,
  password: localEnv.DB_PW,
  database: localEnv.DB_NAME,
  host: localEnv.HOSTNAME,
  dialect: 'mysql',
  logging: true
});

export default sequelize;
