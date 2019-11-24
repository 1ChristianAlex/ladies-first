import { Model, DataTypes } from "sequelize";
import sequelize from "../../config/database";
import { UserModel } from ".";

export default class JobsSubscription extends Model {}
JobsSubscription.init(
  {
    jobId: {
      type: DataTypes.INTEGER
    }
  },
  { sequelize, underscored: true, modelName: "jobsSub" }
);
UserModel.hasMany(JobsSubscription);
