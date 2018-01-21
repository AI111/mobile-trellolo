import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-card-popup',
  templateUrl: './card-popup.component.html',
  styleUrls: ['./card-popup.component.scss']
})
export class CardPopupComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    console.log('CardPopupComponent');
  }
  closePopup() {
    console.log('closePopup');
    // Providing a `null` value to the named outlet
    // clears the contents of the named outlet
    this.router.navigate([{ outlets: { popup: null }}]);
  }
}
