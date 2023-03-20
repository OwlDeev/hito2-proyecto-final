import "../css/homeUsuario.css";
import { Container, Box, Button, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { Context } from "../Context";
import axios from "axios";

function HomeUsuario() {
  let soloUnaVez = 0;
  const {
    usuario,
    setUsuarioCompleto,
    setUsuarioEncuesta,
    usuarioEncuesta,
    setEsDNC,
  } = useContext(Context);
  const [encuestaDncRealizada, setEncuestaDncRealizada] = useState(false);

  useEffect(() => {
    buscarUsuario();
  }, []);

  const buscarUsuario = async () => {
    const urlServer = "http://localhost:4000";
    const endpoint = "/homeUsuario";
    let emailUsuario = {
      email: usuario,
    };
    try {
      if (soloUnaVez === 0) {
        soloUnaVez = 1;
        let usuarioBd = await axios.post(urlServer + endpoint, emailUsuario);
        setUsuarioCompleto(usuarioBd.data[0]);
        setUsuarioEncuesta(usuarioBd.data[1]);
        console.log(usuarioEncuesta);
        for (let encuesta of usuarioBd.data[1]) {
          if (encuesta.id_encuesta === 1 && encuesta.realizada === 1) {
            setEncuestaDncRealizada(true);
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  function isDNC() {
    setEsDNC(1);
  }

  return (
    <>
      <Container className="background">
        <Box className="divMain">
          <Typography variant="h4" gutterBottom className="labelTitulo1">
            ¿Que deseas hacer?
          </Typography>
          <Box className="divEvaluaciones">
            {encuestaDncRealizada ? (
              <Box className="divEleccion">
                <img
                  src="https://img.freepik.com/vector-gratis/lista-verificacion-o-concepto-encuesta_74855-6987.jpg?w=826&t=st=1679297071~exp=1679297671~hmac=617e8c167a08ab4bd07fef590dada9b3ea225095ddd2aa61c7bed62d62f24317"
                  alt="Ejemplo"
                  className="imagenBotones"
                ></img>
                <Button
                  variant="contained"
                  className="botonEvaluaciones"
                  disabled={encuestaDncRealizada}
                >
                  Capacitación DNC
                </Button>
              </Box>
            ) : (
              <Box className="divEleccion">
                <NavLink to={"/previewEncuesta"} onClick={isDNC}>
                  <img
                    src="https://img.freepik.com/vector-gratis/lista-verificacion-o-concepto-encuesta_74855-6987.jpg?w=826&t=st=1679297071~exp=1679297671~hmac=617e8c167a08ab4bd07fef590dada9b3ea225095ddd2aa61c7bed62d62f24317"
                    alt="Ejemplo"
                    className="imagenBotones"
                  ></img>
                  <Button
                    variant="contained"
                    className="botonEvaluaciones"
                    disabled={encuestaDncRealizada}
                  >
                    Capacitación DNC
                  </Button>
                </NavLink>
              </Box>
            )}
            <Box className="divEleccion">
              <img
                className="imagenBotones2"
                src="https://img.freepik.com/vector-gratis/ilustracion-concepto-lista-verificacion_114360-479.jpg?w=740&t=st=1679297577~exp=1679298177~hmac=5e31c2ec5ae7b24c3feb2afc39a4ca178f10a77e1ff9aa24b6bb8a30fc992fc6"
              ></img>
              <NavLink to={"/evaluaciones"}>
                <Button variant="contained" className="botonEvaluaciones">
                  Evaluaciones
                </Button>
              </NavLink>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default HomeUsuario;
