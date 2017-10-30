import {Inject, Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {AuthService} from './auth.service';
import {APP_CONFIG} from '../IAppConfig';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(@Inject(APP_CONFIG) private config) {

  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem(this.config.tokenName);
    // // Clone the request to add the new header.
    const authReq = req.clone({headers: req.headers.set('Authorization', `Bearer ${token}`)});
    // // Pass on the cloned request instead of the original request.
    return next.handle(authReq);
  }
}
