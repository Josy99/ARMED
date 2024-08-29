import { HeaderContainer, Logo, NavLink, SocialMidea} from "./style";
import  logoArmed from "../../assets/logo/logoArmed.svg"
import { useNavigate } from "react-router-dom";
import { Link} from "react-router-dom"
import { FacebookLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";

export function Header() {
  return  (
        <HeaderContainer>
              <Logo src= {logoArmed} alt="" />
              <NavLink>
                <ul>
                  <li><Link to="">INÍCIO</Link></li>
                  <span>|</span>
                  <li><Link to="">SOBRE NÓS</Link></li>
                  <span>|</span>
                  <li><Link to="">FARMACOVIGILÂNCIA</Link></li>
                  <span>|</span>
                  <li><Link to="">LESGILAÇÃO  E DOCUMENTOS</Link></li>
                  <span>|</span>
                  <li><Link to="">CONTANTOS</Link></li>
                  <span>|</span>
                  <li><Link to="/login">LOGIN</Link></li>
                </ul>
              </NavLink>
              <SocialMidea>
                 <FacebookLogo size={24}/>
                 <InstagramLogo size={24}/>
                 <LinkedinLogo size={24}/>
              </SocialMidea>
         </HeaderContainer>
  )
}