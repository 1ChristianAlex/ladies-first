import { APIPublic, APIPrivate } from "../";

export default class Auth {
  ApiPublic = new APIPublic();
  ApiPrivate = new APIPrivate();
  TokenName = "TOKEN_APP";

  async Login({ email, password }) {
    try {
      let { user, token } = await this.ApiPublic.Post("/login", {
        email,
        password
      });
      localStorage.setItem(this.TokenName, JSON.stringify(token));
      return user;
    } catch (error) {
      console.log(error);

      throw error;
    }
  }
  async Register({ email, password, name, lastname, birthday, cpf, image }) {
    try {
      let formData = new FormData();
      let user = {
        email,
        password,
        name,
        lastname,
        birthday,
        cpf
      };
      formData.append("user", JSON.stringify(...user));
      if (image) {
        formData.append("file", image);
      }

      let register = await this.ApiPrivate.Post("/register", formData);
      console.log(register);
    } catch (error) {
      throw error;
    }
  }
  static isAuth() {
    let token = localStorage.getItem("TOKEN_APP");

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
