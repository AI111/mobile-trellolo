import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {IColumnModel} from '../../../../common/models/IColumModel';
import {ICardModel} from '../../../../common/models/ICardModel';
import {CardService} from '../../services/card.service';
import {ColumnService} from '../../services/column.service';

@Component({
  selector: 'app-board-cols',
  templateUrl: './board.cols.component.html',
  styleUrls: ['./board.cols.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BoardColsComponent implements OnInit {
  @Input()
  public column: IColumnModel;

  constructor(private cardService: CardService,
              private columnService: ColumnService) { }
  public track(card: ICardModel) {
    return card._id;
  }
  public createCard(description: string){
    console.log(description);
    this.cardService.create({
      description,
      columnId: this.column._id,
      boardId: this.column.boardId
    } as ICardModel).subscribe();
  }
  ngOnInit() {

  }

}
