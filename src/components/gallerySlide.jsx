import React from "react";
import { Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useContext } from "react";
import { Context } from "../Context";
import CardPrice from "./CardPrice";

// Import Swiper styles
import "swiper/css";
import "swiper/css/virtual";

export default () => {
  const { encuestas } = useContext(Context);

  return (
    <Swiper modules={[Virtual]} spaceBetween={20} slidesPerView={2} virtual>
      {encuestas.map((encuesta, index) => (
        <SwiperSlide key={encuesta.id} virtualIndex={index}>
          {
            <CardPrice key={encuesta.id} name={encuesta.name}>
              encuesta.id
            </CardPrice>
          }
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
