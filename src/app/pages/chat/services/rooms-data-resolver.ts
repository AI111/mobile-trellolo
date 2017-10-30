import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {IRoomModel} from '../../../common/models/IRoomModel';
import {Observable} from 'rxjs/Observable';
import {RoomsService} from './rooms.service';

@Injectable()
export class RoomsDataResolver  implements Resolve<IRoomModel[]> {
  constructor(private rs: RoomsService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IRoomModel[]> {
    return this.rs.getAll();
  }
}
