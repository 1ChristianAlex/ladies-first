import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config/database';

export default class Education extends Model {}

Education.init(
  {
    entity_name: {
      type: DataTypes.STRING
    },
    entity_location: {
      type: DataTypes.STRING
    },
    course_name: {
      type: DataTypes.STRING
    },
    course_init: {
      type: DataTypes.STRING
    },
    course_final: {
      type: DataTypes.STRING
    }
  },
  { sequelize, modelName: 'education' }
);
