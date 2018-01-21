import {IDBEntity} from './IDBEntity';

export interface IProjectModel extends IDBEntity {
  title?: string;
  description?: string;
  icon?: string;
}
