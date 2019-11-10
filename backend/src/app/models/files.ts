import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config/database';

export default class File extends Model {}
File.init(
  {
    fieldname: {
      type: DataTypes.STRING
    },
    originalname: {
      type: DataTypes.STRING
    },
    mimetype: {
      type: DataTypes.STRING
    },
    destination: {
      type: DataTypes.STRING
    },
    filename: {
      type: DataTypes.STRING
    },
    path: {
      type: DataTypes.STRING
    },
    size: {
      type: DataTypes.INTEGER
    },
    url: {
      type: DataTypes.STRING
    }
  },
  { sequelize, underscored: true, modelName: 'files' }
);
