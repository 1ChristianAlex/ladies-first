import { Router } from 'express';
import { PostFeedController } from '../controllers/Feed/PostController';

export const FeedMiddleware = Router();
const postCrudRoute = '/api/post/:id?';
const PostFeedCtrl = new PostFeedController();

FeedMiddleware.route(postCrudRoute).post(async (req, res, next) => {
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
});
