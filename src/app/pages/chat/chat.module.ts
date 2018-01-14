import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ChatComponent} from './chat.component';
import {ChatRoomComponent} from './chat-room/chat-room.component';

import {RoomsListComponent} from './rooms-list/rooms-list.component';
import {routes} from './chat.routing';
import {RouterModule} from '@angular/router';
import {MatButtonModule, MatIconModule, MatInputModule, MatListModule, MatTabsModule} from '@angular/material';
import {RoomConferenceComponent} from './room-conference/room-conference.component';
import {InfiniteScrollDirective} from '../../common/directives/infinity-scroll.directive';
import {MessageListComponent} from './chat-room/message-list/message-list.component';
import {ReactiveFormsModule} from '@angular/forms';
import {UsersListComponent} from './chat-room/users-list/users-list.component';
import {ChatServiceModule} from './services/chat-service.module';

@NgModule({
  imports: [
    CommonModule,
    ChatServiceModule,
    MatTabsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ChatComponent,
    ChatRoomComponent,
    RoomsListComponent,
    RoomConferenceComponent,
    InfiniteScrollDirective,
    MessageListComponent,
    UsersListComponent],

})
export class ChatModule { }
