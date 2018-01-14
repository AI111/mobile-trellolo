import {IUser} from './IUser';

export interface IAuthModel extends IUser{
  token: string;
}
export interface ILocalAuthRequest{
  email: string;
  password: string;
}
