import { useState, createContext } from "react";

export const Context = createContext();

export const Provider = ({ children }) => {
  //UseState
  const [encuestas, setEncuestas] = useState([]);
  const [encuestaElegida, setEncuestaElegida] = useState(0)
  const [usuario, setUsuario] = useState([]);
  const [usuarioPerfil, setUsuarioPerfil] = useState([]);
  const [allAreas, setAllAreas] = useState([]);
  const [usuarioCompleto, setUsuarioCompleto] = useState([
    { area: "", email: "", id: "", imagen: "", nombre: "", password: "" },
  ]);
  const [usuarioEncuesta, setUsuarioEncuesta] = useState([
    { id_usuario: '', id_encuesta: '', realizada: ''},
  ]);
  const [esDNC, setEsDNC] = useState(0)
  const globalState = {
    encuestas,
    setEncuestas,
    usuario,
    setUsuario,
    usuarioCompleto,
    setUsuarioCompleto,
    setAllAreas,
    allAreas,
    setUsuarioEncuesta,
    usuarioEncuesta,
    setEsDNC,
    esDNC,
    setEncuestaElegida,
    encuestaElegida,
    setUsuarioPerfil,
    usuarioPerfil
  };

  return <Context.Provider value={globalState}>{children}</Context.Provider>;
};
