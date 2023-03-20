import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import logo from "../img/logo.png";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { Context } from "../Context";
import "../css/appBar.css";

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate();
  const { usuario, setUsuario, usuarioCompleto, usuarioPerfil } =
    useContext(Context);

  useEffect(() => {
    handleCloseNavMenu();
    handleCloseUserMenu();
    // alert(usuarioPerfil[0].perfil_id)
  }, []);

  const logout = () => {
    setUsuario(null);
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const abrirPerfil = () => {
    setAnchorElUser(null);
    navigate("/perfilUsuario");
  };

  function prueba() {
    if (usuarioPerfil > 0) {
      if (usuarioPerfil === 2) {
        return true;
      }

      if (usuarioPerfil === 1) {
        return false;
      }
    }
    return true;
  }

  const pages = prueba()
    ? [
        { label: "Iniciar Sesion", url: "/Login" },
        { label: "Registrate", url: "/Registrate" },
        { label: "Encuestas", url: "/homeUsuario" },
        { label: " - ", url: "/homeUsuario" },
      ]
    : [
        { label: "Iniciar Sesion", url: "/Login" },
        { label: "Registrate", url: "/Registrate" },
        { label: "Panel", url: "/homeAdmin" },
        { label: "Crear Encuesta", url: "/crearEncuesta" },
      ];

  const settings = prueba()
    ? [
        { label: "Perfil", url: "/perfilUsuario" },
        { label: "Cerrar Sesion", url: "/login" },
      ]
    : [{ label: "Cerrar Sesion", url: "/login" }];

  let menuItemUsuarioPriv = () => {
    return (
      <div>
        <MenuItem key={pages[2].label} onClick={handleCloseNavMenu}>
          <Typography textAlign="center">{pages[2].label}</Typography>
        </MenuItem>
      </div>
    );
  };

  let menuItemUsuarioPub = () => {
    return (
      <div>
        <MenuItem key={pages[0].label} onClick={handleCloseNavMenu}>
          <Typography textAlign="center">{pages[0].label}</Typography>
        </MenuItem>

        <MenuItem key={pages[1].label} onClick={handleCloseNavMenu}>
          <Typography textAlign="center">{pages[1].label}</Typography>
        </MenuItem>
      </div>
    );
  };

  function privateMenuItem(usuario) {
    if (
      usuario !== null &&
      (usuario.email !== undefined || usuario.email !== "")
    ) {
      return (
        <div className="menuItem">
          <NavLink to={pages[2].url}>
            <Button
              key={pages[2].label}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {pages[2].label}
            </Button>
          </NavLink>
          <NavLink to={pages[3].url}>
            <Button
              key={pages[3].label}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {pages[3].label}
            </Button>
          </NavLink>
        </div>
      );
    } else {
      return (
        <div className="menuItem">
          <NavLink to={pages[0].url}>
            <Button
              key={pages[0].label}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {pages[0].label}
            </Button>
          </NavLink>

          <NavLink to={pages[1].url}>
            <Button
              key={pages[1].label}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {pages[1].label}
            </Button>
          </NavLink>
        </div>
      );
    }
  }

  function publicMenuItem(usuario) {
    if (
      usuario !== undefined &&
      (usuario.email !== undefined || usuario.email !== "")
    ) {
      return (
        <div className="menuItem">
          <NavLink to={pages[0].url}>
            <Button
              key={pages[0].label}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {pages[0].label}
            </Button>
          </NavLink>

          <NavLink to={pages[1].url}>
            <Button
              key={pages[1].label}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {pages[1].label}
            </Button>
          </NavLink>
        </div>
      );
    } else {
      return (
        <div className="menuItem">
          <NavLink to={pages[2].url}>
            <Button
              key={pages[2].label}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {pages[2].label}
            </Button>
          </NavLink>
          <NavLink to={pages[3].url}>
            <Button
              key={pages[3].label}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {pages[3].label}
            </Button>
          </NavLink>
        </div>
      );
    }
  }

  function publicItemPerfil(usuario) {
    if (
      usuario !== null &&
      usuario !== undefined &&
      (usuario.email !== undefined || usuario.email !== "")
    ) {
      return (
        <div>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src={usuarioCompleto[0].imagen}></Avatar>
              {usuarioCompleto[0].nombre}
            </IconButton>
          </Tooltip>

          {prueba() ? (
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <NavLink to={settings[0].url}>
                <MenuItem key={settings[0].label} onClick={abrirPerfil}>
                  <Typography textAlign="center">
                    {settings[0].label}
                  </Typography>
                </MenuItem>
              </NavLink>
              <NavLink to={settings[1].url}>
                <MenuItem key={settings[1].label} onClick={logout}>
                  <Typography textAlign="center">
                    {settings[1].label}
                  </Typography>
                </MenuItem>
              </NavLink>
            </Menu>
          ) : (
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <NavLink to={settings[0].url}>
                <MenuItem key={settings[0].label} onClick={logout}>
                  <Typography textAlign="center">
                    {settings[0].label}
                  </Typography>
                </MenuItem>
              </NavLink>
            </Menu>
          )}
        </div>
      );
    } else {
      <div></div>;
    }
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            ></IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {!usuario ? menuItemUsuarioPriv : menuItemUsuarioPub}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {!usuario || usuario.length !== 0
              ? privateMenuItem(usuario)
              : publicMenuItem(usuario)}
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <img src={logo} className="appLogo" alt="logo" />
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            {!usuario || usuario.length !== 0 ? (
              publicItemPerfil(usuario)
            ) : (
              <div></div>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
