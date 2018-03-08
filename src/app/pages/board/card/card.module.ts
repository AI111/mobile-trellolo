import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from './card.component';
import {CardPopupComponent} from './card-popup.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MdEditorModule} from '../../../common/md-editor/md-editor.module';
import {CardActivityComponent} from './card-activity/card-activity.component';
import {CardCommentsComponent} from './card-comments/card-comments.component';
import {RouterModule} from '@angular/router';
import {MatMenu, MatMenuModule, MatTabsModule} from '@angular/material';
import {MultiSelectModule} from '../../../common/multi-select/multi-select.module';

@NgModule({
  imports: [
    MdEditorModule,
    CommonModule,
    ReactiveFormsModule,
    MatTabsModule,
    RouterModule,
    MultiSelectModule
  ],
  declarations: [
    CardComponent,
    CardPopupComponent,
    CardActivityComponent,
    CardCommentsComponent]
})
export class CardModule { }
