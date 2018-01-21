import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {IMenuItem} from '../IMenuItem';
import {ProjectService} from '../../../common/project.service';
import {Observable} from 'rxjs/Observable';
import {IProjectModel} from '../../../common/models/IProjectModel';
import {MatSelectChange} from '@angular/material';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-navigation-panel',
  templateUrl: './navigation-panel.component.html',
  styleUrls: ['./navigation-panel.component.scss']
})
export class NavigationPanelComponent implements OnInit, OnDestroy {

  projects: Observable<IProjectModel[]>;
  project: IProjectModel;
  private projectSubscription: Subscription;
  constructor(private projectService: ProjectService) {
    this.projects = projectService.getAll();
  }
  public onProjectChange(e: MatSelectChange): void{
    console.log(e);
    this.projectService.setProject(e.value);
  }
  ngOnInit(): void {
    this.projectSubscription = this.projectService.project.subscribe((pr) => {
      this.project = pr;
      console.log("PR",pr);
    });
  }
  ngOnDestroy(): void {
    this.projectSubscription.unsubscribe();
  }

}
