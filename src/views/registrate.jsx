import "../css/registrate.css";
import logo from "../img/logo.png";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Box,
  Button,
  TextField,
  Autocomplete,
  Divider,
  Typography,
} from "@mui/material";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Context } from "../Context";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function Registrate() {
  const { allAreas } = useContext(Context);
  const [nombreRegistro, setNombreRegistro] = useState("");
  const [passwordRegistro, setPasswordRegistro] = useState("");
  const [emailRegistro, setEmailRegistro] = useState("");
  const [areaRegistro, setAreaRegistro] = useState("");
  const [open, setOpen] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [mensajeError, setMensajeError] = useState("");
  const navigate = useNavigate();

  const handleChangeNombre = (event) => {
    setNombreRegistro(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPasswordRegistro(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setEmailRegistro(event.target.value);
  };
  const handleChangeArea = (event) => {
    setAreaRegistro(event.target.textContent);
  };

  const onClickVolver = () => {
    navigate("/login");
  };

  function traeIdArea() {
    let idArea='';
    for (let area of allAreas) {
      if (area.label === areaRegistro) {
        idArea = area.id;
      }
    }
    return idArea.toString();
  }

  const registrarUsuario = async () => {
    if (isValidEmail) {
      setOpen(true);
    } else {
      const urlServer = "http://localhost:4000";
      const endpoint = "/registro";
      let registroRegistro = {
        email: emailRegistro,
        password: passwordRegistro,
        nombre: nombreRegistro,
        area: traeIdArea(),
      };
      try {
        let consultaRegistro = await axios.post(
          urlServer + endpoint,
          registroRegistro
        );
        setMensajeError(consultaRegistro.data);
        if (
          consultaRegistro.data ===
            "El Email ya se encuentra registrado, utilice otro por favor" ||
          consultaRegistro.data === "Deben estar todos los campos ingresados"
        ) {
          setOpen(true);
        } else {
          handleClickOpenDialog();
        }
      } catch (error) {
        setMensajeError("Ocurrió un error en la consulta");
        setOpen(true);
      }
    }
  };

  const validarEmail = () => {
    // expresión regular para verificar el formato de correo electrónico
    const regex = /\S+@\S+\.\S+/;

    // validar el valor ingresado
    if (regex.test(emailRegistro)) {
      setIsValidEmail(false);
    } else {
      setIsValidEmail(true);
    }
  };

  //popUp al registrarte
  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    navigate("/login");
  };

  return (
    <Container fixed className="backgroundRegistrate">
      <img src={logo} className="appLogo" alt="logo" />
      <Divider variant="middle" className="divider" />
      <Box className="divRegistrate">
        <Typography variant="h4" gutterBottom className="labelTitulo1">
          Regístrate
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
            {mensajeError}
          </Alert>
        </Collapse>
        <TextField
          id="outlined-basic"
          label="Nombre"
          variant="outlined"
          className="botonInicioSesion"
          value={nombreRegistro}
          onChange={handleChangeNombre}
          name="nombre"
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          className="botonInicioSesion"
          value={passwordRegistro}
          onChange={handleChangePassword}
          name="password"
        />
        <TextField
          id="outlined-basic"
          label="Correo Electronico"
          variant="outlined"
          className="botonInicioSesion"
          value={emailRegistro}
          onChange={handleChangeEmail}
          name="email"
          error={isValidEmail}
          helperText="Formato correcto"
          onBlur={validarEmail}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={allAreas}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Area de empleo" />
          )}
          // value={areaRegistro}
          onChange={handleChangeArea}
          name="area"
          clearIcon={null}
        />
      </Box>
      <Box className="divBotones">
        <Button
          variant="contained"
          className="botonRegistrarse"
          onClick={onClickVolver}
        >
          Volver
        </Button>
        <Button
          variant="contained"
          className="botonRegistrarse"
          onClick={registrarUsuario}
        >
          Registrate
        </Button>
      </Box>

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Usuario Creado"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Se ha creado el usuario con exito, ahora puedes logearte
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} autoFocus>
            Continuar
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default Registrate;
