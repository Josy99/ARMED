import { CardContainer} from "./style";
import informacao  from "../../../../assets/logo/Informacoes.svg"

export function Card() {
  return (
    <CardContainer>
          <div>
              <img src={informacao}/>
          </div>
          <p>Informação</p>
    </CardContainer>
  )
}