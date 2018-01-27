import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ComboundBoardComponent} from './combound-board/combound.board.component';
import {BoardCardComponent} from './board-card/board.card.component';
import {BoardColsComponent} from './board-cols/board.cols.component';
import {DragulaModule} from 'ng2-dragula';
import { ColumnHeaderComponent } from './column-header/column-header.component';
import {MatButtonModule, MatExpansionModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule} from '@angular/material';
import {DndBoardService} from './dnd-board.service';
import {ReactiveFormsModule} from '@angular/forms';
import { CardPopupComponent } from './card-popup/card-popup.component';
import {RouterModule} from '@angular/router';
import {CardComponent} from './card/card.component';
import { NewColComponent } from './new-col/new-col.component';

@NgModule({
  imports: [
    CommonModule,
    DragulaModule,
    RouterModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ComboundBoardComponent,
    BoardColsComponent,
    BoardCardComponent,
    ColumnHeaderComponent,
    CardPopupComponent,
    CardComponent,
    NewColComponent,
  ],
  providers: [
    DndBoardService
  ],
  exports: [
    ComboundBoardComponent,
    BoardColsComponent,
    BoardCardComponent,
    CardComponent,
  ]
})
export class BoardCommonModule { }
