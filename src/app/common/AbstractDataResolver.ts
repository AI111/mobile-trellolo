import {Observable} from 'rxjs/Observable';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {IBaseCRUDServicr} from './IBaseCRUDServicr';
import {IDBEntity} from './models/IDBEntity';

export class AbstractDataResolver<T extends IDBEntity>  implements Resolve<T> {
  constructor(private rs: IBaseCRUDServicr<T>, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<T> {
    return this.rs.getById(+route.paramMap.get('id'));
  }
}
export function dataResolveFactory<T extends IDBEntity>(service: IBaseCRUDServicr<T>, router: Router): AbstractDataResolver<T> {
  return new AbstractDataResolver<T>(service, router);
};
