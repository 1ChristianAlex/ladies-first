import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config/database';

export default class PostSocial extends Model {}

PostSocial.init(
  {
    image_path: {
      type: DataTypes.STRING
    },
    content: {
      type: DataTypes.STRING
    },
    likes: {
      type: DataTypes.INTEGER
    },
    shares: {
      type: DataTypes.INTEGER
    }
  },
  { sequelize }
);
