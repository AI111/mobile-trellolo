import {IDBEntity} from './IDBEntity';

export interface  ICardModel extends IDBEntity{
  boardId?: number;
  columnId?: number;
  description?: string;
  position?: number;
  userId?: number;
  active?: boolean;
}
