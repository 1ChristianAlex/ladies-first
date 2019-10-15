import FollowPersonModel from '../models/followPerson';
import UserModel from '../models/user';
import { User } from '../classes/User';

export class FollowPersonController {
  public async NewFollow(followId, userId) {
    try {
      let followQuery = await FollowPersonModel.create({ followId, userId });
      return followQuery;
    } catch (error) {
      return error;
    }
  }

  public async RemoveFollow(followId, userId) {
    try {
      let followQuery = await FollowPersonModel.destroy({
        where: { userId, followId }
      });
      return followQuery;
    } catch (error) {
      return error;
    }
  }
  public async GetFollowList(userId) {
    try {
      let followListQuery = await FollowPersonModel.findAll({
        where: { userId }
      }).map(follows => follows.toJSON());

      let userFollows = followListQuery.map(async (followUser: any) => {
        if (followUser.followId) {
          return UserModel.findByPk(followUser.followId).then(follower => {
            if (follower) {
              return new User(follower.toJSON()).SimpleInfo();
            }
          });
        } else {
          return false;
        }
      });
      let listOfFollowers = await Promise.all(userFollows);
      let filterList = listOfFollowers.filter(user => user != null);

      return filterList;
    } catch (error) {
      return error;
    }
  }
}
