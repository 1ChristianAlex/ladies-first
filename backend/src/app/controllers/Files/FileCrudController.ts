import { IFile } from '../../types/';
import { FileSystem } from '../../resources/';
import { ModelCtor } from 'sequelize/types';
import envs from '../../../config/local';
import { Op } from 'sequelize';

export class FileCrudController {
  private Fs = new FileSystem();

  constructor(private Model: ModelCtor<any>) {}

  public async SaveFile(
    file: IFile,
    user_id = null,
    post_id = null
  ): Promise<IFile> {
    try {
      let url = `http://${envs.HOSTNAME}:${envs.BACK_END_PORT}/media`;
      let fileQuery = await this.Model.create({
        ...file,
        url: `${url}/${file.filename}`,
        userId: user_id.toString(),
        postId: post_id
      }).then(fileResult => fileResult.toJSON());
      return fileQuery;
    } catch (error) {
      throw error;
    }
  }

  public async UpdateImage(file: IFile, user_id = null, post_id = null) {
    try {
      let condition = { userId: user_id } || { postId: post_id };

      let oldFile: IFile = await this.Model.findOne({
        where: { ...condition }
      }).then(oldF => oldF.toJSON());

      let fileUpdateQuery = await this.Model.update(
        { ...file, userId: user_id, postId: post_id },
        { where: { ...condition } }
      );

      let newFile: IFile = await this.Model.findOne({
        where: { ...condition }
      }).then(newF => newF.toJSON());

      this.Fs.DeleteFile(oldFile.path);

      return { status: fileUpdateQuery, newFile };
    } catch (error) {
      throw error;
    }
  }

  public async FindFile(id: string = '') {
    try {
      let fileQuery: IFile = await this.Model.findOne({
        where: {
          [Op.or]: [{ id }, { filename: { [Op.like]: `%${id}%` } }]
        }
      }).then(file => file.toJSON());
      return fileQuery;
    } catch (error) {
      throw error;
    }
  }
  public async DeleteFile(id: string) {
    try {
      let fileQueryR = this.Model.findByPk(id);

      let fileDestroy = this.Model.destroy({
        where: { id }
      });
      let [fileQuery, hasDelete] = await Promise.all([fileQueryR, fileDestroy]);

      if (hasDelete) {
        let mensage = `Imagem deletada com sucesso`;

        return { mensage };
      }
    } catch (error) {
      throw error;
    }
  }
  public SendFile(path: string) {
    try {
      let pathResolved = this.Fs.PathResolve(path);
      return pathResolved;
    } catch (error) {}
  }
}
