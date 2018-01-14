import {ElementRef, Inject, Injectable} from '@angular/core';
import {APP_CONFIG} from '../../../common/IAppConfig';
import {AuthService} from '../../../common/auth.service/auth.service';
import {SocketService} from '../../../common/socket.service';
import {DragulaOptions} from 'dragula';
import {DragulaService} from 'ng2-dragula';
import {Observable} from 'rxjs/Observable';
import {IColumnModel} from '../../../common/models/IColumModel';
import {ICardModel} from '../../../common/models/ICardModel';
import {IBoardModel} from '../../../common/models/IBoardModel';
import {ColumnService} from '../services/column.service';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import {CardService} from '../services/card.service';

@Injectable()
export class DndBoardService {
  constructor(@Inject(APP_CONFIG) protected config,
              private authService: AuthService,
              private dragulaService: DragulaService,
              private columnService: ColumnService,
              private cardService: CardService,
              private socketService: SocketService) {
  }
  public boardData: Observable<IBoardModel>;
  public columnDrop: Observable<IColumnModel>;
  public cardDrop: Observable<ICardModel>;
  private data: IBoardModel;
  public initDraggular(): void {
    console.log('initDraggular');
    this.dragulaService.setOptions('board', {
      moves: function (el, container, handle) {
        return handle.classList.contains('handle');
      },
      // revertOnSpill: true,
      direction: 'horizontal',
    } as DragulaOptions);
    this.dragulaService.setOptions('column', {
      revertOnSpill: true
    } as DragulaOptions);


    this.dragulaService.drop.subscribe((value) => {

      console.log(value);
    });
    this.dragulaService.over.subscribe((value) => {
      console.log(`over: ${value}`);
    });
  }
  public initData(data: IBoardModel){
    this.data = data;
    this.columnDrop = this.dragulaService.dropModel.asObservable()
      .filter(([bag, to , from]: [string, Element, Element]) => bag === 'board')
      .map(([bag, to , from]: [string, Element, Element]) => {
        const columnId = parseInt(to.attributes['data-id'].value, 10);
        const column: IColumnModel = this.data.columns.find((el) => el._id === columnId);
        const index = this.data.columns.indexOf(column);
        column.position = index + 1;
        return column;
      })
      .flatMap((column) => this.columnService.update(column));
  this.cardDrop =
    this.dragulaService.dropModel.asObservable()
      .filter(([bag, el, to , from]: [string, Element, Element, Element]) => bag === 'column')
      .map(([bag, el, to , from]: [string, Element, Element, Element]) => {
        const cardId = parseInt(el.attributes['card-id'].value, 10);
        const columnId = parseInt(to.attributes['column-id'].value, 10);
        const cards: ICardModel[] = this.data.columns.find((col) => col._id === columnId).cards;
        const card = cards.find((c) => c._id === cardId);
        const index = cards.indexOf(card);
        card.position = index + 1;
        card.columnId = columnId;
        return card; // Object.assign(card, {columnId, position: index + 1});
      })
      .flatMap((card) => this.cardService.update(card));

  }
}
