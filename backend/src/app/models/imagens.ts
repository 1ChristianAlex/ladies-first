import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config/database';

export default class Imagens extends Model {}
Imagens.init(
  {
    fieldname: {
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
    smallImagePath: {
      type: DataTypes.STRING
    },
    size: {
      type: DataTypes.INTEGER
    }
  },
  { sequelize, underscored: true, modelName: 'imagens' }
);
