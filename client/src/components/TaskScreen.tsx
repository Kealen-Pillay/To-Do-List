import { Box, Button, Typography } from "@mui/material";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const TaskScreen = () => {
  const navigate = useNavigate();

  const logoutUser = async () => {
    await signOut(auth);
    navigate("/");
    toast.success("You have been signed out", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
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
