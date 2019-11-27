import { UserModel, ImagesModel } from '../../models';
import { IUser, IFile } from '../../types/';
import { DateParser } from '../../classes';
import Crypfy from '../../resources/cryptfy';
import { FileSystem, JsonWebToken } from '../../resources/';
import { ImageController } from '../Files/ImageController';
import { User } from '../../classes/';
import PostFeed from '../../models/postFeed';

export default class UserController {
  private JsonToken = new JsonWebToken();
  private ImageCrtl = new ImageController();

  public async CreateUser(user: IUser, file: IFile) {
    try {
      const { password, birthday } = user;
      const crypfyPassword = new Crypfy(password);
      // const data = new DateParser(birthday).ParseDate();

      const queryResult = await UserModel.create({
        ...user,
        birthday,
        password: crypfyPassword.CreateHash()
      }).then(result => new User(result.toJSON()));

      const tokenUser = queryResult.TokenInfo();
      const userInfo = queryResult.SimpleInfo();
      let fileQuery: IFile = { url: '' };
      if (file) {
        try {
          fileQuery = await this.ImageCrtl.SaveFile(file, tokenUser.id);
        } catch (error) {
          await new FileSystem().DeleteFile(file.path);
          throw error;
        }
      }

      const { url } = fileQuery;
      const token = this.JsonToken.CreateToken({
        ...tokenUser,
        url
      });
      return {
        user: { ...userInfo, url },
        token
      };
    } catch (error) {
      console.log(error);

      throw error.name;
    }
  }

  public async UpdateUser(id, userNewInfo: IUser, profile: IFile = null) {
    try {
      let { birthday } = userNewInfo;
      let newDate = birthday
        ? (birthday = new DateParser(birthday).ParseDate())
        : userNewInfo.birthday;

      await UserModel.update(
        { ...userNewInfo, birthday: newDate },
        {
          where: {
            id
          }
        }
      );
      if (profile) {
        await this.ImageCrtl.UpdateImage(profile, id);
      }
      const user = await this.GetUser(id);
      return { mensage: 'User successfully updated', user };
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
          },
          {
            model: PostFeed,
            include: [ImagesModel]
          }
        ],
        order: [[PostFeed, 'createdAt', 'DESC']]
      }).then(result => {
        if (!result) throw { Error: 'error' };
        let res: any = result.toJSON();
        let [url] = res.imagens;
        delete res.imagens;
        delete res.password;
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
      let tkJson: any = this.JsonToken.VerifyToken(token);
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
