import {Inject, Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {JwtHelperService} from './jwt-helper.service';
import {APP_CONFIG} from './IAppConfig';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtHelper: JwtHelperService,
              private router: Router,
              @Inject(APP_CONFIG) private config) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>| Promise<boolean> | boolean {
    const token = localStorage.getItem(this.config.tokenName);
    if (token && !this.jwtHelper.isTokenExpired(token)) return true;
    this.router.navigate(['/login']);
    return false;
  }
}
