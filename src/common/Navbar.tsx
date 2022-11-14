import React from "react";
import {
  Stack,
  Box,
  AppBar,
  Toolbar,
  Container,
  Grid,
  Button,
  Typography,
  Drawer,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Cart } from "../components";

export const Navbar: React.FC<{}> = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <Container maxWidth="xl">
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item>
                <Typography>BTC</Typography>
              </Grid>
              <Grid item>
                <Stack direction="row" spacing={2}>
                  <Button variant="contained" onClick={() => navigate("login")}>
                    Login
                  </Button>
                  <Button>Register</Button>
                </Stack>
              </Grid>
              <Grid item>
                <Button onClick={() => setOpen(!open)}>cambiar</Button>
                <Cart open={open} setOpen={setOpen} />
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
