import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config/database';
import jobs from './jobs';

export default class Company extends Model {}

Company.init(
  {
    name: {
      type: DataTypes.STRING
    },
    lastname: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    birthday: {
      type: DataTypes.STRING
    },
    cnpj: {
      type: DataTypes.STRING
    },
    short_description: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    personal_link: {
      type: DataTypes.STRING
    },
    tel: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize
  }
);

Company.belongsTo(jobs);
