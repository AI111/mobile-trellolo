import {IDBEntity} from './IDBEntity';

export interface IPaginationResponse<T extends IDBEntity> {
  count: number;
  limit: number;
  offset: number;
  rows: T[];
}
