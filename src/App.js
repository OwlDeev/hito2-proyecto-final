import './App.css'
import Login from './views/login.jsx'
import Registrate from './views/registrate'
import HomeUsuario from './views/homeUsuario'
import PerfilUsuario from './views/perfilUsuario'
import { Typography } from '@mui/material'
import { Provider } from './Context'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppBar from "./components/appBar";

function App() {
  return (
    <div className="App">
      <Provider>
      <BrowserRouter>
          <AppBar></AppBar>
          <Routes>
            <Route path="/Login" element={<Login/>}  />
            <Route path="/Registrate" element={<Registrate/>} />
            <Route path="/homeUsuario" element={<HomeUsuario />} />
            <Route path="/perfilUsuario"element={<PerfilUsuario/>}/>
          </Routes>
        </BrowserRouter>
      </Provider>

      <footer className="footer">
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} p={1}>
          <center>© 2016-2022 Developer OwlDev. All rights reserved.</center>
        </Typography>
      </footer>
    </div>
  )
}

export default App
