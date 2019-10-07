import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config/database';

export default class Files extends Model {}
Files.init(
  {
    name: {
      type: DataTypes.STRING
    },
    path: {
      type: DataTypes.STRING
    },
    size: {
      type: DataTypes.STRING
    }
  },
  { sequelize }
);
