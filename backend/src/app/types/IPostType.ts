import { IFIle } from './IFile';

export interface IPostType {
  id?: string;
  image?: IFIle;
  content?: string;
  likes?: number;
  shares?: number;
  user_id: number;
}
