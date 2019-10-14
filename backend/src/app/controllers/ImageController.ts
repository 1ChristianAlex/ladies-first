import { FileCrudController } from './FileCrudController';
import Images from '../models/imagens';

export class ImageController extends FileCrudController {
  constructor() {
    super(Images);
  }
}
