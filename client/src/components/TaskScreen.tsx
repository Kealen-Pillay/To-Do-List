import { Box, Button, Typography } from "@mui/material";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

const TaskScreen = () => {
  const navigate = useNavigate();

  const logoutUser = async () => {
    await signOut(auth);
    navigate("/");
  };

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
