import {Component, Input, OnInit} from '@angular/core';
import {IMenuItem} from '../IMenuItem';
import {ProjectService} from '../../../common/project.service';
import {Observable} from 'rxjs/Observable';
import {IProjectModel} from '../../../common/models/IProjectModel';
import {MatSelectChange} from '@angular/material';

@Component({
  selector: 'app-navigation-panel',
  templateUrl: './navigation-panel.component.html',
  styleUrls: ['./navigation-panel.component.scss']
})
export class NavigationPanelComponent implements OnInit {

  projects: Observable<IProjectModel[]>;
  projectId: number;
  constructor(private projectService: ProjectService) {
    this.projects = projectService.getAll();
  }
  public onProjectChange(e: MatSelectChange): void{
    this.projectService.projectId = e.value;
  }
  ngOnInit(): void {
   this.projectId = this.projectService.projectId;
  }


}
