import "../css/login.css";
import logo from "../img/logo.png";
import {
  Container,
  Box,
  Button,
  Divider,
  Typography,
  TextField,
} from "@mui/material";

function Login() {
  return (
    <Container fixed className="background">
      <img src={logo} className="appLogo" alt="logo" />
      <Divider variant="middle" className="divider" />
      <Box className="divLogin">
        <Typography variant="h4" gutterBottom className="labelTitulo1">
          INICIA SESION
        </Typography>
        <Button variant="contained" className="botonInicioSesion">
          Inicia con Google
        </Button>
        <Button variant="contained" className="botonInicioSesion">
          Inicia con Apple
        </Button>
        <Divider className="dividerDivLogin"> O </Divider>
        <TextField
          id="outlined-basic"
          label="Correo Electronico"
          variant="outlined"
          className="botonInicioSesion"
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          className="botonInicioSesion"
        />
      </Box>
    </Container>
  );
}

export default Login;
