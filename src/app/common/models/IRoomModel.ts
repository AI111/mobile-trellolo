import {IDBEntity} from './IDBEntity';
import {IUser} from './IUser';

export interface IRoomModel extends IDBEntity {
  name: string;
  users?: IUser[];
}
