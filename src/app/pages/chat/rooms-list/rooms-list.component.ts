import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IMessageModel} from '../../../common/models/IMessageModel';
import {Observable} from 'rxjs/Observable';
import {IRoomModel} from '../../../common/models/IRoomModel';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent implements OnInit {
  public rooms: Observable<IRoomModel[]>;
  constructor(private route: ActivatedRoute) {
    this.rooms = this.route.data.map(data => data.rooms);
  }

  ngOnInit(): void {
  }
}
