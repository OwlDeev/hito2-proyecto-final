import "../css/previewEncuesta.css";
import {
  Container,
  Box,
  Button,
  Divider,
  Typography,
  TextField,
  Grid,
} from "@mui/material";
import { NavLink } from "react-router-dom";

const nombreEncuesta = "encuesta1";
const informacionEncuesta =
  "Usuario, nos gustaría darte la oportunidad de descubrir el verdadero tú. La imagen que proporciones nos ayudará a comprender cómo te ves a ti mismo." +
  "\t\n" +
  "Lo que necesitas saber\n Deberás leer cada enunciado y decir cómo se relaciona contigo diciéndonos que tan de acuerdo estas con ella.\n \n No comiences hasta que hayas entendido estos puntos importantes: \n - No hay respuestas correctas o incorrectas\n - No hay límite de tiempo para esta evaluación\n - Se honesto; califícate como realmente eres, no como te gustaría ser\n Cuando estés listo para comenzar, haz clic en Iniciar cuestionario .";

function PreviewEncuesta() {
  return (
    <Container Container>
      <Grid xs={12}>
        <Box>
          <Typography variant="h4" gutterBottom className="labelTitulo">
            {nombreEncuesta}
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            className="labelTitulo"
            multiline
          >
            {informacionEncuesta}
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
