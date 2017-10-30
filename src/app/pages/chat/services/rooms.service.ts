import {Inject, Injectable} from '@angular/core';
import {IBaseCRUDServicr} from '../../../common/IBaseCRUDServicr';
import {IRoomModel} from '../../../common/models/IRoomModel';
import {HttpClient, HttpParams} from '@angular/common/http';
import {APP_CONFIG} from '../../../common/IAppConfig';
import {Observable} from 'rxjs/Observable';
import {ProjectService} from '../../../common/project.service';
import {IUser} from '../../../common/models/IUser';
import {Subject} from 'rxjs/Subject';
import {BoardSocketService, RoomEvents} from './board-socket.service';

@Injectable()
export class RoomsService extends IBaseCRUDServicr<IRoomModel> {
  route = 'api/rooms';
  roomUsers: IUser[];
  roomUsersChangeEvent: Subject<IUser> = new Subject<IUser>();

  private roomId: number;
  private _room: Observable<IUser[]>;
  constructor(protected http: HttpClient,
              @Inject(APP_CONFIG) protected config,
              private projectService: ProjectService,
              private socketService: BoardSocketService) {
    super(http, config);
    this._room = this.createRoomStream();
    this.initRoomListener(this.socketService.chatSocket);
  }
  public get room(): Observable<IUser[]>{
    setTimeout(() => this.roomUsersChangeEvent.next());
    return this._room;
  }
  public getAll(): Observable<IRoomModel[]> {
    return this.http.get<IRoomModel[]>(this.route, {
      params: new HttpParams().set('projectId', this.projectService.projectId + ''),
    });
  }
  public getById(id: number): Observable<IRoomModel>{
    this.roomId = id;
    return super.getById(id)
      .do(this.saveUsers);
  }
  private saveUsers = (data): void => {
    this.roomUsers = data.users.map(({UserToRoom, ...user}) => {
      const {online, accessRights} = UserToRoom;
      return {online, accessRights, ...user};
    });
    this.roomUsersChangeEvent.next();
  }
  private createRoomStream(): Observable<IUser[]> {
    return this.roomUsersChangeEvent.asObservable()
      .map((user) => this.roomUsers)
      .do(() => console.log('users', this.roomUsers))
      .publishReplay(1)
      .refCount();
  }
  private initRoomListener(socket: SocketIOClient.Socket){
    socket.on(RoomEvents.USER_JOIN, (user: IUser) => {
      console.log('user join', user);
      if (this.chengeUser(user, true))this.roomUsersChangeEvent.next(user);
    });
    socket.on(RoomEvents.USER_LEAVE, (user: IUser) => {
      console.log('user leave', user);

      if (this.chengeUser(user, false))this.roomUsersChangeEvent.next(user);
    });
  }
  private chengeUser(user: IUser, online: boolean){
    const index = this.roomUsers.findIndex((val) => val._id === user._id);
    if (index === -1) return false;
    this.roomUsers[index].online = online;
    return true;
  }
}
