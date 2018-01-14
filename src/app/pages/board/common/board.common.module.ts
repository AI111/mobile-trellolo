import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ComboundBoardComponent} from './combound-board/combound.board.component';
import {BoardCardComponent} from './board-card/board.card.component';
import {BoardColsComponent} from './board-cols/board.cols.component';
import {DragulaModule} from 'ng2-dragula';
import { ColumnHeaderComponent } from './column-header/column-header.component';
import {MatExpansionModule, MatFormFieldModule, MatInputModule,} from '@angular/material';
import {DndBoardService} from './dnd-board.service';

@NgModule({
  imports: [
    CommonModule,
    DragulaModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [
    ComboundBoardComponent,
    BoardColsComponent,
    BoardCardComponent,
    ColumnHeaderComponent
  ],
  providers: [
    DndBoardService
  ],
  exports: [
    ComboundBoardComponent,
    BoardColsComponent,
    BoardCardComponent
  ]
})
export class BoardCommonModule { }
