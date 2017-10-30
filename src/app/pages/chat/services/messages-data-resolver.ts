import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {IRoomModel} from '../../../common/models/IRoomModel';
import {Observable} from 'rxjs/Observable';
import {RoomsService} from './rooms.service';
import {IMessageModel} from '../../../common/models/IMessageModel';
import {MessageService} from './message.service';

@Injectable()
export class MessagesDataResolver  implements Resolve<IMessageModel[]> {
  constructor(private rs: MessageService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IMessageModel[]> {
    const id: number = +route.paramMap.get('id');
    this.rs.getMessages(id);
    return this.rs.messages;
  }
}
