import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ICardModel} from '../../../../common/models/ICardModel';

@Component({
  selector: 'app-board-card',
  templateUrl: './board.card.component.html',
  styleUrls: ['./board.card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BoardCardComponent implements OnInit {
  @Input()
  public card: ICardModel;
  constructor() { }

  ngOnInit() {
  }

}
