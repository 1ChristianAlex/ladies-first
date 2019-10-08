import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config/database';

export default class Jobs extends Model {}

Jobs.init(
  {
    title: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    job_type: {
      type: DataTypes.STRING
    },
    industry: {
      type: DataTypes.STRING
    },
    funciton: {
      type: DataTypes.STRING
    },
    image: {
      type: DataTypes.STRING
    },
    categorie: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    underscored: true,
    modelName: 'jobs'
  }
);
