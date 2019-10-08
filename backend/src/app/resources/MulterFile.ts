import multer from 'multer';
import path from 'path';
export default class MulterFile {
  constructor(private Dirname) {}

  private PublicPath = `${path.resolve()}/src/public/${this.Dirname}`;
  private Storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, this.PublicPath);
    },
    filename: (req, file, cb) => {
      cb(null, `${file.fieldname}_${Date.now()}`);
    }
  });

  public MulterEng = multer({ storage: this.Storage });
}
