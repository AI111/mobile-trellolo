import {IDBEntity} from './IDBEntity';
import {IUser} from './IUser';
import {IProjectModel} from './IProjectModel';
import {IColumnModel} from './IColumModel';

export interface IBoardModel extends IDBEntity {
  project?: IProjectModel;
  projectId?: number;
  description?: string;
  columns?: IColumnModel[];
  users?: IUser[];
  info?: string;
  name: string;
}
