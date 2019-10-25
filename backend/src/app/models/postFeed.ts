import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config/database';
import Imagens from './imagens';
import Files from './files';

export default class PostFeed extends Model {}

PostFeed.init(
  {
    title: {
      type: DataTypes.STRING(150)
    },
    category: {
      type: DataTypes.STRING(150)
    },
    content: {
      type: DataTypes.TEXT
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
PostFeed.hasMany(Imagens);
