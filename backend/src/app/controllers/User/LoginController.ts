import { UserModel, ImagesModel } from '../../models';
import { User } from '../../classes';
import Cryptfy from '../../resources/cryptfy';
import JsonToken from '../../resources/JsonWebToken';

export default class LoginController {
  private JsonToken = new JsonToken();

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
            attributes: ['path', 'updatedAt']
          }
        ]
      }).then(result => (result ? new User(result.toJSON()) : false));
      if (queryResult) {
        let token = this.JsonToken.CreateToken(queryResult.TokenInfo());
        let user = queryResult.SimpleInfo();
        return { token, user };
      }
      throw new Error();
    } catch (error) {
      throw error;
    }
  }
  IsLoged(token: string) {
    let tokenVerify = this.JsonToken.VerifyToken(token);
    return tokenVerify ? tokenVerify : false;
  }
}
