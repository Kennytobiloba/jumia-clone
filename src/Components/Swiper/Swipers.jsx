import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';




// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { assets } from '../../assets/assets';

const Swipers = () => {
  return (
    <div className=' h-[64vh] rounded-2xl'>
       <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={assets.bank} className='w-full h-full object-cover' alt="" />
        </SwiperSlide>
         <SwiperSlide>
          <img src={assets.imgfour} className='w-full h-full object-cover' alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={assets.imgone} className='w-full h-full object-cover' alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={assets.imgfour} className='w-full h-full object-cover' alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={assets.imgotwo} className='w-full h-full object-cover' alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={assets.imgothree}  className='w-full h-full object-cover'alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={assets.imgfour} className='w-full h-full object-cover' alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={assets.imagefive} className='w-full h-full object-cover' alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={assets.imagesix} className='w-full h-full object-cover' alt="" />
        </SwiperSlide>
        
      </Swiper>
    </div>
  )
}

export default Swipers