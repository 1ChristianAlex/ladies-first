import { APIPublic } from '../';

export default class Auth {
  Api = new APIPublic();
  TokenName = 'TOKEN_APP';
  async Login({ email, password }) {
    try {
      let { user, token } = await this.Api.Post('/login', { email, password });
      localStorage.setItem(this.TokenName, JSON.stringify(token));
      return user;
    } catch (error) {
      throw error;
    }
  }
  static isAuth() {
    let token = localStorage.getItem('TOKEN_APP');
    console.log(token);

    if (token) {
      return true;
    }
    return false;
  }
}
