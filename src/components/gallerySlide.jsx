import React from "react";
import { Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useContext } from "react";
import { Context } from "../Context";
import CardEncuesta from "./CardEncuesta";

// Import Swiper styles
import "swiper/css";
import "swiper/css/virtual";

export default () => {
  const { encuestas } = useContext(Context);

  return (
    <Swiper modules={[Virtual]} spaceBetween={20} slidesPerView={4} virtual>
      {encuestas.map((encuesta, index) => (
        <SwiperSlide key={encuesta.id} virtualIndex={index}>
          {
            <CardEncuesta key={encuesta.id} name={encuesta.name} img={encuesta.img}>
              encuesta.id
            </CardEncuesta>
          }
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
