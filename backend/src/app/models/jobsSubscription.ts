import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config/database';
import { UserModel, JobsModel } from '.';

export default class JobsSubscription extends Model {}
JobsSubscription.init(
  {
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  },
  { sequelize, underscored: true, modelName: 'jobsSub' }
);
UserModel.hasMany(JobsSubscription);
JobsModel.hasMany(JobsSubscription);
