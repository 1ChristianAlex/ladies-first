import PostFeedModel from '../models/postFeed';
import ImagesModel from '../models/imagens';
import { IPostType } from '../types/IPostType';
import { ImageController } from './ImageController';
import { IFIle } from '../types/IFile';

export class PostController {
  private ImageCtrl = new ImageController();

  public async CreatePost(post: IPostType, userId: string) {
    try {
      let postQuery = await PostFeedModel.create({ ...post, userId }).then(postResult => postResult.toJSON());

      return postQuery;
    } catch (error) {
      return { mensage: 'Error on post Creation' };
    }
  }
  public async UpdatePost(id: string, post: IPostType) {
    try {
      let { image, ...postContent } = post;

      await this.ImageCtrl.UpdateImage(image, null, postContent.id);

      let postQuery = await PostFeedModel.update(post, {
        where: { id }
      });

      return postQuery;
    } catch (error) {
      return { mensage: 'Error on post Update' };
    }
  }
  public async DeletePost(id) {
    try {
      let postQuery = await PostFeedModel.destroy({
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
        let postQuery = await PostFeedModel.findOne({
          where: { id },
          include: [
            {
              model: ImagesModel
            }
          ]
        });
        return postQuery;
      } else {
        let postQuery = await PostFeedModel.findAll({
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
