import "../css/previewEncuesta.css";
import { Container, Box, Button, Typography, Grid } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context";

function PreviewEncuesta() {
  const { encuestas, usuarioCompleto, esDNC, encuestaElegida } =
    useContext(Context);

  function nombreEncuesta() {
    let titulo;
    if (esDNC === 1) {
      titulo = "DNC";
    } else {
      for (let encuestaId of encuestas) {
        if (encuestaId.id === encuestaElegida) {
          titulo = encuestaId.titulo;
        }
      }
    }
    return titulo;
  }
  const informacionEncuesta =
    usuarioCompleto[0].nombre +
    " , nos gustaría darte la oportunidad de descubrir el verdadero tú. La imagen que proporciones nos ayudará a comprender cómo te ves a ti mismo.";

  const infoEncuesta2 = "Lo que necesitas saber... ";

  const infoEncuesta3 =
    "Deberás leer cada enunciado y decir cómo se relaciona contigo diciéndonos que tan de acuerdo estas con ella y NO comiences hasta que hayas entendido estos puntos importantes: ";
  const infoEncuesta4 = "1.- No hay respuestas correctas o incorrectas.";
  const infoEncuesta5 = "2.- No hay límite de tiempo para esta evaluación.";
  const infoEncuesta6 =
    "3.- Se honesto, califícate como realmente eres, no como te gustaría ser.";
  const infoEncuesta7 =
    "Cuando estés listo para comenzar, haz clic en Iniciar cuestionario .";

  return (
    <Container Container>
      <Grid xs={12}>
        <Box className="boxMain">
          <Box className="boxMainTitulo">
            <Box className="boxImgTitulo">
              <img
                className="imgTitulo"
                src="https://img.freepik.com/vector-gratis/emoji-feliz_53876-25513.jpg?w=740&t=st=1679299360~exp=1679299960~hmac=b8f7ee1fd388a80b17f60d86ba158cd95c44d9b15317be4c99b9bbb10883d694"
              ></img>
            </Box>
            <Box className="boxImgTitulo">
              <Typography variant="h4" gutterBottom className="labelTitulo">
                {nombreEncuesta()}
              </Typography>
            </Box>
            <Box className="boxImgTitulo">
              <img
                className="imgTitulo"
                src="https://img.freepik.com/vector-gratis/emoji-feliz_53876-25513.jpg?w=740&t=st=1679299360~exp=1679299960~hmac=b8f7ee1fd388a80b17f60d86ba158cd95c44d9b15317be4c99b9bbb10883d694"
              ></img>
            </Box>
          </Box>

          <Box className="boxTexto">
            <Typography
              variant="h5"
              gutterBottom
              className="labelTitulo"
              multiline
              align="justify"
            >
              {informacionEncuesta}
              <br></br>
              <br></br>
              {infoEncuesta2}
              <br></br>
              <br></br>
              {infoEncuesta3}
              <br></br>
              <br></br>
              {infoEncuesta4}
              <br></br>
              {infoEncuesta5}
              <br></br>
              {infoEncuesta6}
              <br></br>
              <br></br>
              {infoEncuesta7}
              <br></br>
            </Typography>
          </Box>

          <Box className="botonPrevieEncuesta">
            <Box className="boxBtnPreview">
              <img
                className="imgBtnPreview"
                src="https://img.freepik.com/vector-gratis/grupo-personas-burbujas-discurso_24877-56560.jpg?w=900&t=st=1679298961~exp=1679299561~hmac=93d6bb8d0ad84864427897de98c19967b25b0aadeccd02bb7a1efd67a581a8d5"
              ></img>
            </Box>

            <NavLink to={"/encuesta"}>
              <Button variant="contained" className="botonInicioSesion">
                Iniciar encuesta
              </Button>
            </NavLink>
            <Box className="boxBtnPreview">
              <img
                className="imgBtnPreview1"
                src="https://img.freepik.com/vector-gratis/grupo-personas-burbujas-discurso_24877-56560.jpg?w=900&t=st=1679298961~exp=1679299561~hmac=93d6bb8d0ad84864427897de98c19967b25b0aadeccd02bb7a1efd67a581a8d5"
              ></img>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Container>
  );
}

export default PreviewEncuesta;
