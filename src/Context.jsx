import { useState, useEffect, createContext } from "react";
import axios from "axios";

export const Context = createContext();

export const Provider = ({ children }) => {
  //UseEffect
  useEffect(() => {
    // Make a request for a user with a given ID
    async function getUser() {
      let url = "https://owldeev.github.io/hito2-proyecto-final/encuestas.json";
      let reqOptions = {
        url: url,
        method: "GET",
      };

      let response = await axios.request(reqOptions);
      setEncuestas(response.data);
    }

    getUser();

  }, []);

  //UseState
   const [encuestas, setEncuestas] = useState([]);
   const [usuario, setUsuario] = useState([]);
   const globalState = { encuestas, setEncuestas, usuario, setUsuario};

  return <Context.Provider value={globalState}>{children}</Context.Provider>;
};
