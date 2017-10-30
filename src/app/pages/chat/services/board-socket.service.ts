import {Inject, Injectable} from '@angular/core';
import {connect, } from 'socket.io-client';
import {APP_CONFIG, IAppConfig} from '../../../common/IAppConfig';
import {id} from '@swimlane/ngx-datatable/release/utils';
import {AuthService} from '../../../common/auth.service/auth.service';
import {SocketService} from '../../../common/socket.service';
export enum RoomEvents {
  ADD_MESSAGE = 'ADD_MESSAGE',
  EDIT_MESSAGE = 'EDIT_MESSAGE',
  USER_JOIN = 'JOIN_USER',
  USER_LEAVE = 'LEAVE_USER',
}
export enum RoomUserEvents {
  JOIN_ROOM = 'JOIN_ROOM',
  LEAVE_ROOM = 'LEAVE_ROOM',
}
@Injectable()
export class BoardSocketService {
  public chatSocket:  SocketIOClient.Socket;
  constructor(@Inject(APP_CONFIG) protected config,
              private socketService: SocketService) {
    this.chatSocket = socketService.createConnection(this.config.chatNamespace);
  }

}
