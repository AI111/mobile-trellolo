import {InjectionToken, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import {HomeComponent} from './home/home.component';
import {Router, RouterModule} from '@angular/router';
import {routes} from './pages.routing';
import {MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatSelectModule} from '@angular/material';
import {NavigationPanelComponent} from './common/navigation-panel/navigation-panel.component';
import {FormsModule} from '@angular/forms';
import {IBaseCRUDServicr} from '../common/IBaseCRUDServicr';
import {AbstractDataResolver, dataResolveFactory} from '../common/AbstractDataResolver';
import {ActivityService} from './board/services/activity.service';
import {IActivityModel} from '../common/models/IActivityModel';

@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatSelectModule,
    MatIconModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],

  declarations: [PagesComponent, HomeComponent, NavigationPanelComponent]
})
export class PagesModule { }
