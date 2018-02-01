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
import {RouterModule} from '@angular/router';
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
    NewColComponent,
  ],
  providers: [
    DndBoardService
  ],
  exports: [
    ComboundBoardComponent,
    BoardColsComponent,
    BoardCardComponent,
  ]
})
export class BoardCommonModule { }
