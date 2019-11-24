import { Router } from 'express';
import { PostController } from '../controllers/Feed/PostController';
import MulterMidle from '../middleware/MulterMiddleware';
import { IFile } from '../types/';

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
        let files = req.files as Array<IFile>;
        let { id }: any = req.headers.user;
        let { content } = req.body;
        const postContent = JSON.parse(content);

        let postSave = await PostFeedCtrl.CreatePost(postContent, id, files);

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
