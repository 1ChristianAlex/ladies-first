import { JobsModel, UserModel } from '../../models';
import UserController from '../User/UserController';
import { IJobs } from '../../types';
import { Op } from 'sequelize';

export default class JobsController {
  private UserCtrl = new UserController();
  public async CreateJob(job: IJobs, userId) {
    try {
      let newJob = {
        ...job,
        userId
      };
      let jobQuery = await JobsModel.create(newJob, {
        include: UserModel
      }).then(jo => jo.toJSON());

      return jobQuery;
    } catch (error) {
      return { mensage: 'Error on create a new job', error };
    }
  }
  public async DeleteJob(id: number) {
    try {
      let deletation = await JobsModel.destroy({
        where: { id }
      });
      return deletation;
    } catch (error) {
      return { mensage: 'Error on delete job', error };
    }
  }
  public async UpdateJob(id, userId, updateContent: IJobs) {
    try {
      let updateQuery = await JobsModel.update(
        { ...updateContent },
        {
          where: {
            id,
            [Op.and]: {
              userId
            }
          }
        }
      );

      return updateQuery;
    } catch (error) {
      return { mensage: 'Error on update job', error };
    }
  }

  public async GetJobs(query: string = '', limit = 10, offset = 0) {
    try {
      const options: object = {
        limit,
        offset,
        order: [['createdAt', 'DESC']]
      };
      let jobQuery;
      if (query) {
        jobQuery = await JobsModel.findAll({
          where: {
            is_active: true,
            [Op.or]: [
              { id: query },
              { title: { [Op.like]: `%${query}%` } },
              { description: { [Op.like]: `%${query}%` } },
              { job_type: { [Op.like]: `%${query}%` } },
              { industry: { [Op.like]: `%${query}%` } },
              { function: { [Op.like]: `%${query}%` } },
              { categorie: { [Op.like]: `%${query}%` } }
            ]
          },
          ...options
        }).then(job => job.map(map => map.toJSON()));
      } else {
        jobQuery = await JobsModel.findAll({ ...options }).then(job =>
          job.map(map => map.toJSON())
        );
      }
      const jobWithUser = jobQuery.map(async job => {
        const user = await this.UserCtrl.GetUser(job.userId);
        return {
          ...job,
          user
        };
      });
      return await Promise.all([...jobWithUser]);
    } catch (error) {
      return { mensage: 'Error on list Jobs', error };
    }
  }
}
