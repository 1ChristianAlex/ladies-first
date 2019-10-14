import { Router } from 'express';
import { PostController } from '../controllers/PostController';

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
      let { user } = req.body;

      let postResponse = await PostFeedCtrl.GetPosts(user.id);
      res.json(postResponse);
    } catch (error) {
      console.log(error);
    }
  });
