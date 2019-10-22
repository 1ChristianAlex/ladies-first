import { Router } from 'express';
import { PostController } from '../controllers/Feed/PostController';

export const PostRoute = Router();
const PostFeedCtrl = new PostController();

const postCrudRoute = '/api/post/:id?';

PostRoute.route(postCrudRoute)
  .post(async (req, res, next) => {
    try {
      let {
        post,
        user: { id }
      } = req.body;

      let postResponse = await PostFeedCtrl.CreatePost(post, id);

      res.json(postResponse);
    } catch (error) {
      res.status(302).json({ mensage: 'error' });
    }
  })
  .get(async (req, res, next) => {
    try {
      let postId = req.params.id;
      let postResponse = await PostFeedCtrl.GetPosts(postId);
      res.json(postResponse);
    } catch (error) {
      res.status(302).json({ mensage: 'Error on get posts' });
    }
  });
