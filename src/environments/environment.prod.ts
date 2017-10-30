import {IAppConfig} from '../app/common/IAppConfig';

export const environment = {
  production: true,
  end: 'production'
};

export const config: IAppConfig = {
  tokenName: 'token',
  userKey: 'user',
  serverUrl: '/',
  url: '/',
  port: '4200',
  chatNamespace: 'rooms',
  boardNamespace: 'boards',
};
