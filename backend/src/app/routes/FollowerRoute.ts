import { Router } from 'express';
import { FollowPersonController } from '../controllers/FollowerController';

export const FollowRouter = Router();
const FollowRoutePath = '/api/follow/:id?';
const FollowCtrl = new FollowPersonController();

FollowRouter.route(FollowRoutePath)
  .post(async (req, res, next) => {
    try {
      let {
        user: { id },
        followId
      } = req.body;
      let follow = await FollowCtrl.NewFollow(followId, id);
      res.json({ follow });
    } catch (error) {
      res.status(500).json({ mensage: 'Error on post follow list' });
    }
  })
  .get(async (req, res, next) => {
    try {
      let {
        user: { id }
      } = req.body;

      let listFollowers = await FollowCtrl.GetFollowList(id);

      res.json(listFollowers);
    } catch (error) {
      res.status(404).json({ mensage: 'User has not followers' });
    }
  });
