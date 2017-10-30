import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'board-column-header',
  templateUrl: './column-header.component.html',
  styleUrls: ['./column-header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ColumnHeaderComponent implements OnInit {
  @Input()
  title: string;
  constructor() { }

  ngOnInit() {
  }

}