import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config/database';

export default class Skills extends Model {}

Skills.init(
  {
    name: {
      type: DataTypes.STRING
    },
    expertize: {
      type: DataTypes.STRING
    }
  },
  { sequelize }
);
