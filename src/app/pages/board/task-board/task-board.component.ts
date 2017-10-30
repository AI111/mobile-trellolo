import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {IBoardModel} from '../../../common/models/IBoardModel';

@Component({
  selector: 'app-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.scss']
})
export class TaskBoardComponent implements OnInit {
  public board: Observable<IBoardModel>;

  constructor(private route: ActivatedRoute) {
  this.board = this.route.data.map((data) => data.board);
  }

  ngOnInit() {
  }

}
