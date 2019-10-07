import PostFeedModel from '../../models/postFeed';
import { IPostType } from '../../types/IPostType';
import { FileController } from './FileController';
import { IFIle } from '../../types/IFile';

export class PostController {
  private FileC = new FileController();

  public async CreatePost(post: IPostType, userId: string) {
    try {
      let { image, ...postContent } = post;

      let imageQuery: IFIle = await this.FileC.SaveFile(image);
      let postQuery = await PostFeedModel.create({ ...postContent, fileID: imageQuery.id }).then(postResult => postResult.toJSON());

      return postQuery;
    } catch (error) {
      return { mensage: 'Error on post Creation' };
    }
  }
  public async UpdatePost(id: string, post: IPostType) {
    try {
      let { image, ...postContent } = post;

      await this.FileC.UpdateImage(image.id, image);

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
}
