import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {ICardModel} from '../../../common/models/ICardModel';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnChanges {
  @Input()
  public card: ICardModel;
  public cardForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  private createForm(): void {
    this.cardForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      description: ['', Validators.required]
    });
  }
  ngOnInit() {

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.cardForm.patchValue( changes.card.currentValue);
  }
}
