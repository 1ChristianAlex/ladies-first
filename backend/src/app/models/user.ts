import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config/database';
import Posts from './postFeed';

export default class User extends Model {}

User.init(
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
    cpf: {
      type: DataTypes.STRING
    },
    current_company: {
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
  { sequelize }
);

// lista de educação
// lista de skill
