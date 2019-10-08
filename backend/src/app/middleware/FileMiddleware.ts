import { Router } from 'express';
import MulterFile from '../resources/MulterFile';
import { FileController } from '../controllers/Feed/FileController';
import { IUser } from '../types/IUser';

export const FileMiddleware = Router();
const FileCtrl = new FileController();
const FileRouterUser = '/api/file';
const UserStore = new MulterFile('').MulterEng;

FileMiddleware.route(FileRouterUser).post(UserStore.single('avatar'), async (req, res, next) => {
  let user: IUser = req.body;
  let avatar = req.file;

  // let fileSave = await FileCtrl.SaveFile(avatar, user.id, null);

  res.json(user);
});
