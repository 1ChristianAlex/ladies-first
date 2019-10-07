import ImageModel from '../../models/files';
import { IFIle } from '../../types/IFile';

export class FileController {
  public async SaveFile(file: IFIle) {
    try {
      let fileQuery = await ImageModel.create(file).then(fileResult => fileResult.toJSON());

      return fileQuery;
    } catch (error) {
      return { mensage: 'Error on Save file' };
    }
  }

  public async UpdateImage(id: string, file: IFIle) {
    let fileQuery = await ImageModel.update(file, {
      where: { id }
    });

    return fileQuery;
  }

  public async FindFile(id: string) {
    let fileQuery: IFIle = await ImageModel.findByPk(id).then(file => file.toJSON());

    return fileQuery;
  }
  public async DeleteFile(id: string) {
    try {
      await ImageModel.destroy({
        where: { id }
      });

      let mensage = `Imagem deleta com sucesso`;
      return { mensage };
    } catch (error) {
      let mensage = `Error on delete image`;

      return { mensage };
    }
  }
}
