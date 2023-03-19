import "../css/previewEncuesta.css";
import { Container, Box, Button, Typography, Grid } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context";

function PreviewEncuesta() {
  const { encuestas,usuarioCompleto, esDNC, encuestaElegida } = useContext(Context);

  function nombreEncuesta(){
    let titulo
    if(esDNC == 1){
      titulo = 'DNC'
    }else{
      for(let encuestaId of encuestas){
        if(encuestaId.id == encuestaElegida){
          titulo=encuestaId.titulo
        }
      }
    }
    return titulo
  }
  const informacionEncuesta =
    usuarioCompleto[0].nombre+" , nos gustaría darte la oportunidad de descubrir el verdadero tú. La imagen que proporciones nos ayudará a comprender cómo te ves a ti mismo."

  const infoEncuesta2 =  
  "Lo que necesitas saber... "

  const infoEncuesta3 = "Deberás leer cada enunciado y decir cómo se relaciona contigo diciéndonos que tan de acuerdo estas con ella y NO comiences hasta que hayas entendido estos puntos importantes: "  
  const infoEncuesta4 = "1.- No hay respuestas correctas o incorrectas."
  const infoEncuesta5 = "2.- No hay límite de tiempo para esta evaluación."
  const infoEncuesta6 = "3.- Se honesto, califícate como realmente eres, no como te gustaría ser."
  const infoEncuesta7 = "Cuando estés listo para comenzar, haz clic en Iniciar cuestionario ."
  
  return (
    <Container Container>
      <Grid xs={12}>
        <Box>
          <Typography variant="h4" gutterBottom className="labelTitulo">
            {nombreEncuesta()}
          </Typography>
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
          <NavLink to={"/encuesta"}>
            <Button variant="contained" className="botonInicioSesion">
              Iniciar encuesta
            </Button>
          </NavLink>
        </Box>
      </Grid>
    </Container>
  );
}

export default PreviewEncuesta;
