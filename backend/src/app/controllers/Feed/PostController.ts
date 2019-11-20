import { PostsModel, ImagesModel } from "../../models";
import { IPostType, IFile } from "../../types/";
import { ImageController } from "../Files/ImageController";
import { Op } from "sequelize";

export class PostController {
  private ImageCtrl = new ImageController();

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
            [Op.and]: {
              userId
            }
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
          order: [["createdAt", "DESC"]]
        });
      }
      return postQuery;
    } catch (error) {
      throw error;
    }
  }
}
