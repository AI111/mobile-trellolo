import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';
import {routes} from './pages.routing';
import {MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatSelectModule} from '@angular/material';
import {NavigationPanelComponent} from './common/navigation-panel/navigation-panel.component';

@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatSelectModule,
    MatIconModule,
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [PagesComponent, HomeComponent, NavigationPanelComponent]
})
export class PagesModule { }
