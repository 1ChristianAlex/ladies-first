import sharp from 'sharp';
import path from 'path';
import { FileSystem } from './';

export default class ImageSharp {
  private Fs = new FileSystem();

  private UploadFolde(folderName) {
    let folderPath = `${path.resolve()}/src/uploads/posts/${folderName}`;
    if (!this.Fs.FolderExists(folderPath)) {
      this.Fs.CreateFolder(folderPath);
    }
    return folderPath;
  }

  public async ResizeSmall(
    filePath: string,
    fileName: string,
    heigth = 300,
    width = 500,
    quality = 50
  ) {
    try {
      const FolderPath = this.UploadFolde('small');
      const smallImagePath = `${FolderPath}/small-${fileName}`;
      await sharp(filePath)
        .resize(heigth, width, {
          fit: 'contain'
        })
        .jpeg({ quality })
        .toFile(smallImagePath);

      return smallImagePath;
    } catch (error) {
      console.log(error);
    }
  }
}
