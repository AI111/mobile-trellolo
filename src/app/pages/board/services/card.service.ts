import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {APP_CONFIG} from '../../../common/IAppConfig';
import {IBaseCRUDServicr} from '../../../common/IBaseCRUDServicr';
import {IColumnModel} from '../../../common/models/IColumModel';
import {IDBEntity} from '../../../common/models/IDBEntity';
import {ICardModel} from '../../../common/models/ICardModel';

@Injectable()
export class CardService extends IBaseCRUDServicr<ICardModel> {
  protected route = 'api/cards';
  constructor(protected http: HttpClient,
              @Inject(APP_CONFIG) protected config) {
    super(http, config);
  }
  protected removeGeneratedFields({_id, createdAt, updatedAt, boardId,  userId,  ...data}: ICardModel): ICardModel {
    return data as IColumnModel;
  }
}
