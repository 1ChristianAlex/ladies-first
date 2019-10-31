import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config/database';

export default class JobsSubscription extends Model {}
JobsSubscription.init(
  {
    jobId: {
      type: DataTypes.INTEGER
    }
  },
  { sequelize, modelName: 'Jobs_Sub' }
);
