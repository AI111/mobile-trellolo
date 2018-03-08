import { Injectable } from '@angular/core';
// import {setOptions, Renderer} from 'marked';
import * as md from 'marked';
import {MarkedOptions} from 'marked';
import * as highlight from  'highlight.js';
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
        render: this._renderer,
        // highlight: (code, lang) => prism.highlight(code, prism.languages[lang || 'markup']),
        highlight: (code, lang) => highlight.highlightAuto(code).value,
      } as MarkedOptions,
      options
    ));
  }
  public compileMd(val: string): string{
    return md(val);
  }
}
