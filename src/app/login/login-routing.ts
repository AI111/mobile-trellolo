import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login.component';

export const routes: Routes = [
  { path: '', children: [
    { path: '', component: LoginComponent },
    ]
  }
];


