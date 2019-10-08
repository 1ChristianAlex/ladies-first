import multer from 'multer';
import path from 'path';
import fs from 'fs';

export default class MulterFile {
  constructor(private Dirname) {
    if (!fs.existsSync(this.PublicPath)) {
      fs.mkdirSync(this.PublicPath);
    }
  }

  private PublicPath = `${path.resolve()}/src/public/${this.Dirname}`;
  private Storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, this.PublicPath);
    },
    filename: (req, file, cb) => {
      let ext = file.mimetype.split('/')[1];
      cb(null, `${file.fieldname}_${Date.now()}.${ext}`);
    }
  });

  public MulterEng = multer({ storage: this.Storage });
}
