import "../css/homeUsuario.css";
import {
  Container,
  Box,
  Button,
  Divider,
  Typography,
  TextField,
} from "@mui/material";

function homeUsuario() {
  return (
    <>
      <Container fixed className="background">
        <Box className="divMain">
          <Typography variant="h4" gutterBottom className="labelTitulo1">
            ¿Que deseas hacer?
          </Typography>
          <Box className="divEvaluaciones">
            <Button variant="contained" className="botonEvaluaciones">
              Capacitacion DNC
            </Button>
            <Button variant="contained" className="botonEvaluaciones">
              Evaluaciones
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default homeUsuario;
