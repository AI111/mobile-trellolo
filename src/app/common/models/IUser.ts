import {IDBEntity} from './IDBEntity';
export type  RoomAccessRights = 'user'| 'admin' | 'creator';

export interface IUser extends IDBEntity {
  avatar?: string;
  role?: string;
  email?: string;
  name?: string;
  online: boolean;
  accessRights: RoomAccessRights;
}
