import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config/database';
import User from './user';

export default class Skill extends Model {}

Skill.init(
  {
    name: {
      type: DataTypes.STRING
    },
    expertize: {
      type: DataTypes.STRING
    }
  },
  { sequelize, underscored: true, modelName: 'skill' }
);
