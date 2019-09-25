import { Sequelize } from 'sequelize';
import env from './local';

const sequelize = new Sequelize({
  username: env.DB_USER,
  password: env.DB_PW,
  database: env.DB_NAME,
  host: env.HOSTNAME,
  dialect: 'mysql',
  logging: true
});

export default sequelize;
