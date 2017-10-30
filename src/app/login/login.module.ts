import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login.component';
import {RouterModule} from '@angular/router';
import {routes} from './login-routing';
import {MatInputModule, MatButtonModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [LoginComponent]
})
export class LoginModule {
  public static routes = routes;
}
