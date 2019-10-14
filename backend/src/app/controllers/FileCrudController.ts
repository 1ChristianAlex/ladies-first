import { IFIle } from '../types/IFile';
import { FileSystem } from '../resources/FileSystem';
import { ModelCtor } from 'sequelize/types';

export class FileCrudController {
  private Fs = new FileSystem();

  constructor(private Model: ModelCtor<any>) {}

  public async SaveFile(file: IFIle, user_id = null, post_id = null) {
    try {
      let fileQuery = await this.Model.create({ ...file, userId: user_id.toString(), postId: post_id }).then(fileResult => fileResult.toJSON());
      return fileQuery;
    } catch (error) {
      return { mensage: 'Error on Save file' };
    }
  }

  public async UpdateImage(file: IFIle, user_id = null, post_id = null) {
    try {
      let condition = { userId: user_id } || { postId: post_id };

      let oldFile: IFIle = await this.Model.findOne({
        where: { ...condition }
      }).toJSON();

      let fileUpdateQuery = await this.Model.update(
        { ...file, userId: user_id, postId: post_id },
        {
          where: { ...condition }
        }
      );

      let newFile: IFIle = await this.Model.findOne({
        where: { ...condition }
      }).toJSON();

      this.Fs.DeleteFile(oldFile.path);

      return { fileUpdateQuery, newFile };
    } catch (error) {
      console.log(error);
    }
  }

  public async FindFile(id: string) {
    let fileQuery: IFIle = await this.Model.findByPk(id).then(file => file.toJSON());

    return fileQuery;
  }
  public async DeleteFile(id: string) {
    try {
      let fileQueryR = this.Model.findByPk(id);

      let fileDestroy = this.Model.destroy({
        where: { id }
      });
      let [fileQuery, hasDelete] = await Promise.all([fileQueryR, fileDestroy]);

      if (hasDelete) {
        // this.Fs.DeleteFile(path);
        let mensage = `Imagem deleta com sucesso`;
        console.log(mensage, fileQuery);

        return { mensage };
      }
    } catch (error) {
      console.log(error);
      let mensage = `Error on delete image`;

      return { mensage };
    }
  }
}
