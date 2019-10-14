import UserModel from '../models/user';
import ImagesModel from '../models/imagens';
import { IUser } from '../types/IUser';
import Crypfy from '../resources/cryptfy';
import { User } from '../classes/User';
import { FollowPersonController } from './FriendshipController';

export default class UserController {
  public async CreateUser(user: IUser) {
    try {
      let { password } = user;
      let crypfyPassword = new Crypfy(password);

      let queryResult = await UserModel.create({ ...user, password: crypfyPassword.CreateHash() }).then(result => result.toJSON());
      return queryResult;
    } catch (error) {
      return { mensage: error, status: 400 };
    }
  }

  public async UpdateUser(id, userNewInfo, oldUser) {
    let updateResult = await UserModel.update(
      { ...oldUser, userNewInfo },
      {
        where: {
          id
        }
      }
    );

    return updateResult;
  }

  public async GetUser(id: string) {
    let follow = new FollowPersonController();
    let folowList = await follow.GetFollowList(id);

    let userQuery = UserModel.findOne({
      where: {
        id
      },
      include: [
        {
          model: ImagesModel,
          limit: 1
        }
      ]
    }).then(result => result.toJSON());

    let [user, follow_people] = await Promise.all([userQuery]);
    return { ...user, follow_people };
  }

  public async DeleteUser(id: string) {
    let deleteResult = UserModel.destroy({
      where: {
        id
      }
    });
    return { mensage: `User Delete ${deleteResult}` };
  }
}
