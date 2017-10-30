import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BoardSocketService} from './board-socket.service';
import {RoomsService} from './rooms.service';
import {RoomsDataResolver} from './rooms-data-resolver';
import {RoomDataResolver} from './room-data-resolver';
import {MessagesDataResolver} from './messages-data-resolver';
import {MessageService} from './message.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    RoomsService,
    MessageService,
    RoomsDataResolver,
    RoomDataResolver,
    MessagesDataResolver,
    BoardSocketService
  ]
})
export class ChatServiceModule { }
