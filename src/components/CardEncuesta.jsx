import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context";



export default function CardEncuesta({ name, img, tituloEncuesta, idEncuesta }) {

  const { setEsDNC, setEncuestaElegida } = useContext(Context);

  let onClickComenzar = () =>{
    setEsDNC(0)
    setEncuestaElegida(idEncuesta)
  }

  return (
    <Card className="cardMain">
      <CardMedia component="img" height="140" image={img} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" id="idCard">
          <center>{name}</center>
        </Typography>
      </CardContent>
      <div className="cardActions">
        <div className="buttonAction">
          <Button variant="contained" size="large">
            Mas Info
          </Button>
        </div>
        <NavLink to={"/previewEncuesta"} onClick={onClickComenzar}>
          <div className="buttonAction">
            <Button variant="contained" size="large" color="success">
              Comenzar Encuesta
            </Button>
          </div>
        </NavLink>
      </div>
    </Card>
  );
}
