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

  // useEffect(() => {
  //   for(let encuesta of usuarioEncuesta){
  //     if (encuesta.id_encuesta === 1 && encuesta.realizada === 1) {
  //       setEncuestaDncRealizada(true);
  //     }
  //   }
  // }, [usuarioEncuesta]);

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
        console.log(usuarioEncuesta)
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
              <Button
                variant="contained"
                className="botonEvaluaciones"
                disabled={encuestaDncRealizada}
              >
                Capacitación DNC
              </Button>
            ) : (
              <NavLink to={"/previewEncuesta"} onClick={isDNC}>
                <Button
                  variant="contained"
                  className="botonEvaluaciones"
                  disabled={encuestaDncRealizada}
                >
                  Capacitación DNC
                </Button>
              </NavLink>
            )}
            <NavLink to={"/evaluaciones"}>
              <Button variant="contained" className="botonEvaluaciones">
                Evaluaciones
              </Button>
            </NavLink>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default HomeUsuario;
