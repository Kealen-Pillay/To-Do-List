import React from "react";
import { Box, TextField, Typography } from "@mui/material";

const LoginScreen = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(to right, #333999, #ff00cc)",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "50%",
          height: "70%",
          backgroundColor: "white",
          opacity: 0.5,
          borderRadius: 5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            // background: "red",
            width: "50%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography>Username:</Typography>
          <TextField variant="outlined" />
        </Box>
        <Box
          sx={{
            // background: "green",
            width: "50%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography>Password:</Typography>
          <TextField variant="outlined" />
        </Box>
      </Box>
    </Box>
  );
};

export default LoginScreen;
