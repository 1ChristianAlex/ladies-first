import UserModel from '../models/user';
import { User } from '../classes/User';
import Cryptfy from '../resources/cryptfy';
import JsonToken from '../resources/JsonWebToken';
import { IUser } from '../types/IUser';

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
        }
      }).then(result => (result ? new User(result.toJSON()) : false));
      if (queryResult) {
        let token = this.JsonToken.CreateToken(queryResult.TokenInfo());
        return token;
      }
      return false;
    } catch (error) {
      console.log(error);
    }
  }
  IsLoged(token: string) {
    let tokenVerify = this.JsonToken.VerifyToken(token);
    return tokenVerify ? tokenVerify : false;
  }
}
