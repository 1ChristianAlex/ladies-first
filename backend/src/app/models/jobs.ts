import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config/database';

export default class Jobs extends Model {}

Jobs.init(
  {
    title: {
      type: DataTypes.STRING(50)
    },
    description: {
      type: DataTypes.STRING
    },
    job_type: {
      type: DataTypes.STRING(50)
    },
    industry: {
      type: DataTypes.STRING(25)
    },
    function: {
      type: DataTypes.STRING(25)
    },
    categorie: {
      type: DataTypes.STRING(25)
    },
    qnty: {
      type: DataTypes.INTEGER
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  },
  {
    sequelize,
    underscored: true,
    modelName: 'jobs'
  }
);
