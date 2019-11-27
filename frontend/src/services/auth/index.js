import { APIRequest as APIPublic } from '../http/public';
import { APIPrivateRequest as APIPrivate } from '../http/private';

export class Auth {
  ApiPublic = new APIPublic();
  ApiPrivate = new APIPrivate();
  TokenName = 'TOKEN_APP';

  static getInstance() {
    return new Auth();
  }

  async Login({ email, password }) {
    try {
      let { user, token } = await this.ApiPublic.Post('/login', {
        email,
        password
      });
      this.SaveToken(token);
      return user;
    } catch (error) {
      throw error;
    }
  }

  SaveToken(token) {
    localStorage.setItem(this.TokenName, JSON.stringify(token));
  }

  async Register({ email, password, name, lastname, birthday, cpf, image }) {
    try {
      let formData = new FormData();
      let userData = {
        email,
        password,
        name,
        lastname,
        birthday,
        cpf,
        image
      };

      formData.append('user', JSON.stringify(userData));
      if (image) {
        formData.append('file', image);
      }

      let { user, token } = await this.ApiPublic.Post('/register', formData);
      this.SaveToken(token);
      return user;
    } catch (error) {
      throw error;
    }
  }

  async UpdateInfos({ email, password, name, lastname, birthday, cpf, image }) {
    try {
      let formData = new FormData();
      let updateInfo = {
        email,
        password,
        name,
        lastname,
        birthday,
        cpf,
        image
      };

      formData.append('updateInfo', JSON.stringify(updateInfo));
      if (image) {
        formData.append('file', image);
      }
      await this.ApiPrivate.Patch('/user', formData);
    } catch (error) {
      throw error;
    }
  }

  isAuth() {
    let token = localStorage.getItem(this.TokenName);

    if (token) {
      return true;
    }
    return false;
  }

  async GetCurrentUser() {
    try {
      let token = this.ApiPrivate.Token();

      if (token) {
        let urlParm = `/current/${token}`;
        let currentUser = await this.ApiPrivate.Get(urlParm);
        return currentUser;
      }
    } catch (error) {
      throw error;
    }
  }

  async LogOut() {
    localStorage.removeItem(this.TokenName);
  }
}

export default Auth.getInstance();
