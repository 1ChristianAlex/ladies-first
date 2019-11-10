import axios from 'axios';
import { apiUrl } from '../../config';

export default class APIPrivateRequest {
  Token = `Bearer ${localStorage.getItem('TOKEN_APP')}`;

  axios = axios.create({
    baseURL: apiUrl,
    headers: {
      Authorization: this.Token
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
