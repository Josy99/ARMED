import  "styled-components"
import { defaultThemes } from "../styles/themes/defaultThemes"

type  TypeThemes  =  typeof defaultThemes

declare module  'styled-components' {
  export interface DefaultTheme extends TypeThemes{}
 }