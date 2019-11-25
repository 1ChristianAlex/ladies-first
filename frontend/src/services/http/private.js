import axios from 'axios';
import { apiUrl } from '../../config';

export class APIPrivateRequest {
  TokenName = 'TOKEN_APP';
  Token() {
    return localStorage.getItem(this.TokenName)
      ? localStorage.getItem(this.TokenName).replace(/"*/g, '')
      : '';
  }

  axios = axios.create({
    baseURL: `${apiUrl}/api`,
    headers: {
      Authorization: `Bearer ${this.Token()}`
    }
  });

  async Get(url) {
    try {
      let request = await this.axios.get(url);
      let { data, status } = request;

      if (status === 200) {
        return data;
      }
    } catch (error) {
      throw error.response;
    }
  }
  async Post(parm, body) {
    try {
      let request = await this.axios.post(parm, body);
      let { data, status } = request;
      if (status === 200) {
        return data;
      }
    } catch (error) {
      throw error.response;
    }
  }
}

export default new APIPrivateRequest();
