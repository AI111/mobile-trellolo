import {Component, Input, OnInit} from '@angular/core';
import {IMenuItem} from '../IMenuItem';
import {ProjectService} from '../../../common/project.service';
import {Observable} from 'rxjs/Observable';
import {IProjectModel} from '../../../common/models/IProjectModel';

@Component({
  selector: 'app-navigation-panel',
  templateUrl: './navigation-panel.component.html',
  styleUrls: ['./navigation-panel.component.scss']
})
export class NavigationPanelComponent implements OnInit {

  projects: Observable<IProjectModel[]>;

  constructor(private projectService: ProjectService) {
    this.projects = projectService.getAll();
  }
  ngOnInit(): void {
  }


}
