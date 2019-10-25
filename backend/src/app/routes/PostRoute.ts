import { Router } from 'express';
import { PostController } from '../controllers/Feed/PostController';
import MulterMidle from '../middleware/MulterMiddleware';
import { IFIle } from '../types/IFile';

export const PostRoute = Router();
const PostFeedCtrl = new PostController();
const MulterMiddleware = new MulterMidle('posts').MulterEng;
const MulterHandler = MulterMiddleware.any();
const postCrudRoute = '/api/post/:id?';

PostRoute.route(postCrudRoute)
  .post(
    (req, res, next) => {
      let { user } = req.body;
      req.headers.user = user;
      next();
    },
    MulterHandler,
    async (req, res, next) => {
      try {
        let files = req.files as Array<IFIle>;
        let { id }: any = req.headers.user;
        let content = JSON.parse(req.body.content);
        let postSave = await PostFeedCtrl.CreatePost(content, id, files);
        console.log(content);

        res.json(postSave);
      } catch (error) {
        res.status(302).json({ mensage: 'error' });
      }
    }
  )
  .get(async (req, res, next) => {
    try {
      let postId = req.params.id;
      let postResponse = await PostFeedCtrl.GetPosts(postId);
      res.json(postResponse);
    } catch (error) {
      res.status(302).json({ mensage: 'Error on get posts' });
    }
  });
