import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {IColumnModel} from '../../../../common/models/IColumModel';
import {ICardModel} from '../../../../common/models/ICardModel';
import {CardService} from '../../services/card.service';

@Component({
  selector: 'app-board-cols',
  templateUrl: './board.cols.component.html',
  styleUrls: ['./board.cols.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BoardColsComponent implements OnInit {
  @Input()
  public column: IColumnModel;

  constructor(private cardService: CardService) { }
  public track(card: ICardModel) {
    return card._id;
  }
  public createCard(name: string){
    // this.cardService.create()
  }
  ngOnInit() {

  }

}
