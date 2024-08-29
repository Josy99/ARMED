import { FooterContainer, Logo } from "./style";
import minsa from "../../assets/logo/logoMinsa.svg"
import armed from "../../assets/logo/logoArmed.svg"

export function Footer(){
  return (
  <FooterContainer>
      <Logo>
         <img src= {minsa}/>
         <img src= {armed}/>
      </Logo>
      <div>
          <p>
          Tel. (+244) 945 817 227 | E-mail: armed@cnp.ao <br />
          expediente@armed.gov.ao| www.armed.cnp.ao <br />
          Rua Cmdt. Che-Guevara N° 86/86A,<br />
          Maculusso, Luanda - Angola 
          </p>
         <a href="">Regras, politicas e serviços</a> 
      </div>

  </FooterContainer>
  )
}