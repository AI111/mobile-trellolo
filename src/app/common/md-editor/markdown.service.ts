import { Injectable } from '@angular/core';
// import {setOptions, Renderer} from 'marked';
import * as md from 'marked';
import {MarkedOptions} from 'marked';

@Injectable()
export class MarkdownService {
  private _renderer = new md.Renderer();

  constructor() {
    this.setMarkedOptions();
  }
  public setMarkedOptions(options: any = {}) {
    md.setOptions(Object.assign(
      {
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
        render: this._renderer
      } as MarkedOptions,
      options
    ));
  }
}
