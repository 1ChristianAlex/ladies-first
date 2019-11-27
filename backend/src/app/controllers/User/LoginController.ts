import { UserModel, ImagesModel } from '../../models';
import { User } from '../../classes';
import { JsonWebToken, Cryptfy } from '../../resources/';

export default class LoginController {
  private JsonToken = new JsonWebToken();

  public async Login(email: string, password: string) {
    try {
      let crypfy = new Cryptfy(password);

      let cryptfyPassword = crypfy.CreateHash();

      let queryResult = await UserModel.findOne({
        where: {
          email,
          password: cryptfyPassword
        },
        include: [
          {
            model: ImagesModel,
            limit: 1,
            attributes: ['url']
          }
        ]
      }).then((result: any) => {
        let user = result.toJSON();
        let link: string = '';
        if (user.imagens.lenght > 0) {
          const [{ url }] = user.imagens;
          link = url;
        }
        delete user.imagens;

        return result ? new User({ url: link, ...user }) : false;
      });

      if (queryResult) {
        let user = queryResult.SimpleInfo();
        let token = this.JsonToken.CreateToken(queryResult.TokenInfo());

        return { token, user };
      } else {
        throw { mensage: 'User not found' };
      }
    } catch (error) {
      throw error;
    }
  }
}
