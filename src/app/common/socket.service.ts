import {Inject, Injectable} from '@angular/core';
import {connect, } from 'socket.io-client';
import {APP_CONFIG} from './IAppConfig';
import {AuthService} from './auth.service/auth.service';

@Injectable()
export class SocketService {
  constructor(@Inject(APP_CONFIG) protected config,
              private authService: AuthService) {
  }

  createConnection(namespace: string): SocketIOClient.Socket {
    return  connect(`${this.config.url}:${3000}/${namespace}`, {
      path: '/sockets',
      query: `token=${this.authService.token}`,
      forceNew: true,
    });
  }
}
