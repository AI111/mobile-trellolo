import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {APP_CONFIG} from '../../../common/IAppConfig';
import {IBaseCRUDServicr} from '../../../common/IBaseCRUDServicr';
import {IBoardModel} from '../../../common/models/IBoardModel';
import {Observable} from 'rxjs/Observable';
import {ProjectService} from '../../../common/project.service';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/first';

@Injectable()
export class BoardService extends IBaseCRUDServicr<IBoardModel> {
  protected route = 'api/boards';
  constructor(protected http: HttpClient,
              private projectService: ProjectService,
              @Inject(APP_CONFIG) protected config) {
    super(http, config);
  }
  getAll(): Observable<IBoardModel[]> {
    return this.projectService.project.first()
      .flatMap((project) => this.http.get<IBoardModel[]>(`api/projects/${project._id}/boards`));
  }
}
