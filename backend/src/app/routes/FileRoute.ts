import { Router } from 'express';
import MulterFile from '../resources/MulterFile';
import { FileController } from '../controllers/Feed/FileController';
import { IUser } from '../types/IUser';

export const FileRoute = Router();
const FileCtrl = new FileController();
const FileRouterUser = '/api/file';
const UserStore = new MulterFile('avatar').MulterEng;

FileRoute.route(FileRouterUser)
  .all(async (req, res, next) => {
    let { user } = req.body;
    req.headers.user = user;
    next();
  })
  .post(UserStore.single('avatar'), async (req, res, next) => {
    let { user } = req.headers;
    let userHeader: IUser = JSON.parse(JSON.stringify(user));
    let avatar = req.file;
    let fileSave = await FileCtrl.SaveFile(avatar, userHeader.id, null);
    res.json(fileSave);
  });
