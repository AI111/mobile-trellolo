import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {JwtHelperService} from '../jwt-helper.service';
import {APP_CONFIG} from '../IAppConfig';
import {IAuthModel, ILocalAuthRequest} from '../models/IAuthModel';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient,
              private jwtHelper: JwtHelperService,
              @Inject(APP_CONFIG) private config) {

  }
  public isAuthentificate(){
    const token = localStorage.getItem(this.config.tokenName);
    return (token && !this.jwtHelper.isTokenExpired(token));
  }
  public get token(): string {
    return localStorage.getItem(this.config.tokenName);
  }
  public set token(token) {
    localStorage.setItem(this.config.tokenName, token);
  }
  public login(creds: ILocalAuthRequest): Observable<IAuthModel> {
    return this.http.post<IAuthModel>('/auth/local', creds)
      .map(res => {
        this.token = res.token;
        return res;
      });
  }
}
