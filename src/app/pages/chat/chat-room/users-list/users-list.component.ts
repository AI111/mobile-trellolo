import { Component, OnInit } from '@angular/core';
import {RoomsService} from '../../services/rooms.service';
import {Observable} from 'rxjs/Observable';
import {IUser} from '../../../../common/models/IUser';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  public users: Observable<IUser[]>;

  constructor(private roomService: RoomsService) {
    this.users = roomService.room;
  }

  ngOnInit() {
  }

}
