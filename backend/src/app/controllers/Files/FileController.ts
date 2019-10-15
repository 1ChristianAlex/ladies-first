import { FileCrudController } from './FileCrudController';
import { FilesModel } from '../../models';

export class FileController extends FileCrudController {
  constructor() {
    super(FilesModel);
  }
}
