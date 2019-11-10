import { FileSystem } from '../resources/';

let myFs = new FileSystem();

let path = 'C:\\projects\\social-woman\\backend\\src\\public\\avatar\\avatar_1570668450531.jpeg';

myFs.DeleteFile(path);
myFs.CreateFolder('C:\\projects\\social-woman\\backend\\src\\public\\teste\\');
