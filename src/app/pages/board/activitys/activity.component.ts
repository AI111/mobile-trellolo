import { Component, OnInit } from '@angular/core';
import {ActivityService} from '../services/activity.service';

@Component({
  selector: 'app-activitys',
  templateUrl: './activitys.component.html',
  styleUrls: ['./activitys.component.scss']
})
export class ActivityComponent implements OnInit {

  public rows = [];

  constructor(private activityService: ActivityService) { }

  ngOnInit() {
    this.activityService.getAll({project: 1})
      .subscribe((val) => {
        console.log(val);
      })
  }
setPage(ev){
  console.log(ev);
}
}
