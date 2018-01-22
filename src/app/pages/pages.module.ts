import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PagesComponent} from './pages.component';
import {RouterModule} from '@angular/router';
import {routes} from './pages.routing';
import {MatButtonModule, MatIconModule, MatListModule, MatSelectModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {NavigationPanelComponent} from './common/navigation-panel/navigation-panel.component';
import {FormsModule} from '@angular/forms';
import {HomeModule} from './home/home.module';

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
    HomeModule
  ],

  declarations: [PagesComponent, NavigationPanelComponent]
})
export class PagesModule { }
