export interface IAuthResponse {
  accessToken: string;
  refreshToken: string;
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
}

export interface ILogin {
  username: string;
  password: string;
}

export interface IAuthContext {
  user: string | null;
  login: (data: ILogin) => Promise<void>;
  logout: () => void;
  isAuth: boolean;
}