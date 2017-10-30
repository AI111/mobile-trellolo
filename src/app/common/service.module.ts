import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from './auth.service/auth.service';
import {JwtHelperService} from './jwt-helper.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ProjectService} from './project.service';
import {AuthInterceptor} from './auth.service/auth.interceptor';
import {SocketService} from './socket.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    AuthService,
    ProjectService,
    JwtHelperService,
    SocketService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ]
})
export class AuthModule { }
