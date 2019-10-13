import { Router } from 'express';
import MulterFile from '../middleware/MulterMiddleware';
import { FileController } from '../controllers/FileController';
import { IUser } from '../types/IUser';

export const FileRoute = Router();

const FileCtrl = new FileController();
const MulterObj = new MulterFile('avatar');
const UserStore = MulterObj.MulterEng;

const FileRouterUser = '/api/file/:id?';

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
  })
  .patch(UserStore.single('avatar'), async (req, res, next) => {
    let { user } = req.headers;
    let userHeader: IUser = JSON.parse(JSON.stringify(user));
    let avatar = req.file;
    let fileUpdate = await FileCtrl.UpdateImage(avatar, userHeader.id, null);
    res.json(fileUpdate);
  })
  .delete(async (req, res, next) => {
    let { id } = req.params;
    let filePayload: any = await FileCtrl.DeleteFile(id);

    res.json(filePayload);
  });
