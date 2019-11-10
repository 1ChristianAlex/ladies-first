import JsonToken from 'jsonwebtoken';
import localEnv from '../../config/local';

export default class JsonWebToken {
  private Secret = localEnv.SECRET;

  public CreateToken(user: any) {
    let token = JsonToken.sign(user, this.Secret);
    return token;
  }
  public VerifyToken(token: string) {
    try {
      let tk = token.replace('Bearer ', '');
      let verifyResult = JsonToken.verify(tk, this.Secret);
      return verifyResult;
    } catch (error) {
      throw { mensage: 'JWT Error' };
    }
  }
}
