import React from "react";
import { Box, Typography } from "@mui/material";

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
        }}
      ></Box>
    </Box>
  );
};

export default LoginScreen;
