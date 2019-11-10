import multer from 'multer';
import path from 'path';
import { FileSystem } from '../resources/';

export default class MulterFile {
  private Fs = new FileSystem();

  constructor(private Dirname) {}

  private PublicPath = `${path.resolve()}/src/uploads/${this.Dirname}`;

  private Storage = multer.diskStorage({
    destination: (req, file, cb) => {
      if (!this.Fs.FolderExists(this.PublicPath)) {
        this.Fs.CreateFolder(this.PublicPath);
      }

      cb(null, this.PublicPath);
    },
    filename: (req, file, cb) => {
      let ext = file.mimetype.split('/')[1];
      cb(null, `${Date.now()}.${ext}`);
    }
  });

  public MulterEng = multer({ storage: this.Storage });
}
