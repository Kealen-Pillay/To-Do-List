import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Box
      sx={{
        background: "linear-gradient(to right, #ff875c, #eb346b)",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "60%",
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
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "20%",
            width: "40%",
            marginTop: "5%",
            marginBottom: "5%",
          }}
        >
          <img src={require("../images/tickIcon.png")} alt="" height="100%" />
          <Typography sx={{ fontWeight: "bold", fontSize: 60 }}>
            To Do
          </Typography>
        </Box>
        <Box
          sx={{
            width: "40%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "1%",
          }}
        >
          <TextField
            variant="outlined"
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sx={{ width: "100%" }}
          />
        </Box>
        <Box
          sx={{
            width: "40%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "1%",
            marginBottom: "5%",
          }}
        >
          <TextField
            variant="outlined"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ width: "100%" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "40%",
            height: "20%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "black",
              width: "100%",
              height: "45%",
              ":hover": {
                backgroundColor: "black",
                transform: "scale(1.05)",
              },
            }}
          >
            <Typography>Register</Typography>
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "black",
              width: "100%",
              height: "45%",
              ":hover": {
                backgroundColor: "black",
                transform: "scale(1.05)",
              },
            }}
          >
            <Typography>Login</Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginScreen;
