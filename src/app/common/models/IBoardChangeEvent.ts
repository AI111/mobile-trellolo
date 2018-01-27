export enum eventType {
  CREATE = 'CREATE',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
}
export enum eventTarget {
  COLUMN = 'BoardColumn',
  CARD = 'Card'
}
export interface IBoardChangeEvent<T> {
  activityType: eventType;
  modelName: eventTarget;
  fromState?: T;
  toState?: T;
}
