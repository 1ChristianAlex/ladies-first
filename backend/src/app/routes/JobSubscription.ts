import { Router } from 'express';
import JobSubscriptionController from '../controllers/Jobs/JobSubscriptionController';

export const JobSubscriptionRouter = Router();
const JobsSubPathRouter = '/api/subscription/:id?';
const JobSubC = new JobSubscriptionController();

JobSubscriptionRouter.route(JobsSubPathRouter)
  .post(async (req, res, next) => {
    try {
      const {
        jobId,
        user: { id }
      } = req.body;

      const makeSub = await JobSubC.Subscription(jobId, id);

      res.json(makeSub);
      next();
    } catch (error) {
      res.status(400).json({ mensage: 'Error on make subscription' });
    }
  })
  .delete(async (req, res, next) => {
    try {
      const {
        jobId,
        user: { id }
      } = req.body;

      const removeSub = await JobSubC.RemoveSubscription(jobId, id);
      res.json(removeSub);
      next();
    } catch (error) {
      res.status(400).json({ mensage: 'Error on remove subscription' });
    }
  })
  .get(async (req, res, next) => {
    try {
      const { limit, offset } = req.query;
      const {
        user: { id }
      } = req.body;
      const jobsSubscription = await JobSubC.GetSubscription(id, limit, offset);
      res.json(jobsSubscription);
      next();
    } catch (error) {
      res.status(400).json({ mensage: 'Error on list job subscription' });
    }
  });
