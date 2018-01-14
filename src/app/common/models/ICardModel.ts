import {IDBEntity} from './IDBEntity';

export interface  ICardModel extends IDBEntity{
  boardId?: number;
  columnId?: number;
  description?: number;
  position?: number;
  userId?: number;
  active?: boolean;
}
