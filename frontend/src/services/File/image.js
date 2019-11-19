import { File } from "./files";

export class Image extends File {
  _types = ["image/jpeg", "image/png"];

  VerifyType(type = "") {
    if (this._types.includes(type)) {
      return { mensage: "Arquivo permitido", status: true };
    }
    return { mensage: "Arquivo não permitido", status: false };
  }
}

export default new Image();
