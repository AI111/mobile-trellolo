import {IDBEntity} from './IDBEntity';

export interface IMessageModel extends IDBEntity {
  roomId: string;
  message: string;
  senderId: string;
}
