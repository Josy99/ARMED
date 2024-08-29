export interface IUser {
  email?:  string,
  token?: string  
}

export interface Icontext extends IUser {
  authenticate: (emai:  string, password: string ) => Promise<void>;
  logout: () => void
 }

 export interface IAuthProvider {
  children: JSX.Element
 }