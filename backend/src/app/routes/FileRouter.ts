import { Router } from 'express';
import { ImageController } from '../controllers/Files/ImageController';
import { FileSystem } from '../resources';

export const FileRouter = Router();
const FileRouterPath = '/media/:filename';

const ImageC = new ImageController();
const fileSys = new FileSystem();
FileRouter.route(FileRouterPath).get(async (req, res, next) => {
  try {
    let { filename } = req.params;
    const { path } = await ImageC.FindFile(filename);
    const fileExists = fileSys.FolderExists(path);

    if (fileExists) {
      res.sendFile(path);
    } else {
      throw { error: 'Image not found' };
    }
  } catch (error) {
    res.status(404).json(error);
  }
});
