import {Routes} from '@angular/router';
import {CardCommentsComponent} from './card-comments/card-comments.component';
import {CardActivityComponent} from './card-activity/card-activity.component';
import {CARD_RESOLVE} from '../services/board.providers';
import {CardPopupComponent} from './card-popup.component';

export const routes: Routes = [
  {
    path: '',

    component: CardPopupComponent,

    children: [
      {
        path: '', component: CardCommentsComponent
      },
      {
        path: 'comments', component: CardCommentsComponent
      },
      {
        path: 'history', component: CardActivityComponent
      },
    ]
  }

];
