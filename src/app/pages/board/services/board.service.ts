import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {APP_CONFIG} from '../../../common/IAppConfig';
import {IBaseCRUDServicr} from '../../../common/IBaseCRUDServicr';
import {IBoardModel} from '../../../common/models/IBoardModel';

@Injectable()
export class BoardService extends IBaseCRUDServicr<IBoardModel> {
  protected route = 'api/boards';
  constructor(protected http: HttpClient,
              @Inject(APP_CONFIG) protected config) {
    super(http, config);
  }
}
