import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AuthModule} from './common/service.module';
import {PreloadAllModules, RouterModule} from '@angular/router';
import {ROUTES} from './app.router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatToolbarModule} from '@angular/material';
import {config} from '../environments/environment';
import {APP_CONFIG} from './common/IAppConfig';
import {AuthGuard} from './common/permissions.service';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, AuthModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    RouterModule.forRoot(ROUTES, {
      useHash: Boolean(history.pushState) === false,
      preloadingStrategy: PreloadAllModules
    }),
  ],
  providers: [
    {provide: APP_CONFIG, useValue: config},
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
