import crypto from 'crypto';
import localEnv from '../../config/local';
export default class Cripfy {
  private SecreteCripfy = Buffer.from(localEnv.SECRET).toString('hex');
  private Algorithm = 'sha512';

  constructor(public password: string) {}

  public CreateHash() {
    let key = crypto.pbkdf2Sync(this.password, this.SecreteCripfy, 616, 32, this.Algorithm).toString('hex');
    return key;
  }
}
