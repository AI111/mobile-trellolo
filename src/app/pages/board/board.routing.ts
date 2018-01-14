import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BoardComponent} from './board.component';

export const routes: Routes = [
  {path: '', children: [
    {path: '', component: BoardComponent}
  ]}
];
