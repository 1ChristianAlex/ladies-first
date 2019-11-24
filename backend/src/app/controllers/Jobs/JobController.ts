import { JobsModel } from '../../models';
import { IJobs } from '../../types';
import { Op } from 'sequelize';

export default class JobsController {
  public async CreateJob(job: IJobs, userId) {
    try {
      let newJob = {
        ...job,
        userId
      };
      let jobQuery = await JobsModel.create(newJob).then(jo => jo.toJSON());
      console.log(jobQuery);

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
      if (query) {
        const jobQuery = await JobsModel.findAll({
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
          limit,
          offset
        });
        return jobQuery;
      } else {
        const jobQueryAll = await JobsModel.findAll({});
        return jobQueryAll;
      }
    } catch (error) {
      return { mensage: 'Error on list Jobs', error };
    }
  }
}
