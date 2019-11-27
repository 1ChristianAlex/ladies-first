import { APIPrivateRequest } from '../http/private';

export class Friends extends APIPrivateRequest {
  static getInstance() {
    return new Friends();
  }
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

export default Friends.getInstance();
