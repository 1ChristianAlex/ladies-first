import { JobSubModel, JobsModel } from '../../models';
import { Op } from 'sequelize';

export default class JobSubs {
  public async Subscription(jobId, userId) {
    try {
      await JobSubModel.create({
        jobId,
        userId
      });

      return { mensage: 'Success created' };
    } catch (error) {
      return error;
    }
  }
  public async RemoveSubscription(jobId, userId) {
    try {
      await JobSubModel.destroy({
        where: {
          jobId,
          userId
        }
      });
      return { mensage: 'Subscription removed' };
    } catch (error) {
      return error;
    }
  }
  public async GetSubscription(userId, limit = 10, offset = 0) {
    try {
      const subscription = await JobsModel.findAll({
        include: [
          {
            model: JobSubModel,
            where: {
              userId,
              status: true
            }
          }
        ],
        limit,
        offset
      });

      return subscription;
    } catch (error) {
      console.log(error);

      return error;
    }
  }
}
