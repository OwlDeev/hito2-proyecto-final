import "../css/perfilUsuario.css";
import {
  Container,
  Box,
  Button,
  Divider,
  Typography,
  TextField,
  Grid,
  Avatar,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

function perfilUsuario() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom className="labelTitulo">
        Perfil
      </Typography>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          <Box className="imagePerfil">
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 200, height: 200 }}
            />
            <Box className="nombreUsuarioEditar">
            <EditIcon className="btnEditar" fontSize="large"></EditIcon>
              <TextField
                disabled
                id="outlined-disabled"
                label="Nombre"
                defaultValue="Usuario"
                className="nombreUsuario"
              />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box>
          <Box className="campoEditar">
            <EditIcon className="btnEditar" fontSize="large"></EditIcon>
              <TextField
                disabled
                id="outlined"
                label="Fecha de Nacimiento"
                defaultValue="01/01/2023"
                className="nombreUsuario"
              />
            </Box>
            <Box className="campoEditar">
            <EditIcon className="btnEditar" fontSize="large"></EditIcon>
              <TextField
                disabled
                id="outlined"
                label="Genero"
                defaultValue="Masculino"
                className="nombreUsuario"
              />
            </Box>
            <Box className="campoEditar">
            <EditIcon className="btnEditar" fontSize="large"></EditIcon>
              <TextField
                disabled
                id="outlined"
                label="Nacionalidad"
                defaultValue="Chilena"
                className="nombreUsuario"
              />
            </Box>
            <Box className="campoEditar">
            <EditIcon className="btnEditar" fontSize="large"></EditIcon>
              <TextField
                disabled
                id="outlined"
                label="Correo"
                defaultValue="usuario@gmail.com"
                className="nombreUsuario"
              />
            </Box>
            <Box className="campoEditar">
            <EditIcon className="btnEditar" fontSize="large"></EditIcon>
              <TextField
                disabled
                id="outlined"
                label="Contraseña"
                defaultValue="******"
                className="nombreUsuario"
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default perfilUsuario;
