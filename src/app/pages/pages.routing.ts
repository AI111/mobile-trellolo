import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PagesComponent} from './pages.component';
import {HomeComponent} from './home/home.component';

export const routes: Routes = [
  { path: '',
    component: PagesComponent,
    children: [
      // { path: '', pathMatch: 'full', redirectTo: '' },

      { path: '', component: HomeComponent },
      { path: 'chat', loadChildren: './chat#ChatModule'},
      { path: 'boards', loadChildren: './board#BoardModule'}
    ]
  }
];


