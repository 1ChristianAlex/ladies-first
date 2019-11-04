import { Model, DataTypes } from 'sequelize';
import { JobsModel } from '../models';
import sequelize from '../../config/database';

export default class Company extends Model {}

Company.init(
  {
    name: {
      type: DataTypes.STRING(25)
    },
    lastname: {
      type: DataTypes.STRING(25)
    },
    email: {
      type: DataTypes.STRING(50)
    },
    cnpj: {
      type: DataTypes.STRING(20),
      unique: true
    },
    short_description: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    },
    personal_link: {
      type: DataTypes.STRING(50)
    },
    tel: {
      type: DataTypes.STRING(20)
    }
  },
  {
    sequelize,
    underscored: true,
    modelName: 'companys'
  }
);

Company.hasMany(JobsModel);
