import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from '@angular/router';
import {ICardModel} from '../../../common/models/ICardModel';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-card-popup',
  templateUrl: './card-popup.component.html',
  styleUrls: ['./card-popup.component.scss']
})
export class CardPopupComponent implements OnInit {
  public card: Observable<ICardModel>;
  public cardModel: ICardModel;

  constructor(private router: Router,
              private route: ActivatedRoute) {
    this.card = this.route.data.map((data) => (this.cardModel = data.card));
  }

  ngOnInit() {


  }
  closePopup(ev) {
    // Providing a `null` value to the named outlet
    // clears the contents of the named outlet
    this.router.navigate([{ outlets: { popup: null ,  primary: ['boards', this.cardModel.boardId]}}])

  }
}
