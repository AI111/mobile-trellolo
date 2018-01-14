import { InjectionToken } from '@angular/core';

export let APP_CONFIG = new InjectionToken<IAppConfig>('app.config');
export enum UsersRoleEnum {
  // user:'user',

}
export interface IAppConfig {
  tokenName: string;
  port: string;
  url: string;
}
