import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ComboundBoardComponent} from './combound-board/combound.board.component';
import {BoardCardComponent} from './board-card/board.card.component';
import {BoardColsComponent} from './board-cols/board.cols.component';
import {DragulaModule} from 'ng2-dragula';
import { ColumnHeaderComponent } from './column-header/column-header.component';
import {MatButtonModule, MatExpansionModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule,} from '@angular/material';
import {DndBoardService} from './dnd-board.service';
import { CardUserListComponent } from './card-user-list/card-user-list.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CardPopupComponent } from './card-popup/card-popup.component';
import {RouterModule} from '@angular/router';

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
    ReactiveFormsModule
  ],
  declarations: [
    ComboundBoardComponent,
    BoardColsComponent,
    BoardCardComponent,
    ColumnHeaderComponent,
    CardUserListComponent,
    CardPopupComponent
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
