import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Signup from "./Pages/Signup";
import ForgotPassword from "./Pages/ForgotPassword";
import Login  from "./Pages/Login";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/auth/forgotPassword" element={<ForgotPassword />} />
      </Routes>
    </div>
  );
}


export default App;
