import { UserModel, ImagesModel } from '../../models';
import { IUser } from '../../types/IUser';
import Crypfy from '../../resources/cryptfy';
import { ImageController } from '../Files/ImageController';
import { IFIle } from '../../types/IFile';

export default class UserController extends ImageController {
  public async CreateUser(user: IUser, file: IFIle) {
    try {
      let { password } = user;
      let crypfyPassword = new Crypfy(password);

      let queryResult: IUser = await UserModel.create({ ...user, password: crypfyPassword.CreateHash() }).then(result => result.toJSON());
      await this.SaveFile(file, queryResult.id);

      return { mesage: `Successfully created user ${queryResult.name}` };
    } catch (error) {
      throw error;
    }
  }

  public async UpdateUser(id, userNewInfo, profile: IFIle = null) {
    try {
      let updateResult = UserModel.update(
        { ...userNewInfo },
        {
          where: {
            id
          }
        }
      );
      if (profile) {
        let updateProfileImage = this.UpdateImage(profile, id);
        return await Promise.all([updateResult, updateProfileImage]);
      }
      return await updateResult;
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
