import {Observable} from 'rxjs/Observable';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {IBaseCRUDServicr} from './IBaseCRUDServicr';
import {IDBEntity} from './models/IDBEntity';
import {Inject, InjectionToken} from '@angular/core';

export const RESOLVE_KEY = new InjectionToken<string>('RESOLVE_KEY');
export const RESOLVE_METHOD = new InjectionToken<string>('RESOLVE_METHOD');

export class AbstractDataResolverById<T extends IDBEntity>  implements Resolve<T> {
  constructor(private rs: IBaseCRUDServicr<T>, private parameter: string = 'id') {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<T> {
    return this.rs.getById(+route.paramMap.get(this.parameter));
  }
}
export class AbstractDataResolverAll<T extends IDBEntity>  implements Resolve<T[]> {
  constructor(private rs: IBaseCRUDServicr<T>, private query?: object) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<T[]> {
    return this.rs.getAll(this.query);
  }
}
export function dataResolveByIdyFactory<T extends IDBEntity>(service: IBaseCRUDServicr<T>) {
  return new AbstractDataResolverById<T>(service, 'id');
}
export function dataResolveAllFactory<T extends IDBEntity>(service: IBaseCRUDServicr<T>) {
  return new AbstractDataResolverAll<T>(service);
}
