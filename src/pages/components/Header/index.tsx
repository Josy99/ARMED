import { HeaderContainer, Logo, NavLink} from "./style";
import  logoArmed from "../../../assets/logo/logoArmed.svg"
import { Link} from "react-router-dom"

export function HeaderProfile() {
  return  (
        <HeaderContainer>
              <Logo src= {logoArmed} alt="" />
              <NavLink>
  
              </NavLink>
         </HeaderContainer>
  )
}