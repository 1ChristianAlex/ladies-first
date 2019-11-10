import { APIPublic, APIPrivate } from '../';

export default class Auth {
  ApiPublic = new APIPublic();
  ApiPrivate = new APIPrivate();
  TokenName = 'TOKEN_APP';

  async Login({ email, password }) {
    try {
      let { user, token } = await this.ApiPublic.Post('/login', { email, password });
      localStorage.setItem(this.TokenName, JSON.stringify(token));
      return user;
    } catch (error) {
      throw error;
    }
  }
  static isAuth() {
    let token = localStorage.getItem('TOKEN_APP');

    if (token) {
      return true;
    }
    return false;
  }
  async GetCurrentUser() {
    try {
      let token = localStorage.getItem(this.TokenName);
      if (token) {
        let urlParm = `/api/current/${token}`;
        let currentUser = await this.ApiPrivate.Get(urlParm);
        return currentUser;
      }
    } catch (error) {
      throw error;
    }
  }
}
