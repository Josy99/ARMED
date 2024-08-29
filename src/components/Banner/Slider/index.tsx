import { Slider } from "./components/SwiperSlider"
import { SwiperProps, SwiperSlide } from "swiper/react"
import imgBanner1 from "../../../assets/imagens/Slide1.jpg"
import imgBanner2 from "../../../assets/imagens/Slider2.jpg"
import imgBanner3 from "../../../assets/imagens/Slider3.jpg"
import imgBanner4 from "../../../assets/imagens/Slider4.jpg"


export function  SliderBanner() {
  const  settings: SwiperProps = {
    slidesPerView: 1,
    loop: false,
    draggable: true,
    pagination: {
      clickable: true
    },
  }
  return  (
    <Slider  settings = {settings}>
          <SwiperSlide>
            <img src= {imgBanner1} alt="" />   
          </SwiperSlide>
          <SwiperSlide>
            <img src= {imgBanner2} alt="" />   
          </SwiperSlide>
          <SwiperSlide>
            <img src= {imgBanner3} alt="" />   
          </SwiperSlide>
          <SwiperSlide>
            <img src= {imgBanner4} alt="" />   
          </SwiperSlide>
      </Slider>
  )
}