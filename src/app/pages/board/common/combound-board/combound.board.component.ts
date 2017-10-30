import {AfterViewInit, Component, Input, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {IBoardModel} from '../../../../common/models/IBoardModel';
import {Subscription} from 'rxjs/Subscription';
import {DragulaService} from 'ng2-dragula';
import {Dragula, DragulaOptions, Drake} from 'dragula';
import {DndBoardService} from '../dnd-board.service';

@Component({
  selector: 'app-combound-board',
  templateUrl: './combound.board.component.html',
  styleUrls: ['./combound.board.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ComboundBoardComponent implements OnInit, AfterViewInit{

  @Input()
  public data: IBoardModel;
  constructor(private dndService: DndBoardService) {
  }

  ngOnInit() {
    this.dndService.initDraggular();
    this.dndService.initData(this.data);
    this.dndService.columnDrop
      .subscribe((col) => {
        console.log(col);
      });
    this.dndService.cardDrop
      .subscribe((col) => {
        console.log(col);
      });
  }
  ngAfterViewInit(): void {
  }
}
