import fs from 'fs';
import path from 'path';
export default class FileSystem {
  public async CreateFolder(path: string) {
    try {
      fs.mkdirSync(path);
    } catch (error) {
      console.log('Error on Folder Creation', error);
    }
  }
  public async DeleteFile(path) {
    try {
      fs.unlinkSync(path);
    } catch (error) {
      console.log('Error on Folder Delete', error);
    }
  }
  public FolderExists(path) {
    try {
      return fs.existsSync(path);
    } catch (error) {
      console.log('Error on Folder Exists', error);
    }
  }
  public PathResolve(ph: string) {
    return path.resolve(ph);
  }
}
