import { PostsModel, ImagesModel } from '../../models';
import { IPostType } from '../../types/IPostType';
import { ImageController } from '../Files/ImageController';

export class PostController {
  private ImageCtrl = new ImageController();

  public async CreatePost(post: IPostType, userId: string) {
    try {
      let postQuery = await PostsModel.create({ ...post, userId }).then(postResult => postResult.toJSON());

      return postQuery;
    } catch (error) {
      return { mensage: 'Error on post Creation' };
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
      return { mensage: 'Error on post Update' };
    }
  }
  public async DeletePost(id) {
    try {
      let postQuery = await PostsModel.destroy({
        where: { id }
      });

      return postQuery;
    } catch (error) {
      return { mensage: 'Error on post Delete' };
    }
  }
  public async GetPosts(userId, id = null) {
    try {
      if (id) {
        let postQuery = await PostsModel.findOne({
          where: { id },
          include: [
            {
              model: ImagesModel
            }
          ]
        });
        return postQuery;
      } else {
        let postQuery = await PostsModel.findAll({
          where: { userId: userId },
          include: [
            {
              model: ImagesModel
            }
          ]
        });
        return postQuery;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
