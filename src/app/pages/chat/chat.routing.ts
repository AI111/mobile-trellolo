import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChatComponent} from './chat.component';
import {ChatRoomComponent} from './chat-room/chat-room.component';
import {RoomsListComponent} from './rooms-list/rooms-list.component';
import {RoomsDataResolver} from './services/rooms-data-resolver';
import {RoomConferenceComponent} from './room-conference/room-conference.component';
import {MessagesDataResolver} from './services/messages-data-resolver';
import {RoomDataResolver} from './services/room-data-resolver';

export const routes: Routes = [
  { path: '',
    component: ChatComponent,

    children: [
      { path: '', component: RoomsListComponent, outlet: 'list',
        resolve: {
          rooms: RoomsDataResolver
        },
      },
      { path: 'l', component: RoomConferenceComponent, outlet: 'list'},
      { path: 'rooms/:id', component: ChatRoomComponent,
        resolve: {
          room: RoomDataResolver
        },
      },
      // { path: ':id', component: ChatRoomComponent, outlet: 'chat' },
      //   // { path: 'chat', loadChildren: './chat#ChatModule'},
      //   // { path: 'boards', loadChildren: './board#BoardModule'}
    ]
  },
];


