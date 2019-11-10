import { UserModel, ImagesModel } from '../../models';
import { IUser, IFile } from '../../types/';
import { DateParser } from '../../classes';
import Crypfy from '../../resources/cryptfy';
import { FileSystem, JsonWebToken } from '../../resources/';
import { ImageController } from '../Files/ImageController';

export default class UserController extends ImageController {
  public async CreateUser(user: IUser, file: IFile) {
    try {
      let { password, birthday } = user;
      let crypfyPassword = new Crypfy(password);
      let data = new DateParser(birthday).ParseDate();

      let queryResult: IUser = await UserModel.create({
        ...user,
        birthday: data,
        password: crypfyPassword.CreateHash()
      }).then(result => result.toJSON());
      await this.SaveFile(file, queryResult.id);

      return { mesage: `Successfully user created ${queryResult.name}`, user: queryResult };
    } catch (error) {
      await new FileSystem().DeleteFile(file.path);

      throw error;
    }
  }

  public async UpdateUser(id, userNewInfo: IUser, profile: IFile = null) {
    try {
      let { birthday } = userNewInfo;
      let newDate = birthday
        ? (birthday = new DateParser(birthday).ParseDate())
        : userNewInfo.birthday;

      let updateResult = UserModel.update(
        { ...userNewInfo, birthday: newDate },
        {
          where: {
            id
          }
        }
      );
      if (profile) {
        this.UpdateImage(profile, id);
        return { mensage: 'User successfully updated' };
      }
      return { mensage: 'User successfully updated' };
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
            limit: 1,
            attributes: ['url']
          }
        ]
      }).then(result => {
        let res: any = result.toJSON();
        let [url] = res.imagens;
        delete res.imagens;
        return {
          ...res,
          ...url
        };
      });

      let user = await userQuery;
      return { ...user };
    } catch (error) {
      throw error;
    }
  }
  public async GetCurrentUser(token: string) {
    try {
      const jwt = new JsonWebToken();
      let tkJson: any = jwt.VerifyToken(token);
      let user = await this.GetUser(tkJson.id);
      return user;
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
