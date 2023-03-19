import "../css/perfilUsuario.css";
import {
  Box,
  Typography,
  TextField,
  Grid,
  Avatar,
  Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import { useContext, useState, useEffect } from "react";
import { Context } from "../Context";
import SaveIcon from "@mui/icons-material/Save";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
//dialog import
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

function PerfilUsuario() {
  useEffect(() => {
    setNombrePerfil(usuarioCompleto[0].nombre);
    setEmailPerfil(usuarioCompleto[0].email);
    setNacionalidadPerfil(usuarioCompleto[0].nacionalidad);
    setFechaPerfil(usuarioCompleto[0].fecha);
    setGeneroPerfil(usuarioCompleto[0].genero);
    setImagenPerfil(usuarioCompleto[0].imagen)
  }, []);

  useEffect(() => {
    if (isValidEmail) {
      setDisableBtnGuardar(true);
    } else {
      setDisableBtnGuardar(false);
    }
  });

  const { setUsuario, usuarioCompleto } = useContext(Context);
  const [nombrePerfil, setNombrePerfil] = useState("");
  const [fechaPerfil, setFechaPerfil] = useState("01/01/2000");
  const [generoPerfil, setGeneroPerfil] = useState("");
  const [nacionalidadPerfil, setNacionalidadPerfil] = useState("");
  const [emailPerfil, setEmailPerfil] = useState("");
  const [passwordPerfil, setPasswordPerfil] = useState("");
  const [imagenPerfil, setImagenPerfil] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [age, setAge] = useState("");
  const [openDialogActualizar, setOpenDiagolActualizar] = useState(false);
  const [openDialogFoto, setOpenDiagolFoto] = useState(false);

  //disableButton
  const [disableNombre, setDisableNombre] = useState(true);
  const [disableFecha, setDisableFecha] = useState(true);
  const [disableGenero, setDisableGenero] = useState(true);
  const [disableNacionalidad, setDisableNacionalidad] = useState(true);
  const [disableEmail, setDisableEmail] = useState(true);
  const [disablePassword, setDisablePassword] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [disableBtnGuardar, setDisableBtnGuardar] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleClickOpenDialog = () => {
    setOpenDiagolActualizar(true);
  };

  const handleCloseDialog = () => {
    setOpenDiagolActualizar(false);
    logout();
  };

  const handleClickOpenFoto = () => {
    setOpenDiagolFoto(true);
  };

  const handleCloseFoto = () => {
    setOpenDiagolFoto(false);
    console.log(imagenPerfil)
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const navigate = useNavigate();

  const handleChangeNombre = (event) => {
    setNombrePerfil(event.target.value);
  };

  function suma(a, b) {
    let sumaDosNumeros = a + b;
    return unCaracterFecha(sumaDosNumeros);
  }

  function unCaracterFecha(a) {
    let agregaCero = a.toString();
    if (agregaCero.length == 1) {
      agregaCero = "0" + agregaCero;
    }
    return agregaCero;
  }

  const handleChangeFecha = (event) => {
    let fecha =
      unCaracterFecha(event.$D) + "/" + suma(event.$M, 1) + "/" + event.$y;
    setFechaPerfil(fecha);
  };

  const handleChangeGenero = (event) => {
    setGeneroPerfil(event.target.value);
  };

  const handleChangeNacionalidad = (event) => {
    setNacionalidadPerfil(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmailPerfil(event.target.value);
  };

  const handleChangeImagen = (event) => {
    setImagenPerfil(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPasswordPerfil(event.target.value);
  };

  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };

  let enableEditNombre = () => {
    if (disableNombre) {
      setDisableNombre(false);
    } else {
      setDisableNombre(true);
    }
  };

  let enableEditFecha = () => {
    if (disableFecha) {
      setDisableFecha(false);
    } else {
      setDisableFecha(true);
    }
  };

  let enableEditGenero = () => {
    if (disableGenero) {
      setDisableGenero(false);
    } else {
      setDisableGenero(true);
    }
  };

  let enableEditNacionalidad = () => {
    if (disableNacionalidad) {
      setDisableNacionalidad(false);
    } else {
      setDisableNacionalidad(true);
    }
  };

  let enableEditEmail = () => {
    if (disableEmail) {
      setDisableEmail(false);
    } else {
      setDisableEmail(true);
    }
  };

  let enableEditPassword = () => {
    if (disablePassword) {
      setDisablePassword(false);
    } else {
      setDisablePassword(true);
    }
  };

  const onClickVolver = () => {
    navigate("/homeUsuario");
  };

  const validarEmail = () => {
    // expresión regular para verificar el formato de correo electrónico
    const regex = /\S+@\S+\.\S+/;

    // validar el valor ingresado
    if (regex.test(emailPerfil)) {
      setIsValidEmail(false);
    } else {
      setIsValidEmail(true);
    }
  };

  function cambioFoto() {
    handleClickOpenFoto();
  }

  const logout = () => {
    setUsuario(null);
    localStorage.removeItem("token");
    navigate("/");
  };

  const modificarUsuario = async () => {
    const urlServer = "http://localhost:4000";
    const endpoint = "/perfilUsuario";
    let perfilUsuario = {
      nombre: nombrePerfil,
      fecha: fechaPerfil,
      genero: generoPerfil,
      nacionalidad: nacionalidadPerfil,
      email: emailPerfil,
      password: passwordPerfil,
      emailAntiguo: usuarioCompleto[0].email,
      imagen: imagenPerfil,
    };
    try {
      await axios.post(urlServer + endpoint, perfilUsuario);
      alert("Se actualizo el perfil con éxito");
      if (perfilUsuario.email !== perfilUsuario.emailAntiguo) {
        handleClickOpenDialog();
      }
    } catch (error) {
      alert("Algo salió mal ...");
      console.log(error);
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom className="labelTitulo">
        Perfil
      </Typography>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          <Box className="nombreUsuarioEditar">
            <IconButton
              color="primary"
              aria-label="edit"
              className="iconButton"
              onClick={cambioFoto}
            >
              <AddAPhotoIcon />
            </IconButton>
            <Avatar
              alt="Remy Sharp"
              src={imagenPerfil}
              sx={{ width: 200, height: 200 }}
            />
          </Box>

          <Box className="nombreUsuarioEditar">
            <IconButton
              color="primary"
              aria-label="edit"
              className="iconButton"
              onClick={enableEditNombre}
            >
              <EditIcon />
            </IconButton>

            <TextField
              disabled={disableNombre}
              id="outlined-disabled"
              label="Nombre"
              value={nombrePerfil}
              className="inputEditar"
              onChange={handleChangeNombre}
            />
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box>
            <Box className="campoEditar">
              <IconButton
                color="primary"
                aria-label="edit"
                className="iconButton"
                onClick={enableEditFecha}
              >
                <EditIcon />
              </IconButton>
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                adapterLocale="es"
              >
                <DatePicker
                  onChange={handleChangeFecha}
                  className="inputEditar"
                  value={dayjs(fechaPerfil, "DD/MM/YYYY")}
                  label="Fecha de Nacimiento"
                  disabled={disableFecha}
                  format="DD/MM/YYYY"
                />
              </LocalizationProvider>
            </Box>
            <Box className="campoEditar">
              <IconButton
                color="primary"
                aria-label="edit"
                className="iconButton"
                onClick={enableEditGenero}
              >
                <EditIcon />
              </IconButton>
              <FormControl className="inputEditar">
                <InputLabel id="demo-simple-select-label">Sexo</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={generoPerfil}
                  label="Sexo"
                  onChange={handleChangeGenero}
                  disabled={disableGenero}
                >
                  <MenuItem value={1}>Hombre</MenuItem>
                  <MenuItem value={2}>Mujer</MenuItem>
                  <MenuItem value={3}>Sin respuesta</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box className="campoEditar">
              <IconButton
                color="primary"
                aria-label="edit"
                className="iconButton"
                onClick={enableEditNacionalidad}
              >
                <EditIcon />
              </IconButton>
              <FormControl className="inputEditar">
                <InputLabel id="demo-simple-select-label">
                  Nacionalidad
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={nacionalidadPerfil}
                  label="Nacionalidad"
                  onChange={handleChangeNacionalidad}
                  disabled={disableNacionalidad}
                >
                  <MenuItem value={1}>Argentina</MenuItem>
                  <MenuItem value={2}>Bolivia</MenuItem>
                  <MenuItem value={3}>Brasil</MenuItem>
                  <MenuItem value={4}>Colombia</MenuItem>
                  <MenuItem value={5}>Costa Rica</MenuItem>
                  <MenuItem value={6}>Cuba</MenuItem>
                  <MenuItem value={7}>Chile</MenuItem>
                  <MenuItem value={8}>Ecuador</MenuItem>
                  <MenuItem value={9}>Dominica</MenuItem>
                  <MenuItem value={10}>Venezuela</MenuItem>
                  <MenuItem value={11}>Uruguay</MenuItem>
                  <MenuItem value={12}>Perú</MenuItem>
                  <MenuItem value={13}>Paraguay</MenuItem>
                  <MenuItem value={14}>Panamá</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box className="campoEditar">
              <IconButton
                color="primary"
                aria-label="edit"
                className="iconButton"
                onClick={enableEditEmail}
              >
                <EditIcon />
              </IconButton>
              <TextField
                disabled={disableEmail}
                id="outlined"
                label="Correo"
                value={emailPerfil}
                className="inputEditar"
                onChange={handleChangeEmail}
                onBlur={validarEmail}
                helperText="Formato correcto"
                error={isValidEmail}
              />
            </Box>
            <Box className="campoEditar">
              <IconButton
                color="primary"
                aria-label="edit"
                className="iconButton"
                onClick={enableEditPassword}
              >
                <EditIcon />
              </IconButton>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                value={passwordPerfil}
                onChange={handleChangePassword}
                className="inputEditar"
                disabled={disablePassword}
                placeholder="Cambiar Password"
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={2} columns={12}>
        <Box className="boxButtonFooter">
          <Button
            variant="contained"
            startIcon={<ArrowBackIcon />}
            onClick={onClickVolver}
          >
            Volver
          </Button>
          <Button
            variant="contained"
            startIcon={<SaveIcon />}
            onClick={modificarUsuario}
            disabled={disableBtnGuardar}
          >
            Guardar
          </Button>
        </Box>
      </Grid>

      <Dialog
        open={openDialogActualizar}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Importante"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Como cambiaste el 'correo electronico' o la 'contraseña', la app se
            reiniciara con estos cambios.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} autoFocus>
            Volver al Home
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openDialogFoto}
        onClose={handleCloseFoto}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Cambio de imagen de perfil"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <TextField
              id="outlined"
              label="URL de la imagen"
              defaultValue={""}
              className="inputEditar"
              onChange={handleChangeImagen}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseFoto} autoFocus>
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default PerfilUsuario;
