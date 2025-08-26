import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import Resources from './components/Resources';

function App() {
  return (
    <Routes>

      <Route path="/" element={<LandingPage />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  );
}

export default App;
