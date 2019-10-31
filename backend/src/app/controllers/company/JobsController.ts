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

      return jobQuery;
    } catch (error) {
      return { mensage: 'Error on create a new job', error };
    }
  }
  public async DeleteJob(id: number, userId: number) {
    try {
      let deletation = await JobsModel.destroy({
        where: {
          id,
          [Op.and]: {
            userId
          }
        }
      });
      return deletation;
    } catch (error) {
      return { mensage: 'Error on delete job', error };
    }
  }
  public async UpdateJob(id, userId, updateContent: IJobs) {
    try {
      let updateQuery = await JobsModel.update(
        { ...updateContent, userId },
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
        let getQuery = await JobsModel.findAll({
          where: {
            categorie: {
              [Op.like]: `%${query}%`
            },
            [Op.or]: [
              {
                title: {
                  [Op.like]: `%${query}%`
                }
              },
              {
                job_type: {
                  [Op.like]: `%${query}%`
                }
              },
              {
                industry: {
                  [Op.like]: `%${query}%`
                }
              },
              {
                funciton: {
                  [Op.like]: `%${query}%`
                }
              }
            ]
          }
        });
        return getQuery;
      } else {
        let getQueryWithoutParms = await JobsModel.findAll({
          limit,
          offset
        });
        return getQueryWithoutParms;
      }
    } catch (error) {
      return { mensage: 'Error on list Jobs', error };
    }
  }
}
