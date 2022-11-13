import { Box, Button, Typography } from "@mui/material";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";
import { CirclePicker } from "react-color";

const TaskScreen = () => {
  const [newTask, setNewTask] = useState("");
  const colors = [
    "#f44336",
    "#e91e63",
    "#9c27b0",
    "#673ab7",
    "#3f51b5",
    "#2196f3",
    "#03a9f4",
    "#00bcd4",
    "#009688",
    "#4caf50",
    "#8bc34a",
    "#cddc39",
  ];

  const styles = {
    input: {
      borderRadius: 25,
      border: "1px solid black",
      paddingLeft: "1rem",
      width: "40%",
      height: "50%",
    },
  };
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
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: 70,
            color: "white",
            opacity: 0.75,
          }}
        >
          Welcome, User
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "black",
            opacity: 1,
            ":hover": {
              backgroundColor: "#1e1e1e",
            },
          }}
          onClick={logoutUser}
        >
          <Typography>Logout</Typography>
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "10%",
          paddingLeft: "5%",
        }}
      >
        <input
          type="text"
          placeholder="Enter Task"
          style={styles.input}
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#1e1e1e",
            opacity: 0.95,
            borderRadius: 5,
            height: "100%",
            paddingLeft: "1%",
          }}
        >
          <CirclePicker circleSize={25} colors={colors} />
        </Box>
      </Box>
    </Box>
  );
};

export default TaskScreen;
