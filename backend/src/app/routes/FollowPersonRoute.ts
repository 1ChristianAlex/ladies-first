import { Router } from 'express';
import { FollowPersonController } from '../controllers/FriendshipController';

export const FollowRouter = Router();
const FollowRoutePath = '/api/follow/:id?';
const FollowCtrl = new FollowPersonController();

FollowRouter.route(FollowRoutePath).post(async (req, res, next) => {
  try {
    let {
      user: { id },
      followId
    } = req.body;
    let follow = await FollowCtrl.NewFollow(followId, id);
    res.json({ follow });
  } catch (error) {}
});
