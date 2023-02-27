import './App.css'
import Login from './views/login.jsx'
import Registrate from './views/registrate'
import HomeUsuario from './views/homeUsuario'
import PerfilUsuario from './views/perfilUsuario'
import PreviewEncuesta from './views/previewEncuesta'
import Encuesta from './views/encuesta'
import Evaluaciones from './views/evaluaciones'
import { Typography } from '@mui/material'
import { Provider } from './Context'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppBar from "./components/appBar";
import Footer from "./components/footer"

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
            <Route path="/previewEncuesta"element={<PreviewEncuesta/>}/>
            <Route path="/Encuesta"element={<Encuesta/>}/>
            <Route path="/Evaluaciones"element={<Evaluaciones/>}/>
          </Routes>
        </BrowserRouter>
      </Provider>
    <Footer></Footer>
    </div>
  )
}

export default App
