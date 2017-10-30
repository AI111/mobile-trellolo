import { Routes } from '@angular/router';
import { LoginModule } from './login/login.module';
import {AuthGuard} from './common/permissions.service';


export const ROUTES: Routes = [
  { path: '',      loadChildren: './pages#PagesModule', canActivate: [AuthGuard] },
  { path: 'login', loadChildren: './login#LoginModule'},
];
