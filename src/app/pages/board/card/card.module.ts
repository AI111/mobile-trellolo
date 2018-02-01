import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardComponent} from './card.component';
import {CardPopupComponent} from './card-popup.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MdEditorModule} from '../../../common/md-editor/md-editor.module';

@NgModule({
  imports: [
    MdEditorModule,
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [CardComponent, CardPopupComponent]
})
export class CardModule { }
