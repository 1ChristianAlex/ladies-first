import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config/database';

export class User extends Model {}

User.init(
  {
    name: {
      type: DataTypes.STRING
    },
    lastname: {
      type: DataTypes.STRING
    },
    userName: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    dayBirth: {
      type: DataTypes.STRING
    },
    typePerson: {
      type: DataTypes.STRING
    },
    currentCompany: {
      type: DataTypes.STRING
    }
  },
  { sequelize, modelName: 'users' }
);
