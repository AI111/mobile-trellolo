// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

import {IAppConfig} from '../app/common/IAppConfig';

export const environment = {
  production: false,
  end: 'dev'
};

export const config: IAppConfig = {
  tokenName: 'token',
  url: 'http://localhost',
  port: '4200'
};
