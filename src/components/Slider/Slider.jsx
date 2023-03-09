/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import { A11y, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper } from 'swiper/react';
import './Slider.css';

export default function Slider({ settings, children }) {
  return (
    <Swiper modules={[Pagination, A11y]} {...settings}>
      {children}
    </Swiper>
  );
}
