import React, { useState, CSSProperties } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { action } from '@storybook/addon-actions';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper/modules";


import "swiper/css/bundle" 




function StoreCard({img, name, price, id, setcardinfo, handleis, is}) {
    const [hover, sethover] = useState()
    

   
        
    
       
    return (
  
      // data-aos="fade-up" data-aos-anchor-placement="center-bottom"  data-aos-duration="1000" data-aos-easing="ease"
      <div  className=' flex flex-col justify-between  mb-[80px]  w-[392px] h-[393px] select-none '
      onClick={() => {
        setcardinfo(id)
        handleis(is)
        
        
      }}
      >
        <div onMouseEnter={() => sethover(true)} onMouseLeave={() => sethover(false)}>
            {hover?  
            <Swiper
            slidesPerView={1}
            spaceBetween={5}
            pagination={{
              clickable: true,
              type: "progressbar",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {img.map((item) => {
                return <SwiperSlide><img src={'http://127.0.0.1:5555' + item} alt="" className='  w-[392px] h-[393px] ' /></SwiperSlide>

            })}
        </Swiper>
           
            
            // <img src={'http://127.0.0.1:5555' + img[1]} alt="" className='  min-w-[392px] min-h-[393px]' onMouseEnter={() => sethover(true)} onMouseLeave={() => sethover(false)}/>
            :  
            
            <img src={'http://127.0.0.1:5555' + img[0]} alt="" className='min-h-[393px]  min-w-[392px]' />}
            
        </div>
         
          <h1 className='product--title text-md'>{name}</h1>
          <p className='pro--price text-gray-500 text-md '>Ksh {price}</p>
      </div>
    )
  }

export default StoreCard;