import "../css/encuesta.css";
import "survey-core/defaultV2.min.css";
import { Survey } from "survey-react-ui";
import { Model } from "survey-core";
import { Container, Grid, Button } from "@mui/material";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Context } from "../Context";
//dialog import
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useNavigate } from "react-router-dom";

function Encuesta() {

  const navigate = useNavigate();
  const { usuarioCompleto, esDNC, encuestaElegida } = useContext(Context);
  const [idEncuesta, setIdEncuesta] = useState(0);
  const [survey, setSurvey] = useState(new Model())
  const [openDialogActualizar, setOpenDiagolActualizar] = useState(false);


  useEffect(() => {
    if (esDNC === 1) {
      setIdEncuesta(1);
    } else {
      setIdEncuesta(0);
    }
    let surveyJson = {}
    switch (encuestaElegida) {
      case 0:
        surveyJson = {
          elements: [
            {
              name: "actitud",
              title: "Cual es su tu actitud en el campo laboral:",
              type: "rating",
              isRequired: true
            },
            {
              name: "motivación",
              title: "Cual es su tu motivación en el campo laboral:",
              type: "rating",
              isRequired: true
            },
          ],
        };
        break;

        case 1:
        surveyJson = {
          elements: [
            {
              name: "actitud",
              title: "Cual es su tu actitud en el campo laboral:",
              type: "rating",
              isRequired: true
            },
            {
              name: "motivación",
              title: "Cual es su tu motivación en el campo laboral:",
              type: "rating",
              isRequired: true
            },
          ],
        };
        break;
    
        case 2:
          surveyJson = {
            elements: [
              {
                name: "nivel",
                title: "Cual es tu nivel de liderazgo en el campo laboral:",
                type: "rating",
                isRequired: true
              },
              {
                name: "acompañamiento",
                title: "Cual es tu nivel de acompañamiento en el campo laboral:",
                type: "rating",
                isRequired: true
              },
            ],
          };
          break;

          case 3:
        surveyJson = {
          elements: [
            {
              name: "nivel",
              title: "Cual es tu nivel de conocimiento de tus sentimientos:",
              type: "rating",
              isRequired: true
            },
            {
              name: "atencion",
              title: "Que nivel prestas atención en tus emociones:",
              type: "rating",
              isRequired: true
            },
          ],
        };
        break;
        default:
        break;
    }

    let model = new Model(surveyJson)
    setSurvey(model)
  }, []);  

  const registrarDatos = async (respuestaEnc) => {
    const urlServer = "http://localhost:4000";
    const endpoint = "/encuesta";
    try {
      await axios.post(urlServer + endpoint, respuestaEnc);
      handleClickOpenDialog()
    } catch (error) {
      console.log(error)
    }
  };

  const onComplete = (survey, options) => {
      const valores = {
        idUsuario: usuarioCompleto[0].id,
        idEncuesta: (encuestaElegida == 0) ? 1: encuestaElegida,
        respuesta: survey.data,
      }
    registrarDatos(valores)
  };


  const handleCloseDialog = () => {
    setOpenDiagolActualizar(false);
    navigate("/homeUsuario");
  };

  const handleClickOpenDialog = () => {
    setOpenDiagolActualizar(true);
  };

  return (
    <Container Container>
      <Grid xs={12}>
        <Survey model={survey} onComplete={onComplete} />;
      </Grid>

      <Dialog
        open={openDialogActualizar}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Importante"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Como cambiaste el 'correo electronico' o la 'contraseña', la app se
            reiniciara con estos cambios.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} autoFocus>
            Volver al Home
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default Encuesta;
