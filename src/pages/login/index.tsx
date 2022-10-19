import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNotification } from "../../context/NotificationProvider";
import { LoginValidate } from "../../utils/validateForm";

type User = {
  email: string;
  password: string;
};

export const LoginPage: React.FC<{}> = () => {

  const {getError, getSuccess} = useNotification()

  const [loginData, setLoginData] = useState<User>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setLoginData({
      email: "",
      password: "",
    });
    //VALIDANDO CON YUP
    LoginValidate.validate(loginData).then(()=>{
      getSuccess("Initialize");
    }).catch((error)=>{
      getError(error.message)
    })
  }

  return (
    <Container maxWidth="sm">
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh"}}
      >
        <Grid item>
          <Paper sx={{ padding: "2.2em", borderRadius: "0.5em" }}>
            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              onSubmit={handleSubmit}
            >
              <Typography variant="h4" sx={{ mt: 1.5, mb: 1.5 }}>
                {" "}
                Login{" "}
              </Typography>
              <TextField
                fullWidth
                label="email"
                type="email"
                sx={{ mt: 2, mb: 1.5 }}
                onChange={handleChange}
                name="email"
                value={loginData.email}
              />
              <TextField
                margin="normal"
                fullWidth
                label="password"
                type="password"
                sx={{ mt: 1.5, mb: 1.5 }}
                onChange={handleChange}
                name="password"
                value={loginData.password}
              />
              <Button
                variant="contained"
                type="submit"
                sx={{ mt: 1.5, mb: 1.5, width: "200px" }}
              >
                Login
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
