import { UserModel, ImagesModel } from '../../models';
import { IUser } from '../../types/IUser';
import Crypfy from '../../resources/cryptfy';

export default class UserController {
  public async CreateUser(user: IUser) {
    try {
      let { password } = user;
      let crypfyPassword = new Crypfy(password);

      let queryResult = await UserModel.create({ ...user, password: crypfyPassword.CreateHash() }).then(result => result.toJSON());
      return queryResult;
    } catch (error) {
      throw error;
    }
  }

  public async UpdateUser(id, userNewInfo, oldUser) {
    try {
      let updateResult = await UserModel.update(
        { ...oldUser, userNewInfo },
        {
          where: {
            id
          }
        }
      );

      return updateResult;
    } catch (error) {
      throw error;
    }
  }

  public async GetUser(id: string) {
    try {
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

      let user = await userQuery;
      return { ...user };
    } catch (error) {
      throw error;
    }
  }

  public async DeleteUser(id: string) {
    try {
      let deleteResult = UserModel.destroy({
        where: {
          id
        }
      });
      return { mensage: `User Delete ${deleteResult}` };
    } catch (error) {
      throw error;
    }
  }
}
