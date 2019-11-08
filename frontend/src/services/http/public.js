import axios from 'axios';
import { apiUrl } from '../../config';

export default class APIRequest {
  apiInstance = axios.create({
    baseURL: apiUrl
  });

  async getRequest(url) {
    try {
      let request = await this.apiInstance.get(url);
      let { data, status } = request;

      if (status == 200) {
        console.log(data);

        return data;
      }
    } catch (error) {
      console.log(error);
    }
  }
  async postRequest(parm, body) {
    try {
      console.log(parm);

      let request = await this.apiInstance.post(parm, body);
      let { data, status } = request;

      if (status == 200) {
        console.log(data);

        return data;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
