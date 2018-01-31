import {Inject, Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {JwtHelperService} from './jwt-helper.service';
import {APP_CONFIG} from './IAppConfig';
import {IBaseCRUDServicr} from './IBaseCRUDServicr';
import {HttpClient} from '@angular/common/http';
import {IProjectModel} from './models/IProjectModel';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Subject} from 'rxjs/Subject';
import {ReplaySubject} from 'rxjs/ReplaySubject';

@Injectable()
export class ProjectService extends IBaseCRUDServicr<IProjectModel> {
  protected route = 'api/projects';
  private _project:  Subject<IProjectModel>
    = new ReplaySubject<IProjectModel>(null);
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
 public get project(): Subject<IProjectModel>{
    return this._project;
 }
 public getAll(): Observable<IProjectModel[]>{
    return this.http.get<IProjectModel[]>(this.route)
      .map((projects) => {
        const id = this.projectId;
        if (id !== -1) {
          this._project.next(projects.find((el) => el._id === id));
        }
        return projects;
      });
}
}
