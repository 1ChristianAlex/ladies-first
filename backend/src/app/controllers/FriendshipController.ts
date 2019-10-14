import FollowPersonModel from '../models/followPerson';
import UserModel from '../models/user';

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
      let followListQuery = await UserModel.findAll({
        where: { id: userId },
        include: [
          {
            model: FollowPersonModel
          }
        ]
      }).then(async users => await users.map(async u => await u.toJSON()));
      console.log(followListQuery.id);

      return followListQuery;
    } catch (error) {
      return error;
    }
  }
}
