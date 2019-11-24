import { PostsModel, ImagesModel } from '../../models';
import { IPostType, IFile } from '../../types/';
import { ImageController } from '../Files/ImageController';
import UserController from '../User/UserController';
import { Op } from 'sequelize';

export class PostController {
  private ImageCtrl = new ImageController();
  private UserCtrl = new UserController();

  public async CreatePost(post: IPostType, userId: string, files: IFile[]) {
    try {
      let postQuery: IPostType = await PostsModel.create({
        ...post,
        userId
      }).then(postResult => postResult.toJSON());

      if (files && files.length > 0) {
        postQuery.imagens = await Promise.all(
          files.map(async file =>
            this.ImageCtrl.SaveFile(file, userId, postQuery.id)
          )
        );
      }
      return postQuery;
    } catch (error) {
      throw error;
    }
  }
  public async UpdatePost(post: IPostType, userId: string, files: IFile[]) {
    try {
      let postQuery = await PostsModel.update(
        { ...post },
        {
          where: {
            id: post.id,
            userId
          }
        }
      );

      if (files.length > 0) {
        files.forEach(async file => {
          await this.ImageCtrl.UpdateImage(file, userId, post.id);
        });
      }
      return postQuery;
    } catch (error) {
      throw error;
    }
  }
  public async DeletePost(id) {
    try {
      let postQuery = await PostsModel.destroy({
        where: { id }
      });

      return postQuery;
    } catch (error) {
      throw error;
    }
  }
  public async GetPosts(id = null, limit = 10, offset = 0) {
    try {
      const options: object = {
        limit,
        offset,
        order: [['createdAt', 'DESC']]
      };
      let postQuery;
      if (id) {
        postQuery = await PostsModel.findAll({
          include: [ImagesModel],
          where: {
            [Op.or]: [
              { id },
              { title: { [Op.like]: `%${id}%` } },
              { content: { [Op.like]: `%${id}%` } }
            ]
          },
          ...options
        });
      } else {
        postQuery = await PostsModel.findAll({
          include: [ImagesModel],
          ...options
        });
      }

      const postWithUser: Array<Promise<any>> = postQuery.map(async post => {
        const postJson = await post.toJSON();

        const postUser = await this.UserCtrl.GetUser(postJson.userId);
        return {
          ...postJson,
          user: postUser
        };
      });

      return await Promise.all([...postWithUser]);
    } catch (error) {
      throw error;
    }
  }
}
