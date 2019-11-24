import { JobSub } from '../../models';

export default class JobSubs {
  public async Subscription(jobId, userId) {
    try {
      let make = await JobSub.create({ ...jobId, userId }).then(mak =>
        mak.toJSON()
      );
      return make;
    } catch (error) {
      return { mensage: 'Error on subscribe on Job', error };
    }
  }
  public async RemoveSubscription(id) {
    try {
      let removeble = await JobSub.destroy({
        where: {
          id
        }
      });
      return removeble;
    } catch (error) {
      return { mensage: 'Error on remove from subscription', error };
    }
  }
}
