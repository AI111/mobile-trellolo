import {Inject, Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {JwtHelperService} from './jwt-helper.service';
import {APP_CONFIG} from './IAppConfig';
import {IBaseCRUDServicr} from './IBaseCRUDServicr';
import {HttpClient} from '@angular/common/http';
import {IProjectModel} from './models/IProjectModel';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class ProjectService extends IBaseCRUDServicr<IProjectModel> {
  protected route = 'api/projects';
  private _project:  BehaviorSubject<IProjectModel>
    = new BehaviorSubject<IProjectModel>({_id: parseInt((localStorage.getItem('project') || '-1'), 10)});
  constructor(private jwtHelper: JwtHelperService,
              protected http: HttpClient,
              private router: Router,
              @Inject(APP_CONFIG) protected config) {
    super(http, config);
  }
 public get projectId(): number {
    return parseInt((localStorage.getItem('project') || '-1'), 10);
 }
 public set projectId(id: number){
   localStorage.setItem('project', id + '');
 }
 public setProject(project: IProjectModel){
   localStorage.setItem('project', project._id + '');
   this._project.next(project);
 }
 public get project(): BehaviorSubject<IProjectModel>{
    return this._project;
 }
}
