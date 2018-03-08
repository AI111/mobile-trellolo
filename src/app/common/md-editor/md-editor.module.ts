import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdEditorComponent } from './md-editor/md-editor.component';
import {MarkdownService} from './markdown.service';
import {FormsModule} from '@angular/forms';
import {MatButtonModule, MatButtonToggleModule, MatIconModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [MarkdownService],
  declarations: [MdEditorComponent],
  exports: [MdEditorComponent]
})
export class MdEditorModule { }
