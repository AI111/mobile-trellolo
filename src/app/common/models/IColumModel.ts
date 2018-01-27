import {ICardModel} from './ICardModel';
import {IDBEntity} from './IDBEntity';

export interface IColumnModel extends IDBEntity {
  boardId?: number;
  cards?: ICardModel[];
  position?: number;
  title: string;
}
