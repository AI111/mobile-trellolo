import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'board-column-header',
  templateUrl: './column-header.component.html',
  styleUrls: ['./column-header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ColumnHeaderComponent implements OnInit {
  @Input()
  public title: string;
  @Output()
  public cardCreate: EventEmitter<string> = new EventEmitter<string>();
  public open: boolean;
  public cardForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }
  public onSubmit() {
    console.log(this.cardForm);
   if (this.cardForm.valid) this.cardCreate.next(this.cardForm.value.name);
  }
  public toggle(): void{
    console.log(this.open);
    this.open = !this.open;
  }
  public clearData(): void {
    this.cardForm.reset();
  }
  private createForm() {
    this.cardForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]]
    });
  }
}
