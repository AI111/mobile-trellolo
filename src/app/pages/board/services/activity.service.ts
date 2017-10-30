import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {APP_CONFIG} from '../../../common/IAppConfig';
import {IActivityModel} from '../../../common/models/IActivityModel';
import {IBaseCRUDServicr} from '../../../common/IBaseCRUDServicr';

@Injectable()
export class ActivityService extends IBaseCRUDServicr<IActivityModel>{
  protected route = 'api/activities';
  constructor(protected http: HttpClient,
              @Inject(APP_CONFIG) protected config) {
    super(http, config);
  }
}
