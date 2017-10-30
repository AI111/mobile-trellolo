import {Inject, Injectable} from '@angular/core';
import {IBaseCRUDServicr} from '../../../common/IBaseCRUDServicr';
import {HttpClient, HttpParams} from '@angular/common/http';
import {APP_CONFIG} from '../../../common/IAppConfig';
import {ProjectService} from '../../../common/project.service';
import {IMessageModel} from '../../../common/models/IMessageModel';
import {IPaginationResponse} from '../../../common/models/IPaginationResponse';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {Subscriber} from 'rxjs/src/Subscriber';
import {BoardSocketService, RoomEvents, RoomUserEvents} from './board-socket.service';

interface IPaginationEvent{
  limit: number;
  offset: number;
  room: number;
}
@Injectable()
export class MessageService extends IBaseCRUDServicr<IMessageModel> {
  private cashedMessages: IMessageModel[] = [];
  private offset = 0;
  private limit = 50;
  private count = 0;
  // `messages` is a stream that emits an array of the most up to date messages
  public messages: Observable<IMessageModel[]>;
  paginationEvent: Subject<IPaginationEvent> = new Subject<IPaginationEvent>();
  event: Subject<any> = new Subject<any>();

  protected route = 'api/message';
  private roomId: number;
  private socket: SocketIOClient.Socket;
  constructor(protected http: HttpClient,
              @Inject(APP_CONFIG) protected config,
              private socketService: BoardSocketService,
              private projectService: ProjectService) {
    super(http, config);
    this.socket = socketService.chatSocket;
    this.messages = this.initMessageStream();
  }

  public getMessages(roomId: number, offset: number = this.offset, limit: number = this.limit): Observable<IMessageModel[]> {
    // if we use another room clean all messages for previous room
    // console.log('roomId', this.roomId, roomId);
    if (this.roomId !== roomId) {
      this.roomId = roomId;
      this.cleanCash();
      this.joinRoom(this.roomId);
    }
    this.paginationEvent.next({limit, room: roomId, offset});
    return this.messages;
  }
  public sendMessage(roomId, message: IMessageModel): Observable<IMessageModel> {
    return this.http.post<IMessageModel>(`api/messages`,{roomId, ...message});
  }
  private cleanCash(): void {
    this.cashedMessages = [];
    this.offset = 0;
    this.count = 0;
  }
  private getMessagePage(roomId: number, offset: number = 0, limit: number = 50): Observable<IPaginationResponse<IMessageModel>>{
    return this.http.get<IPaginationResponse<IMessageModel>>(`api/rooms/${roomId}/messages`, {
      params: new HttpParams().set('offset', offset + '')
        .set('limit', limit + ''),
    });
  }
  private initMessageStream(): Observable<IMessageModel[]> {
    return Observable.merge(
      this.createPaginationStream(),
      this.createMessageStream())
      .map((data: IMessageModel[] | IMessageModel) => {
        if (Array.isArray(data)) {
          this.cashedMessages.unshift(...data.reverse());
        }else {
          this.cashedMessages.push(data);
        }
        return this.cashedMessages;
      })
      .publishReplay(1)
      .refCount();
  }
  private createPaginationStream(): Observable<IMessageModel[]> {
    return this.paginationEvent.asObservable()
      .concatMap((page: IPaginationEvent) => this.getMessagePage(page.room, page.offset, page.limit))
      .map(this.handlePagination);
  }
  private handlePagination = (res: IPaginationResponse<IMessageModel>): IMessageModel[] => {
    this.offset += res.rows.length;
    this.count = res.count;
    return res.rows;
  }

  private joinRoom(roomId): Promise<string> {
    return new Promise((resolve: (socket: any) => any, reject: (socket: any) => any) => {
      this.socket.emit(RoomUserEvents.JOIN_ROOM, roomId, (status: number, mess: string) => {
        if (status === 200) return resolve(mess);
        return reject(mess);
      });
    });
  }
  private createMessageStream(): Observable<IMessageModel> {
    return Observable.create((subscriber: Subscriber<IMessageModel>) => {
      this.socket.on(RoomEvents.ADD_MESSAGE, (message: IMessageModel) => {
        subscriber.next(message);
      });
    });
  }
}
