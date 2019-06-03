export interface RawAuthType {
  user: RawUserType;
}

export interface RawUserType {
  avatar: string;
  reposUrl: string;
  token: string;
  username: string;
}
export interface RawGeneralType {
  error: string;
  loading: boolean;
}

export interface StateType {
  error: string;
  loading: boolean;
}
