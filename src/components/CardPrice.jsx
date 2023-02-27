import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";


export default function CardPrice({ name, img}) {

  return (
    <Card className="cardMain">
      <CardMedia component="img" height="140" image={img} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" id="idCard">
          <center>{name}</center>
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Ingredientes:
        </Typography>
        <Typography gutterBottom variant="h4" component="div">
          <center>{"$ "}</center>
        </Typography>
      </CardContent>
      <div className="cardActions">
        <div className="buttonAction">
          <Button
            variant="contained"
            size="large"
          >
            Mas Info
          </Button>
        </div>
        <div className="buttonAction">
          <Button 
          variant="contained" 
          size="large" 
          color="success">
            Anadir <ShoppingCartIcon></ShoppingCartIcon>
          </Button>
        </div>
      </div>
    </Card>
  );
}
