import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Category = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://i.ibb.co/Pg817G8/slide1.jpg" alt="1" />
          <h3 className="text-4xl text-white uppercase text-center -mt-12">Side Dishes</h3>
        </SwiperSlide>
       

        <SwiperSlide>
          <img src="https://i.ibb.co/rZ6YBCS/slide2.jpg" alt="2" />
          <h3 className="text-4xl text-white uppercase text-center -mt-12">Appetizers</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/JrFSDHP/slide3.jpg" alt="3" />
          <h3 className="text-4xl text-white uppercase text-center -mt-12">Fruit Salads</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/s65pZK2/slide4.jpg" alt="4" />
          <h3 className="text-4xl text-white uppercase text-center -mt-12">Pasta and Risotto</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/KDMm8d8/slide5.jpg" alt="5" />
          <h3 className="text-4xl text-white uppercase text-center -mt-12">Juice</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/L1T0gHq/brooke-lark-1-Rm9-GLHV0-UA-unsplash.jpg"
            alt="7"
          />
          <h3 className="text-4xl text-white uppercase text-center -mt-12">Salads</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/4ZJdD2D/frames-for-your-heart-6-KWBey-FPe-E-unsplash.jpg"
            alt="8"
          />
          <h3 className="text-4xl text-white uppercase text-center -mt-12">Beef and Lamb</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/YhtLhw2/jakub-dziubak-gj7-BLl-Sz-IFs-unsplash.jpg"
            alt="9"
          />
          <h3 className="text-4xl text-white uppercase text-center -mt-12">Wine</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/61NG84v/jonathan-borba-5-E0d3lfo-C1w-unsplash.jpg"
            alt="10"
          />
           <h3 className="text-4xl text-white uppercase text-center -mt-12">Vegetarian and Vegan</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/5jKV9TL/kamil-kalbarczyk-19-Ft3-Qfak-Mo-unsplash.jpg"
            alt=""
          />
           <h3 className="text-4xl text-white uppercase text-center -mt-12">Poultry</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/Pr9pnRR/lorena-samponi-Ju-Ae7-UZs68s-unsplash.jpg"
            alt=""
          />
           <h3 className="text-4xl text-white uppercase text-center -mt-12">Desserts</h3>
        </SwiperSlide>
       
      </Swiper>
    </>
  );
};

export default Category;
