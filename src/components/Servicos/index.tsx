import { Card } from "./components/Card";
import { ServicosContainer } from "./style";

export function Servicos() {
  return (
    <ServicosContainer>
           <h2>Serviços</h2>
           <div>
               <Card/>
               <Card/>
               <Card/>
               <Card/>
           </div>
    </ServicosContainer>
  )
}