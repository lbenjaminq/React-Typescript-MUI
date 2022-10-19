import React from "react";
import { Box, Grid, Typography, Divider } from "@mui/material";

type HeaderProps = {
  title: string;
  description: string;
  element?: React.ReactNode;
};

export const HeaderComponent: React.FC<HeaderProps> = ({
  title,
  description,
  element,
}) => {
  return (
    <div>
      <Box sx={{height: "350px"}}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{height:"100%"}}
        >
          <Grid item>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              sx={{height:"100%"}}
            >
              <Grid item>
                <Typography variant="h1">{title}</Typography>
              </Grid>
              <Grid item sx={{mt:2}}>
                <Typography>{description}</Typography>
              </Grid>
              {
                element && <Grid sx={{mt:4}}>{element}</Grid>
              }
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Divider/>
    </div>
  );
};
