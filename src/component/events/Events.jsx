"use client";
import React, { useState, useRef } from "react";
import "@/component/events/Events.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function Events() {
  const [imgs, setImgs] = useState([
    {
      id: 1,
      img: "/assets/Frame 811332.png",
    },
    {
      id: 2,
      img: "/assets/Frame 811333.png",
    },
    {
      id: 3,
      img: "/assets/Frame 811334.png",
    },
    {
      id: 4,
      img: "/assets/Frame 811332.png",
    },
    {
      id: 5,
      img: "/assets/Frame 811334.png",
    },
    {
      id: 6,
      img: "/assets/Frame 811333.png",
    },
  ]);
  return (
    <div className="events container">
        <p className="events-title">Мероприятия</p>  
      <div className="events-cards events-cards__one">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
        //   pagination={{
        //     clickable: true,
        //   }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            {imgs.slice(0, 1).map((img) => (
              <div className="events-card" key={img.id}>
                <img src={img.img} alt="" />
              </div>
            ))}
          </SwiperSlide>
          <SwiperSlide>
            {imgs.slice(1, 2).map((img) => (
              <div className="events-card" key={img.id}>
                <img src={img.img} alt="" />
              </div>
            ))}
          </SwiperSlide>
          <SwiperSlide>
            {imgs.slice(2, 3).map((img) => (
              <div className="events-card" key={img.id}>
                <img src={img.img} alt="" />
              </div>
            ))}
          </SwiperSlide>
          <SwiperSlide>
            {imgs.slice(4, 5).map((img) => (
              <div className="events-card" key={img.id}>
                <img src={img.img} alt="" />
              </div>
            ))}
          </SwiperSlide>
          <SwiperSlide>
            {imgs.slice(5, 6).map((img) => (
              <div className="events-card" key={img.id}>
                <img src={img.img} alt="" />
              </div>
            ))}
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="events-cards events-cards__two">
        <Swiper
         spaceBetween={30}
         centeredSlides={true}
         autoplay={{
           delay: 2500,
           disableOnInteraction: false,
         }}
        //  pagination={{
        //    clickable: true,
        //  }}
        //  navigation={true}
         modules={[Autoplay, Pagination, Navigation]}
         className="mySwiper"
        >
          <SwiperSlide>
            {imgs.slice(0, 1).map((img) => (
              <div className="new-events__card" key={img.id}>
                <img src={img.img} alt="" />
              </div>
            ))}
          </SwiperSlide>
          <SwiperSlide>
            {imgs.slice(1, 2).map((img) => (
              <div className="new-events__card" key={img.id}>
                <img src={img.img} alt="" />
              </div>
            ))}
          </SwiperSlide>
          <SwiperSlide>
            {imgs.slice(2, 3).map((img) => (
              <div className="new-events__card" key={img.id}>
                <img src={img.img} alt="" />
              </div>
            ))}
          </SwiperSlide>
          <SwiperSlide>
            {imgs.slice(4, 5).map((img) => (
              <div className="new-events__card" key={img.id}>
                <img src={img.img} alt="" />
              </div>
            ))}
          </SwiperSlide>
          <SwiperSlide>
            {imgs.slice(5, 6).map((img) => (
              <div className="new-events__card" key={img.id}>
                <img src={img.img} alt="" />
              </div>
            ))}
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
