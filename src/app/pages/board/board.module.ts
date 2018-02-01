import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BoardComponent} from './board.component';
import {routes} from './board.routing';
import {RouterModule} from '@angular/router';
import {ActivityComponent} from './activitys/activity.component';
import {ActivityService} from './services/activity.service';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {BoardsComponent} from './boards/boards.component';
import {BoardService} from './services/board.service';
import {TaskBoardComponent} from './task-board/task-board.component';
import {DATA_RESOLE_PROVIDERS} from './services/board.providers';
import {BoardCommonModule} from './common/board.common.module';
import {ColumnService} from './services/column.service';
import {CardService} from './services/card.service';
import {MatListModule} from '@angular/material';
import {CardModule} from './card/card.module';

@NgModule({
  imports: [
    MatListModule,
    CommonModule,
    CardModule,
    NgxDatatableModule,
    BoardCommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    BoardComponent,
    ActivityComponent,
    BoardsComponent,
    TaskBoardComponent
  ],
  providers: [ActivityService,
    BoardService,
    ColumnService,
    CardService,
    ... DATA_RESOLE_PROVIDERS]

})
export class BoardModule {
}
