import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config/database';

export default class Skill extends Model {}

Skill.init(
  {
    name: {
      type: DataTypes.STRING(25)
    },
    expertize: {
      type: DataTypes.STRING(25)
    }
  },
  { sequelize, underscored: true, modelName: 'skill' }
);
