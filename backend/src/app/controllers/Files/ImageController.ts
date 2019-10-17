import { FileCrudController } from './FileCrudController';
import { ImagesModel } from '../../models';

export class ImageController extends FileCrudController {
  constructor() {
    super(ImagesModel);
  }
}
