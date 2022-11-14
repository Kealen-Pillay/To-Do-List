import { Box, Button, Typography } from "@mui/material";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";
import { CirclePicker } from "react-color";
import AddIcon from "@mui/icons-material/Add";

const TaskScreen = () => {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState(["Do Dishes", "Go Gym", "Eat Food"]);
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
      width: "50%",
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
        background: "#212121",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
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
          Welcome, {auth?.currentUser?.email}
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "black",
            opacity: 1,
            ":hover": {
              backgroundColor: "#C192FC",
              color: "black",
            },
          }}
          onClick={logoutUser}
        >
          <Typography sx={{ fontWeight: "bold" }}>Logout</Typography>
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "55%",
          height: "10%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "75%",
            height: "100%",
            paddingLeft: "1%",
            backgroundColor: "#474747",
            opacity: 0.95,
            borderRadius: 5,
          }}
        >
          <input
            type="text"
            placeholder="Enter Task"
            style={styles.input}
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <CirclePicker circleSize={25} colors={colors} />
        </Box>
        <Button
          sx={{
            display: "flex",
            width: "17%",
            height: "50%",
            justifyContent: "space-between",
            borderRadius: 10,
            backgroundColor: "#1CDDCB",
            paddingRight: "2%",
            ":hover": {
              backgroundColor: "#1CDDCB",
              transition: "0.3s",
              transform: "scale(1.1)",
            },
          }}
          aria-label="add"
        >
          <AddIcon
            sx={{
              color: "black",
              ":hover": {
                color: "black",
              },
            }}
          />
          <Typography sx={{ color: "black", paddingTop: "2%" }}>
            Add Task
          </Typography>
        </Button>
      </Box>

      <Box
        sx={{
          marginTop: "1%",
          borderRadius: 5,
          backgroundColor: "white",
          opacity: 0.7,
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
          height: "70%",
          paddingTop: "1%",
        }}
      >
        {tasks.map((task) => {
          return (
            <>
              <Box
                sx={{
                  display: "flex",
                  backgroundColor: "#1e1e1e",
                  width: "95%",
                  borderRadius: 5,
                  height: "15%",
                  marginBottom: "1%",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  opacity: 0.8,
                  paddingLeft: "1%",
                }}
              >
                <Typography
                  sx={{ color: "white", fontSize: 20, fontWeight: "bold" }}
                >
                  {task}
                </Typography>
              </Box>
            </>
          );
        })}
      </Box>
    </Box>
  );
};

export default TaskScreen;
