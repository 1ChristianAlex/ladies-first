import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config/database';

export default class Education extends Model {}

Education.init(
  {
    entity_name: {
      type: DataTypes.STRING(25)
    },
    entity_location: {
      type: DataTypes.STRING
    },
    course_name: {
      type: DataTypes.STRING(25)
    },
    course_init: {
      type: DataTypes.DATE
    },
    course_final: {
      type: DataTypes.DATE
    }
  },
  { sequelize, modelName: 'educations', underscored: true }
);
