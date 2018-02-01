import {Component, ElementRef, forwardRef, Input, OnInit, ViewChild} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {MarkdownService} from '../markdown.service';

@Component({
  selector: 'app-md-editor',
  templateUrl: './md-editor.component.html',
  styleUrls: ['./md-editor.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MdEditorComponent),
      multi: true
    }
  ]
})
export class MdEditorComponent implements OnInit, ControlValueAccessor {
  @Input('value')
  public _value: string;
  public md: string;
  @ViewChild('dataContainer')
  mdContainer: ElementRef;

  public edit = false;

  constructor(private mdService: MarkdownService) { }

  get value() {
    return this._value;
  }

  set value(val) {
    console.log(val);
    this._value = val;
    this.onChange(val);
    this.onTouched();
  }

  toggle() {
    this.edit = !this.edit;
    if(!this.edit)this.compileMd();
  }
  writeValue(obj: any): void {
  }

  registerOnChange(fn: (text: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  private onChange = (text: string): void => {

  }
  onTouched = () => {

  }
  ngOnInit() {
  }

  private compileMd(){
    // console.log(this.mdContainer.nativeElement);
    // this.mdContainer.nativeElement.innerHTML = this.mdService.compileMd(this.value);
    this.md = this.mdService.compileMd(this.value);
  }
}
