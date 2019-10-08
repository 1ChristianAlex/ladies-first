import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config/database';
import User from './user';

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
  { sequelize }
);

PostFeed.belongsTo(User);
