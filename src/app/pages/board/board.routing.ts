import { Routes, RouterModule } from '@angular/router';
import {BoardComponent} from './board.component';
import {ActivityComponent} from './activitys/activity.component';
import {TaskBoardComponent} from './task-board/task-board.component';
import {BOARD_RESOLVE} from './services/board.providers';

export const routes: Routes = [
  {path: '', children: [
    {path: '', component: BoardComponent},

  ]},
  {path: ':id', component: TaskBoardComponent,
    resolve: {
      board: BOARD_RESOLVE
    },
  },
  {path: 'activity', component: ActivityComponent}
];
