import { Model, DataTypes } from "sequelize";
import sequelize from "../../config/database";

import {
  PostsModel,
  FilesModel,
  ImagesModel,
  JobsModel,
  SkillsModel,
  CompanyModel,
  EducationModel,
  FollowModel
} from "../models";

export default class User extends Model {}

User.init(
  {
    name: {
      type: DataTypes.STRING(25)
    },
    lastname: {
      type: DataTypes.STRING(25)
    },
    email: {
      type: DataTypes.STRING(50),
      unique: true
    },
    password: {
      type: DataTypes.STRING
    },
    birthday: {
      type: DataTypes.DATE
    },
    cpf: {
      type: DataTypes.STRING(15),
      unique: true
    },
    current_company: {
      type: DataTypes.STRING(50)
    },
    short_description: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    },
    personal_link: {
      type: DataTypes.STRING
    },
    tel: {
      type: DataTypes.STRING(20)
    }
  },
  { sequelize, underscored: true, modelName: "users" }
);

User.hasMany(PostsModel);
User.hasMany(FilesModel);
User.hasMany(ImagesModel);
User.hasMany(JobsModel);
User.hasMany(SkillsModel);
User.hasMany(CompanyModel);
User.hasMany(EducationModel);
User.hasMany(FollowModel);
// lista de educação
// lista de skill
