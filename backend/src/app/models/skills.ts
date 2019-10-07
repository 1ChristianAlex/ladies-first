import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config/database';
import User from './user';

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

Skills.belongsTo(User);
