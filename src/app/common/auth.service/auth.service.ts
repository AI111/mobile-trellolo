import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {JwtHelperService} from '../jwt-helper.service';
import {APP_CONFIG} from '../IAppConfig';
import {IAuthModel, ILocalAuthRequest} from '../models/IAuthModel';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {IUser} from '../models/IUser';

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
  public get user(): IUser{
    return JSON.parse(localStorage.getItem(this.config.userKey));
  }
  public set token(token: string){
    localStorage.setItem(this.config.tokenName, token);
  }
  public set user(user: IUser){
    localStorage.setItem(this.config.userKey, JSON.stringify(user));
  }
  public login(creds: ILocalAuthRequest): Observable<IAuthModel> {
    return this.http.post<IAuthModel>('/auth/local', creds)
      .map(res => {
        const {token, ...user} = res;
        this.token = token;
        this.user = user;
        return res;
      });
  }
}
