import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import "./styles/DefaultCarousel.css"
import { Autoplay } from 'swiper/modules';
import VerticalSlide from "../utilities/VerticalSlide.jsx";

import img1 from "../assets/Carousel/Slide_1.png"

const DefaultCarousel = () => {
  return (
    <Swiper
      loop={true}
      slidesPerView={1}
      direction="vertical"
      modules={[Autoplay]}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      className="verticalSwiper"
    >
      <SwiperSlide>
        <div className="slide-content">
          <h2>Website Service</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-content">
          <h2>Welcome to my website one</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <VerticalSlide
          imgSrc={img1}
          color="#FFFFF"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default DefaultCarousel;