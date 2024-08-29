import { Slider } from "./components/SwiperSlider"
import { SwiperProps, SwiperSlide } from "swiper/react";
import { CardSlider } from "../Card";


export function  Sliders() {
  const  settings: SwiperProps = {
    spaceBetween: 20,
    slidesPerView: 3,
    loop: false,
    draggable: true,
    pagination: {
      clickable: true
    },
  }
  return  (
    <Slider  settings = {settings}>
          <SwiperSlide>
              <CardSlider/>
          </SwiperSlide>
          <SwiperSlide>
              <CardSlider/>
          </SwiperSlide>
          <SwiperSlide>
              <CardSlider/>
          </SwiperSlide>
          <SwiperSlide>
              <CardSlider/>
          </SwiperSlide>
          <SwiperSlide>
              <CardSlider/>
          </SwiperSlide><SwiperSlide>
              <CardSlider/>
          </SwiperSlide>
      </Slider>
  )
}