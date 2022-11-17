import { Swiper } from 'swiper/react';
import { EffectFade, Navigation, Pagination, Autoplay, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import "swiper/css/effect-fade";
import './Slider.css';


export default function Slider({ settings, children }) {
  return (
    <Swiper modules={[EffectFade, Navigation, Pagination, Autoplay, A11y]} {...settings}>
      {children}
    </Swiper>
  );
}