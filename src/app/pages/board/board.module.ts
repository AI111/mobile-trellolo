import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardComponent } from './board.component';
import {routes} from './board.routing';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

  ],
  declarations: [BoardComponent]
})
export class BoardModule { }
