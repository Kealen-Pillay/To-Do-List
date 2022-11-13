import { Box, Button, Typography } from "@mui/material";
import React from "react";

const TaskScreen = () => {
  const logoutUser = (): void => {};

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
      <Button variant="contained" onClick={logoutUser}>
        <Typography>Logout</Typography>
      </Button>
    </Box>
  );
};

export default TaskScreen;
