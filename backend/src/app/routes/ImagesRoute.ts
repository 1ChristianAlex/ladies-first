import { Router } from 'express';
import MulterFile from '../middleware/MulterMiddleware';
import { ImageSharp } from '../resources/imageSharp';
import { ImageController } from '../controllers/Files/ImageController';
import { IUser } from '../types/IUser';
import { IFIle } from '../types/IFile';

export const ImageRoute = Router();

const FileCtrl = new ImageController();
const MulterProfile = new MulterFile('avatar');
const MulterPost = new MulterFile('posts');
const ImageSh = new ImageSharp();

const PostImageStorage = MulterPost.MulterEng;
const UserStore = MulterProfile.MulterEng;

const ProfileImageRouterPath = '/api/image/profile/:id?';
const PostImageRouterPath = '/api/image/post/:id?';

const UserStoreTypeSingle = UserStore.any();
const PostImageStorageTypeArray = PostImageStorage.any();

// User Profile Image
ImageRoute.route(ProfileImageRouterPath)
  .all(async (req, res, next) => {
    let { user } = req.body;
    req.headers.user = user;
    next();
  })
  .post(UserStoreTypeSingle, async (req, res, next) => {
    let { user } = req.headers;
    let userHeader: IUser = JSON.parse(JSON.stringify(user));
    let [avatar] = req.files as Array<IFIle>;
    let fileSave = await FileCtrl.SaveFile(avatar, userHeader.id, null);
    res.json(fileSave);
  })
  .patch(UserStoreTypeSingle, async (req, res, next) => {
    let { user } = req.headers;
    let userHeader: IUser = JSON.parse(JSON.stringify(user));
    let [avatar] = req.files as Array<IFIle>;
    let fileUpdate = await FileCtrl.UpdateImage(avatar, userHeader.id, null);
    res.json(fileUpdate);
  })
  .delete(async (req, res, next) => {
    let { id } = req.params;
    let filePayload: any = await FileCtrl.DeleteFile(id);

    res.json(filePayload);
  });

// Post Feed Images
ImageRoute.route(PostImageRouterPath)
  .all(async (req, res, next) => {
    let { user } = req.body;
    req.headers.user = user;
    next();
  })
  .post(PostImageStorageTypeArray, async (req, res, next) => {
    let { user } = req.headers;
    let userHeader: IUser = JSON.parse(JSON.stringify(user));
    let postImageArray: Array<IFIle> = req.files as Array<IFIle>;

    let { postId } = req.body;
    let postImage = await postImageArray.map(async image => {
      let smallImagePath = await ImageSh.ResizeSmall(image.path, image.filename);

      let newImageObj = {
        ...image,
        smallImagePath
      };
      FileCtrl.SaveFile(newImageObj, userHeader.id, postId || null);
      return image;
    });
    let returnImages = await Promise.all(postImage);
    res.json(returnImages);
  })
  .patch(PostImageStorageTypeArray, async (req, res, next) => {
    let { user } = req.headers;
    let userHeader: IUser = JSON.parse(JSON.stringify(user));

    let postImageArray: Array<IFIle> = req.files as Array<IFIle>;

    let postImage = await postImageArray.map(async image => {
      ImageSh.ResizeSmall(image.path, image.filename);
      FileCtrl.UpdateImage(image, userHeader.id, null);
      return image;
    });

    let returnImages = await Promise.all(postImage);
    res.json(returnImages);
  })
  .delete(async (req, res, next) => {
    let { id } = req.params;

    let deleteImage = await FileCtrl.DeleteFile(id);

    res.json(deleteImage);
  })
  .get(async (req, res, next) => {
    try {
      let { id } = req.params;

      let images = await FileCtrl.FindFile(id);

      res.json(images);
    } catch (error) {
      res.status(404).json({ mensage: 'File not found', error });
    }
  });
