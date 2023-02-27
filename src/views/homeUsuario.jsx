import "../css/homeUsuario.css";
import {
  Container,
  Box,
  Button,
  Divider,
  Typography,
  TextField,
} from "@mui/material";
import { NavLink } from "react-router-dom";

function homeUsuario() {
  return (
    <>
      <Container fixed className="background">
        <Box className="divMain">
          <Typography variant="h4" gutterBottom className="labelTitulo1">
            ¿Que deseas hacer?
          </Typography>
          <Box className="divEvaluaciones">
            <NavLink to={"/previewEncuesta"}>
              <Button variant="contained" className="botonEvaluaciones">
                Capacitacion DNC
              </Button>
            </NavLink>
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

export default homeUsuario;
