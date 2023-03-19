import "../css/home.css";
import { useContext, useEffect } from "react";
import axios from "axios";
import { Context } from "../Context";


function Home() {
  const { setAllAreas } = useContext(Context);

  useEffect(()=>{
    iniciarSesion()
  },[])

  const iniciarSesion = async () => {
    const urlServer = "http://localhost:4000";
    const endpoint = "/home";
    try {
      let allAreas = await axios.get(urlServer + endpoint);
      let formatoArea = []
      for(let area of allAreas.data){
        let newArea = {
            id: area.id,
            label: area.nombre,
        }
        formatoArea.push(newArea)
      }
      setAllAreas(formatoArea)
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <div className="backgroundHome">
      <img
        src={'https://img.freepik.com/foto-gratis/gente-negocios-fondo-azul_53876-101889.jpg?w=900&t=st=1679192062~exp=1679192662~hmac=e37c9c389b15bfa29d1e50f7e9efb364daf579e151735979a1dd8fc2fb9ab217'}
        alt={'fondo'}
        loading="lazy"
        className="image-difuminada"
      />
    </div>
  );
}

export default Home;
