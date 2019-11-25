import { APIPrivateRequest } from "../http/private";

export class Users extends APIPrivateRequest {
  async FetchUser(id) {
    try {
      const user = await this.Get(`/user/${id}`);

      return user;
    } catch (error) {
      console.log(error);

      throw error;
    }
  }
}

export default new Users();
