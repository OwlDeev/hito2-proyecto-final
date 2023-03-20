import "../css/login.css";
import logo from "../img/logo.png";
import { useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Context } from "../Context";

import {
  Container,
  Box,
  Button,
  Divider,
  Typography,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";

function Login() {
  useEffect(() => {
    setUsuarioEncuesta([]);
  }, []);

  const { setUsuario, setUsuarioEncuesta, setUsuarioPerfil } =
    useContext(Context);
  const navigate = useNavigate();
  const [usuario, setUsuarioLocal] = useState({});
  const [open, setOpen] = useState(false);
  const [stringError, setStringError] = useState("");

  const iniciarSesion = async () => {
    const urlServer = "http://localhost:4000";
    const endpoint = "/login";
    const { email, password } = usuario;
    try {
      if (!email || !password) {
        setStringError("Email y password obligatorias");
        setOpen(true);
      } else {
        const { data: token } = await axios.post(urlServer + endpoint, usuario);
        localStorage.setItem("token", token[0]);
        setUsuarioPerfil(token[1]);
        setUsuario(usuario.email);
        token[1] === 1
          ? navigate("/homeAdmin")
          : navigate("/homeUsuario")
      }
    } catch (error) {
      setStringError("Ocurrio un error al intentar logear");
      setOpen(true);
    }
  };

  const handleSetUsuario = ({ target: { value } }) => {
    const field = {};
    field["email"] = value;
    setUsuarioLocal({ ...usuario, ...field });
  };

  const handleSetPassword = ({ target: { value } }) => {
    const field = {};
    field["password"] = value;
    setUsuarioLocal({ ...usuario, ...field });
  };

  return (
    <Container fixed className="backgroundLogin">
      <img src={logo} className="appLogo" alt="logo" />
      <Divider variant="middle" className="divider" />
      <Box className="divLogin">
        <Typography variant="h4" gutterBottom className="labelTitulo1">
          INICIA SESION
        </Typography>
        <Collapse in={open}>
          <Alert
            severity="warning"
            action={
              <IconButton
                aria-label="close"
                color="warning"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            {stringError}
          </Alert>
        </Collapse>
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
          value={usuario.email}
          onChange={handleSetUsuario}
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          className="botonInicioSesion"
          value={usuario.password}
          onChange={handleSetPassword}
        />
        <Button
          variant="contained"
          className="botonInicioSesion"
          onClick={iniciarSesion}
        >
          Inicia sesion
        </Button>
      </Box>
    </Container>
  );
}

export default Login;
