import { IFile } from "./";

export default interface IPostType {
  id?: string;
  title?: string;
  category?: string;
  content?: string;
  likes?: string;
  shares?: string;
  imagens?: IFile[];
}
