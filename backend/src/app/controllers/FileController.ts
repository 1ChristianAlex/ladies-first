import { FileCrudController } from './FileCrudController';
import FilesModel from '../models/files';

export class FileController extends FileCrudController {
  constructor() {
    super(FilesModel);
  }
}
