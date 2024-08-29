import { LinksContainer, Content} from "./style";
import  world_Health from "../../assets/logo/Link/oms.png"
import  thewordbank from "../../assets/logo/Link/thewordbank.png"
import  pnud from "../../assets/logo/Link/pnud.png"
import  ofa from "../../assets/logo/Link/ofa.svg"
import  of from "../../assets/logo/Link/of.png"
import  anvisa from "../../assets/logo/Link/anvisa.png"
import  infarmed from "../../assets/logo/Link/infarmed.png"
import  inis from "../../assets/logo/Link/inis.png"




export function  Links(){
  return (
    <LinksContainer>
      <Content>
        <h2>Links</h2>
          <div>
            <img src={world_Health} alt="" />
            <img src={thewordbank} alt="" />
            <img src={pnud} alt="" />
            <img src={ofa} alt="" />
            <img src={of} alt="" />
            <img src={anvisa} alt="" />
            <img src={infarmed} alt="" />
            <img src={inis} alt="" />
          </div>
      </Content>
    </LinksContainer>
  )
}