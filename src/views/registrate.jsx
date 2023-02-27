import "../css/registrate.css";
import logo from "../img/logo.png";
import {
  Container,
  Box,
  Button,
  Divider,
  Typography,
  TextField,
  Autocomplete,
} from "@mui/material";

function Registrate() {
  return (
    <Container fixed className="background">
      <img src={logo} className="appLogo" alt="logo" />
      <Divider variant="middle" className="divider" />
      <Box className="divRegistrate">
        <Typography variant="h4" gutterBottom className="labelTitulo1">
          Registrate
        </Typography>
        <TextField
          id="outlined-basic"
          label="Nombre"
          variant="outlined"
          className="botonInicioSesion"
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          className="botonInicioSesion"
        />
        <TextField
          id="outlined-basic"
          label="Correo Electronico"
          variant="outlined"
          className="botonInicioSesion"
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={top100Films}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Area de empleo" />
          )}
        />
      </Box>
      <Box className="divBotones">
        <Button variant="contained" className="botonRegistrarse">
          Volver
        </Button>
        <Button variant="contained" className="botonRegistrarse">
          Registrate
        </Button>
      </Box>
    </Container>
  );
}

//EJEMPLO DE LLENADO COMBOBOX
const top100Films = [
  { label: "Administrador", year: 1994 },
  { label: "Administrativo", year: 1972 },
  { label: "Auxiliar de aseo", year: 1974 },
  { label: "Panadero", year: 2008 },
  { label: "Ayudante de panadero", year: 1957 },
  { label: "Jefe de sala", year: 1993 },
  { label: "Reponedor(a)", year: 1994 },
  {
    label: "Carnicero(a)",
    year: 2003,
  },
  { label: "Ayudante de cocinero", year: 1966 },
  { label: "Encargado perecibles", year: 1999 },
  {
    label: "jefe de cajas",
    year: 2001,
  },
  {
    label: "Cajero(a)",
    year: 1980,
  },
  { label: "Bodeguero", year: 1994 },
  { label: "Chofer", year: 2010 },
  {
    label: "Empaque",
    year: 2002,
  },
  { label: "Operador grua orquilla", year: 1975 },
  { label: "Prevencionista de riesgos", year: 1990 },
  { label: "Publicistas", year: 1999 },
  { label: "Rotisero(a)", year: 1954 },
];

export default Registrate;
