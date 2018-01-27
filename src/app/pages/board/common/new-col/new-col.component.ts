import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-col',
  templateUrl: './new-col.component.html',
  styleUrls: ['./new-col.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NewColComponent implements OnInit {

  @Output()
  public columnCreate: EventEmitter<string> = new EventEmitter<string>();
  public cardForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  ngOnInit() {
  }
  public onSubmit() {
    if (this.cardForm.valid) {
      this.columnCreate.next(this.cardForm.value.name);
      this.clearData();
    }
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
