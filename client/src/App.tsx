import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./components/LoginScreen";
import TaskScreen from "./components/TaskScreen";
import RegisterScreen from "./components/RegisterScreen";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/tasks" element={<TaskScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
