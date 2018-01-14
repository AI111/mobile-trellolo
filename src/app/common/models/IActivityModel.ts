import {IDBEntity} from './IDBEntity';
import {IUser} from './IUser';

export interface IActivityModel extends IDBEntity {
  user?: IUser;
  userId: number;
  table: string;
  tableId: string;
}
