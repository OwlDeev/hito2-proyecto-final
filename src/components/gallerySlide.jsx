import React from "react";
import { Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useContext } from "react";
import { Context } from "../Context";
import CardEncuesta from "./CardEncuesta";
import { useEffect, useState } from "react";
import axios from "axios";

// Import Swiper styles
import "swiper/css";
import "swiper/css/virtual";

export default () => {
  useEffect(() => {
    obtenerEvaluaciones();
  }, []);

  const { encuestas, usuarioEncuesta, setEncuestas } = useContext(Context);

  const obtenerEvaluaciones = async () => {
    const urlServer = "http://localhost:4000";
    const endpoint = "/evaluaciones";
    let usuario = {
      idUsuario: usuarioEncuesta[0].id_usuario,
    };
    try {
      let resultado = await axios.post(urlServer + endpoint, usuario);
      setEncuestas(resultado.data);
    } catch ({ response: { data: message } }) {}
  };


  return (
    <Swiper modules={[Virtual]} spaceBetween={20} slidesPerView={2} virtual>
      {encuestas.map((encuesta, index) =>
        encuesta.titulo == "DNC" ? (
          <div></div>
        ) : (
          <SwiperSlide key={encuesta.id_encuesta} virtualIndex={index}>
            {
              <CardEncuesta
                key={encuesta.id}
                name={encuesta.titulo}
                img={"https://www.caf.com/media/3381584/encuesta.png"}
                tituloEncuesta={encuesta.titulo}
                idEncuesta={encuesta.id}
              >
                {encuesta.id_encuesta}
              </CardEncuesta>
            }
          </SwiperSlide>
        )
      )}
    </Swiper>
  );
};
