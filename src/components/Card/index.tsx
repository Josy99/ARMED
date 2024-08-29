import { CardSliderContent } from "./style";
import image from "../../assets/imagens/Slide1.jpg"
export function CardSlider() {
  return (
    <CardSliderContent>
        <img src={image} />
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt 
            eveniet, cum sequi expedita, ex sed quis libero cupiditate ipsa 
          </p>
        </div>
    </CardSliderContent>
  )
}