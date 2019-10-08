import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config/database';
import Posts from '../models/postFeed';
import User from './user';

export default class Files extends Model {}
Files.init(
  {
    fieldname: {
      type: DataTypes.STRING
    },
    originalname: {
      type: DataTypes.STRING
    },
    mimetype: {
      type: DataTypes.STRING
    },
    destination: {
      type: DataTypes.STRING
    },
    filename: {
      type: DataTypes.STRING
    },
    path: {
      type: DataTypes.STRING
    },
    size: {
      type: DataTypes.INTEGER
    }
  },
  { sequelize }
);

Files.belongsTo(Posts);
Files.belongsTo(User);
