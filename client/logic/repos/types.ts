import { AxiosInstance } from 'axios'

export interface RawAuthType {
  user: RawUserType;
}

export interface RawUserType {
  avatar: string;
  reposUrl: string;
  token: string;
  username: string;
  repos: object[];
}

export interface UserType {
  user: {
    photoURL: string;
  };
  credential: {
    accessToken: string;
  };
  additionalUserInfo: {
    username: string;
    profile: {
      repos_url: string;
    };
  };
}

export interface RawGeneralType {
  error: string;
  loading: boolean;
}

export interface StoreType {
  $axios: AxiosInstance;
  getters: object;
}

export interface StateType {
  user: RawUserType;
  general: RawGeneralType;
  avatar: string;
  reposUrl: string;
  token: string;
  username: string;
  repos: object[];
}
