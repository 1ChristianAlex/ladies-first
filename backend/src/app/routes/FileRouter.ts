import { Router } from 'express';
import { ImageController } from '../controllers/Files/ImageController';

export const FileRouter = Router();
const FileRouterPath = '/media/:filename';

const ImageC = new ImageController();

FileRouter.route(FileRouterPath).get(async (req, res, next) => {
  try {
    let { filename } = req.params;
    let image = await ImageC.FindFile(filename);
    res.sendFile(image.path);
  } catch (error) {
    res.status(404);
  }
});
