import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import './review.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function TempReviewCarousel() {
  return (
    <div className='container'>
   
    <div>
    <Swiper
      breakpoints={{
        // when window width is >= 640px
        640: {
          width: 640,
          slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
          width: 768,
          slidesPerView: 2,
        },
      }}
      spaceBetween={50}
      
      modules={[Navigation, Pagination, A11y]}
      navigation
      pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
         <SwiperSlide>  <ReviewCard /></SwiperSlide>
         <SwiperSlide>  <ReviewCard /></SwiperSlide>
         <SwiperSlide>  <ReviewCard /></SwiperSlide>
         <SwiperSlide>  <ReviewCard /></SwiperSlide>
    </Swiper>
    </div>
    </div>
  )
}

export default TempReviewCarousel