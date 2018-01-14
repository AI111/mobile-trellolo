import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {APP_CONFIG} from '../../../common/IAppConfig';
import {IBaseCRUDServicr} from '../../../common/IBaseCRUDServicr';
import {IColumnModel} from '../../../common/models/IColumModel';
import {IDBEntity} from '../../../common/models/IDBEntity';

@Injectable()
export class ColumnService extends IBaseCRUDServicr<IColumnModel> {
  protected route = 'api/columns';
  constructor(protected http: HttpClient,
              @Inject(APP_CONFIG) protected config) {
    super(http, config);
  }
  protected removeGeneratedFields({_id, createdAt, updatedAt, boardId,  cards,  ...data}: IColumnModel): IColumnModel {
    return data as IColumnModel;
  }
}
