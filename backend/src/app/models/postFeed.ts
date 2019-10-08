import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config/database';
import Files from './files';

export default class PostFeed extends Model {}

PostFeed.init(
  {
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
  { sequelize, underscored: true, modelName: 'posts' }
);

PostFeed.hasMany(Files);
