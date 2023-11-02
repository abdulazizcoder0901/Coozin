"use client";
import React, { useState, useRef } from "react";
import "@/component/sellers/Sellers.css";
import { FaQuoteLeft } from "react-icons/fa";
import { TbTriangleInvertedFilled } from "react-icons/tb";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function Events() {
  const [cards, setCards] = useState([
    {
      id: 1,
      quote: <FaQuoteLeft />,
      text: "When our designs need an expert opinion or approval, I know I can rely on your agency Thank you for all your help-I will be recommending you to everyone",
      img: "/assets/User Image 01.png",
    },
    {
      id: 2,
      quote: <FaQuoteLeft />,
      text: "When our designs need an expert opinion or approval, I know I can rely on your agency Thank you for all your help-I will be recommending you to everyone",
      img: "/assets/User Image 02.png",
    },
    {
      id: 3,
      quote: <FaQuoteLeft />,
      text: "When our designs need an expert opinion or approval, I know I can rely on your agency Thank you for all your help-I will be recommending you to everyone",
      img: "/assets/User Image 03.png",
    },
    {
      id: 4,
      quote: <FaQuoteLeft />,
      text: "When our designs need an expert opinion or approval, I know I can rely on your agency Thank you for all your help-I will be recommending you to everyone",
      img: "/assets/User Image 02.png",
    },
    {
      id: 5,
      quote: <FaQuoteLeft />,
      text: "When our designs need an expert opinion or approval, I know I can rely on your agency Thank you for all your help-I will be recommending you to everyone",
      img: "/assets/User Image 03.png",
    },
    {
      id: 6,
      quote: <FaQuoteLeft />,
      text: "When our designs need an expert opinion or approval, I know I can rely on your agency Thank you for all your help-I will be recommending you to everyone",
      img: "/assets/User Image 01.png",
    },
  ]);

  return (
    <div className="sellers container">
      <p className="sellers-title">Наши довольные вендоры</p>
      <div className="sellers-cards sellers-cards__one">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          //   pagination={{
          //     clickable: true,
          //   }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          //   navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            {cards.slice(0, 1).map((img) => (
              <div className="sellers-card" key={img.id}>
                <div className="sellers-card__top">
                  <p className="sellers-quote">{img.quote}</p>
                  <p className="sellers-text">{img.text}</p>
                  <p className="icon">
                    <TbTriangleInvertedFilled />
                  </p>
                </div>
                <div className="sellers-card__bottom">
                  <div className="sellers-card__img">
                    <img src={img.img} alt="" />
                  </div>
                  <p className="sellers-name">Name</p>
                  <p className="sellers-job">Designation</p>
                </div>
              </div>
            ))}
          </SwiperSlide>
          <SwiperSlide>
            {cards.slice(1, 2).map((img) => (
              <div className="sellers-card" key={img.id}>
                <div className="sellers-card__top">
                  <p className="sellers-quote">{img.quote}</p>
                  <p className="sellers-text">{img.text}</p>
                  <p className="icon">
                    <TbTriangleInvertedFilled />
                  </p>
                </div>
                <div className="sellers-card__bottom">
                  <div className="sellers-card__img">
                    <img src={img.img} alt="" />
                  </div>
                  <p className="sellers-name">Name</p>
                  <p className="sellers-job">Designation</p>
                </div>
              </div>
            ))}
          </SwiperSlide>
          <SwiperSlide>
            {cards.slice(2, 3).map((img) => (
              <div className="sellers-card" key={img.id}>
                <div className="sellers-card__top">
                  <p className="sellers-quote">{img.quote}</p>
                  <p className="sellers-text">{img.text}</p>
                  <p className="icon">
                    <TbTriangleInvertedFilled />
                  </p>
                </div>
                <div className="sellers-card__bottom">
                  <div className="sellers-card__img">
                    <img src={img.img} alt="" />
                  </div>
                  <p className="sellers-name">Name</p>
                  <p className="sellers-job">Designation</p>
                </div>
              </div>
            ))}
          </SwiperSlide>
          <SwiperSlide>
            {cards.slice(4, 5).map((img) => (
              <div className="sellers-card" key={img.id}>
                <div className="sellers-card__top">
                  <p className="sellers-quote">{img.quote}</p>
                  <p className="sellers-text">{img.text}</p>
                  <p className="icon">
                    <TbTriangleInvertedFilled />
                  </p>
                </div>
                <div className="sellers-card__bottom">
                  <div className="sellers-card__img">
                    <img src={img.img} alt="" />
                  </div>
                  <p className="sellers-name">Name</p>
                  <p className="sellers-job">Designation</p>
                </div>
              </div>
            ))}
          </SwiperSlide>
          <SwiperSlide>
            {cards.slice(5, 6).map((img) => (
              <div className="sellers-card" key={img.id}>
                <div className="sellers-card__top">
                  <p className="sellers-quote">{img.quote}</p>
                  <p className="sellers-text">{img.text}</p>
                  <p className="icon">
                    <TbTriangleInvertedFilled />
                  </p>
                </div>
                <div className="sellers-card__bottom">
                  <div className="sellers-card__img">
                    <img src={img.img} alt="" />
                  </div>
                  <p className="sellers-name">Name</p>
                  <p className="sellers-job">Designation</p>
                </div>
              </div>
            ))}
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="sellers-cards sellers-cards__two">
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
            {cards.slice(0, 1).map((img) => (
              <div className="new-sellers__card" key={img.id}>
                <div className="sellers-card__top">
                  <p className="sellers-quote">{img.quote}</p>
                  <p className="sellers-text">{img.text}</p>
                  <p className="icon">
                    <TbTriangleInvertedFilled />
                  </p>
                </div>
                <div className="sellers-card__bottom">
                  <div className="sellers-card__img">
                    <img src={img.img} alt="" />
                  </div>
                  <p className="sellers-name">Name</p>
                  <p className="sellers-job">Designation</p>
                </div>
              </div>
            ))}
          </SwiperSlide>
          <SwiperSlide>
            {cards.slice(1, 2).map((img) => (
              <div className="new-sellers__card" key={img.id}>
                <div className="sellers-card__top">
                  <p className="sellers-quote">{img.quote}</p>
                  <p className="sellers-text">{img.text}</p>
                  <p className="icon">
                    <TbTriangleInvertedFilled />
                  </p>
                </div>
                <div className="sellers-card__bottom">
                  <div className="sellers-card__img">
                    <img src={img.img} alt="" />
                  </div>
                  <p className="sellers-name">Name</p>
                  <p className="sellers-job">Designation</p>
                </div>
              </div>
            ))}
          </SwiperSlide>
          <SwiperSlide>
            {cards.slice(2, 3).map((img) => (
              <div className="new-sellers__card" key={img.id}>
                <div className="sellers-card__top">
                  <p className="sellers-quote">{img.quote}</p>
                  <p className="sellers-text">{img.text}</p>
                  <p className="icon">
                    <TbTriangleInvertedFilled />
                  </p>
                </div>
                <div className="sellers-card__bottom">
                  <div className="sellers-card__img">
                    <img src={img.img} alt="" />
                  </div>
                  <p className="sellers-name">Name</p>
                  <p className="sellers-job">Designation</p>
                </div>
              </div>
            ))}
          </SwiperSlide>
          <SwiperSlide>
            {cards.slice(4, 5).map((img) => (
              <div className="new-sellers__card" key={img.id}>
                <div className="sellers-card__top">
                  <p className="sellers-quote">{img.quote}</p>
                  <p className="sellers-text">{img.text}</p>
                  <p className="icon">
                    <TbTriangleInvertedFilled />
                  </p>
                </div>
                <div className="sellers-card__bottom">
                  <div className="sellers-card__img">
                    <img src={img.img} alt="" />
                  </div>
                  <p className="sellers-name">Name</p>
                  <p className="sellers-job">Designation</p>
                </div>
              </div>
            ))}
          </SwiperSlide>
          <SwiperSlide>
            {cards.slice(5, 6).map((img) => (
              <div className="new-sellers__card" key={img.id}>
                <div className="sellers-card__top">
                  <p className="sellers-quote">{img.quote}</p>
                  <p className="sellers-text">{img.text}</p>
                  <p className="icon">
                    <TbTriangleInvertedFilled />
                  </p>
                </div>
                <div className="sellers-card__bottom">
                  <div className="sellers-card__img">
                    <img src={img.img} alt="" />
                  </div>
                  <p className="sellers-name">Name</p>
                  <p className="sellers-job">Designation</p>
                </div>
              </div>
            ))}
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
