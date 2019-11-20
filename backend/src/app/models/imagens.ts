import { Model, DataTypes } from "sequelize";
import sequelize from "../../config/database";

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
    small_image_path: {
      type: DataTypes.STRING
    },
    url: {
      type: DataTypes.STRING
    },
    size: {
      type: DataTypes.INTEGER
    }
  },
  { sequelize, underscored: true, modelName: "imagens" }
);
