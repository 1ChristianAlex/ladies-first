import FileModel from '../models/files';
import { IFIle } from '../types/IFile';
import { FileSystem } from '../resources/FileSystem';

export class FileController {
  private Fs = new FileSystem();

  public async SaveFile(file: IFIle, user_id = null, post_id = null) {
    try {
      let fileQuery = await FileModel.create({ ...file, userId: user_id.toString(), post_id }).then(fileResult => fileResult.toJSON());
      return fileQuery;
    } catch (error) {
      return { mensage: 'Error on Save file' };
    }
  }

  public async UpdateImage(file: IFIle, user_id = null, post_id = null) {
    try {
      let condition = { userId: user_id } || { postId: post_id };

      let oldFile: IFIle = await FileModel.findOne({
        where: { ...condition }
      }).toJSON();

      let fileUpdateQuery = await FileModel.update(
        { ...file, userId: user_id, postId: post_id },
        {
          where: { ...condition }
        }
      );

      let newFile: IFIle = await FileModel.findOne({
        where: { ...condition }
      }).toJSON();

      this.Fs.DeleteFile(oldFile.path);

      return { fileUpdateQuery, newFile };
    } catch (error) {
      console.log(error);
    }
  }

  public async FindFile(id: string) {
    let fileQuery: IFIle = await FileModel.findByPk(id).then(file => file.toJSON());

    return fileQuery;
  }
  public async DeleteFile(id: string) {
    try {
      let fileQuery: Promise<IFIle> = FileModel.findByPk(id).then(userFile => userFile.toJSON());

      let fileDestroy = FileModel.destroy({
        where: { id }
      });
      let [{ path }, hasDelete] = await Promise.all([fileQuery, fileDestroy]);

      if (hasDelete) {
        this.Fs.DeleteFile(path);
        let mensage = `Imagem deleta com sucesso`;

        return { mensage, path };
      }
    } catch (error) {
      console.log(error);
      let mensage = `Error on delete image`;

      return { mensage };
    }
  }
}
