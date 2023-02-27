import "../css/encuesta.css";
import "survey-core/defaultV2.min.css";
import { Survey } from "survey-react-ui";
import { Model } from "survey-core";
import {
  Container,
  Box,
  Button,
  Divider,
  Typography,
  TextField,
  Grid
} from "@mui/material";

const surveyJson = {
  elements: [
    {
      name: "Campo laboral",
      title: "Cual es su campo laboral:",
      type: "text",
    },
    {
      name: "Describase",
      title: "Describase en 2 sencillas palabras:",
      type: "text",
    },
  ],
};

function Encuesta() {
  const survey = new Model(surveyJson);
  return (
    <Container Container>
      <Grid xs={12}>
        <Survey model={survey} />;
      </Grid>
    </Container>
  );
}

export default Encuesta;
