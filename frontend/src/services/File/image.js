import { File } from './files';

export class Image extends File {
  _types = ['image/jpeg', 'image/png'];

  static getInstance() {
    return new Image();
  }
  VerifyType(type = '') {
    if (this._types.includes(type)) {
      return { mensage: 'Arquivo permitido', status: true };
    }
    return { mensage: 'Arquivo não permitido', status: false };
  }
}

export default Image.getInstance();
