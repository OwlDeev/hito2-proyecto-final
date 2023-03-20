import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context";

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

export default function CardEncuesta({
  name,
  img,
  tituloEncuesta,
  idEncuesta,
}) {
  const { setEsDNC, setEncuestaElegida } = useContext(Context);

  let onClickComenzar = () => {
    setEsDNC(0);
    setEncuestaElegida(idEncuesta);
  };

  let onClickInfo = () => {
    return <Modal abrir="true"></Modal>;
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Card className="cardMain">
        <CardMedia component="img" height="140" image={img} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" id="idCard">
            <center>{name}</center>
          </Typography>
        </CardContent>
        <div className="cardActions">
          <div className="buttonAction">
            <Button variant="contained" size="large" onClick={handleOpen}>
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

      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                {name}
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                Esta es información de la encuesta {name}
              </Typography>
            </Box>
          </Fade>
        </Modal>
      </div>
    </>
  );
}
