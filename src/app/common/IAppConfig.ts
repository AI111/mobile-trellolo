import { InjectionToken } from '@angular/core';

export let APP_CONFIG = new InjectionToken<IAppConfig>('app.config');
export enum UsersRoleEnum {
  // user:'user',

}
export interface IAppConfig {
  tokenName: string;
  userKey: string;
  port: string;
  url: string;
  serverUrl: string;
  chatNamespace: string;
  boardNamespace: string;
}
