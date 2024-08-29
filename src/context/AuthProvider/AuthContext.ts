import { createContext} from "react";
import { Icontext, IAuthProvider } from "./types";

export const AuthContext = createContext<Icontext>({} as Icontext)

export const  AuthProvider({children}: IAuthProvider ) =>{
   
}