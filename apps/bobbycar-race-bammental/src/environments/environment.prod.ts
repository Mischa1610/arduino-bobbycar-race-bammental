import { environment as environmentBase } from './environment.base';

export const environment = {
  ...environmentBase,

  env: 'PROD',
  production: true,
};
