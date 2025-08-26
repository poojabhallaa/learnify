import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import Resources from './components/Resources';
import DoubtCenter from "./components/DoubtCenter";
import Connect from "./components/Connect";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/doubt-center" element={<DoubtCenter />} />
      <Route path="/connect" element={<Connect />} />
    </Routes>
  );
}

export default App;
