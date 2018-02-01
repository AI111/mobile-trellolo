import {Routes, RouterModule} from '@angular/router';
import {BoardComponent} from './board.component';
import {ActivityComponent} from './activitys/activity.component';
import {TaskBoardComponent} from './task-board/task-board.component';
import {BOARD_RESOLVE, BOARDS_RESOLVE, CARD_RESOLVE} from './services/board.providers';
import {CardPopupComponent} from './card/card-popup.component';

export const routes: Routes = [
  {
    path: '', component: BoardComponent,
        resolve: {
          boards: BOARDS_RESOLVE,
        }
  },
  {
    path: ':id', component: TaskBoardComponent,
    resolve: {
      board: BOARD_RESOLVE
    },
    children: [
      {

        path: 'card/:cardId',
        component: CardPopupComponent,
        outlet: 'popup',
        pathMatch: 'prefix',
        resolve: {
          card: CARD_RESOLVE
        }
      },
    ]
  },

  {path: 'activity', component: ActivityComponent}
];
