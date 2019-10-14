import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config/database';
import Posts from './postFeed';
import Files from './files';
import Jobs from './jobs';
import Skills from './skills';
import Company from './company';
import Education from './education';
import Imagens from './imagens';
import FollowPerson from './followPerson';

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
  { sequelize, underscored: true, modelName: 'users' }
);

User.hasMany(Posts);
User.hasMany(Files);
User.hasMany(Imagens);
User.hasMany(Jobs);
User.hasMany(Skills);
User.hasMany(Company);
User.hasMany(Education);
User.hasMany(FollowPerson);

// lista de educação
// lista de skill
