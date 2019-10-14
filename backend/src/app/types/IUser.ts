import { IFIle } from './IFile';

export interface IUser {
  id?: string;
  name?: string;
  lastname?: string;
  email?: string;
  password?: string;
  birthday?: string;
  cpf?: string;
  current_company?: string;
  short_description?: string;
  description?: string;
  personal_link?: string;
  tel?: string;
  files?: [IFIle];
  imagens?: [IFIle];
  education?: [IEducation];
  skill?: [ISkills];
  create_at?: string;
  update_at?: string;
}
interface IEducation {
  id?: string;
  entity_name?: string;
  entity_location?: string;
  course_name?: string;
  course_init?: string;
  course_final?: string;
}
interface ISkills {
  id?: string;
  name?: string;
  expertize?: string;
}
