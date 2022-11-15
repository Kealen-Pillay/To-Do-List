import { Box, Button, Fab, Typography } from "@mui/material";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { CirclePicker } from "react-color";
import AddIcon from "@mui/icons-material/Add";
import CircleIcon from "@mui/icons-material/Circle";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

const TaskScreen = () => {
  useEffect(() => {
    const getTasks = async () => {
      await axios
        .get("http://localhost:5000/")
        .then((res) => {
          setTasks(res.data);
        })
        .catch((err) => console.log(err.message));
    };
    getTasks();
  }, []);
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);
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
      autoClose: 2000,
      hideProgressBar: true,
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
        paddingLeft: "1%",
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
          Tasks
        </Typography>
        <Button
          variant="contained"
          sx={{
            marginRight: "2%",
            backgroundColor: "#ff875c",
            color: "black",
            ":hover": {
              backgroundColor: "#f59371",
              color: "black",
            },
          }}
          onClick={logoutUser}
        >
          <Typography sx={{ fontWeight: "bold" }}>Sign out</Typography>
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
            backgroundColor: "#eb346b",
            paddingRight: "2%",
            ":hover": {
              backgroundColor: "#eb346b",
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
          backgroundColor: "#474747",
          opacity: 0.7,
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "column",
          width: "98%",
          height: "70%",
          paddingTop: "1%",
        }}
      >
        {tasks.map((task) => {
          console.log("Task:", task);
          return (
            <>
              <Button
                sx={{
                  display: "flex",
                  backgroundColor: "black",
                  width: "98%",
                  borderRadius: 5,
                  height: "15%",
                  marginBottom: "1%",
                  justifyContent: "space-between",
                  alignItems: "center",
                  opacity: 0.9,
                  paddingLeft: "1%",
                  paddingRight: "1%",
                  border: "2px solid #eb346b",
                  ":hover": {
                    backgroundColor: "#1e1e1e",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    flexDirection: "row",
                    width: "90%",
                  }}
                >
                  <CircleIcon />
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: 20,
                      fontWeight: "bold",
                      marginLeft: "1%",
                    }}
                  >
                    {"task"}
                  </Typography>
                </Box>
                <Fab
                  color="primary"
                  aria-label="add"
                  size="small"
                  sx={{
                    backgroundColor: "red",
                    ":hover": {
                      backgroundColor: "red",
                    },
                  }}
                >
                  <DeleteIcon />
                </Fab>
              </Button>
            </>
          );
        })}
      </Box>
    </Box>
  );
};

export default TaskScreen;
