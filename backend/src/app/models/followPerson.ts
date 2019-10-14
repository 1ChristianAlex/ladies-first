import sequelize from '../../config/database';
import { Model, DataTypes } from 'sequelize';

export default class FollowPerson extends Model {}
FollowPerson.init(
  {
    followId: {
      type: DataTypes.INTEGER,
      unique: true
    }
  },
  { sequelize, modelName: 'follow_person', underscored: true }
);
