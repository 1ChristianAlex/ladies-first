import JsonToken from 'jsonwebtoken';
import localEnv from '../../config/local';
import { IUser } from '../types/IUser';

export default class JsonWebToken {
  private Secret = localEnv.SECRET;

  public CreateToken(user: any) {
    let token = JsonToken.sign(user, this.Secret);
    return { token };
  }
  public VerifyToken(token) {
    let verifyResult = JsonToken.verify(token, this.Secret);
    return verifyResult ? verifyResult : false;
  }
}
