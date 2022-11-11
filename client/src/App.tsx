import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./components/LoginScreen";
import TaskScreen from "./components/TaskScreen";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/tasks" element={<TaskScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
