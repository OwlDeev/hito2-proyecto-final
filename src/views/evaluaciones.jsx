import React from "react";
import {
  Box,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import GallerySlide from "../components/gallerySlide";
import "../css/evaluaciones.css";

function Evaluaciones() {
  return (
    <Box className="boxMainEvaluaciones">
      
      <Grid className="gridGallery">
      
        <Grid xs={12}>
        <Typography variant="h4" gutterBottom className="labelTitulo">
              Encuestas por realizar
            </Typography>
          <Box className="divGaleriaEncuestas">
            <GallerySlide></GallerySlide>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Evaluaciones;
