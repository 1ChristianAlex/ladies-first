import { PostsModel, ImagesModel } from '../../models';
import { IPostType } from '../../types/IPostType';
import { ImageController } from '../Files/ImageController';
import { Op } from 'sequelize';

export class PostController {
  private ImageCtrl = new ImageController();

  public async CreatePost(post: IPostType, userId: string) {
    try {
      let postQuery = await PostsModel.create({ ...post, userId }).then(postResult => postResult.toJSON());

      return postQuery;
    } catch (error) {
      throw error;
    }
  }
  public async UpdatePost(id: string, post: IPostType) {
    try {
      let { image, ...postContent } = post;

      await this.ImageCtrl.UpdateImage(image, null, postContent.id);

      let postQuery = await PostsModel.update(post, {
        where: { id }
      });

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
  public async GetPosts(id = null) {
    try {
      let postQuery;
      if (id) {
        postQuery = await PostsModel.findAll({
          include: [ImagesModel],
          where: {
            [Op.or]: [
              { id },
              {
                title: {
                  [Op.like]: `%${id}%`
                }
              },
              {
                content: {
                  [Op.like]: `%${id}%`
                }
              }
            ]
          }
        });
      } else {
        postQuery = await PostsModel.findAll({
          include: [ImagesModel],
          order: [['createdAt', 'DESC']]
        });
      }
      return postQuery;
    } catch (error) {
      throw error;
    }
  }
}
