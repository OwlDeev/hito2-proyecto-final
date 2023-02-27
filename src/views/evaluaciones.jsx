import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import GallerySlide from "../components/gallerySlide";

function Evaluaciones() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid xs={12}>
          <GallerySlide></GallerySlide>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Evaluaciones;
