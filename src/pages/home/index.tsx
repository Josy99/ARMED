import { Banner } from "../../components/Banner";
import { Destaque } from "../../components/Destaque";
import { Links } from "../../components/Links";
import { MarcacaoAgenda } from "../../components/MarcacaoAgenda";
import { Noticias } from "../../components/Noticias";
import { Servicos } from "../../components/Servicos";

export function Home() {
  return (
    <>
      <Banner/>
      <Servicos/>
      <Noticias/>
      <MarcacaoAgenda/>
      <Destaque/>
      <Links/>
    </>
  )
}