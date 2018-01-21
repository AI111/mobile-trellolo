import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IBoardModel} from '../../common/models/IBoardModel';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  public boards: Observable<IBoardModel[]>;

  constructor(private route: ActivatedRoute) {
    this.boards = this.route.data.map(data => data.boards);
  }

  ngOnInit() {
  }

}
