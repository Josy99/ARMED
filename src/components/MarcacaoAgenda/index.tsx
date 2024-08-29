import { ArrowDown } from "phosphor-react";
import { MarcaoAgenda } from "./style";

export function MarcacaoAgenda() {
  return (
    <MarcaoAgenda>
       <h2>Marcação de Agenda</h2>

       <button>
        <ArrowDown />
        BAIXAR MANUAL
       </button>
    </MarcaoAgenda>
  )
}