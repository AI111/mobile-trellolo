import {Inject, Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {JwtHelperService} from './jwt-helper.service';
import {APP_CONFIG} from './IAppConfig';
import {IBaseCRUDServicr} from './IBaseCRUDServicr';
import {HttpClient} from '@angular/common/http';
import {IProjectModel} from './models/IProjectModel';

@Injectable()
export class ProjectService extends IBaseCRUDServicr<IProjectModel> {
  protected route = 'api/projects';
  constructor(private jwtHelper: JwtHelperService,
              protected http: HttpClient,
              private router: Router,
              @Inject(APP_CONFIG) protected config) {
    super(http, config);
  }

}
