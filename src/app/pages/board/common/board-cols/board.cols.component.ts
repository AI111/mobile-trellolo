import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {IColumnModel} from '../../../../common/models/IColumModel';
import {ICardModel} from '../../../../common/models/ICardModel';

@Component({
  selector: 'app-board-cols',
  templateUrl: './board.cols.component.html',
  styleUrls: ['./board.cols.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BoardColsComponent implements OnInit {
  @Input()
  public column: IColumnModel;

  constructor() { }
  public track(card: ICardModel) {
    return card._id;
  }
  ngOnInit() {

  }

}
