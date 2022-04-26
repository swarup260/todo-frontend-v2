import { Routes, Route } from 'react-router-dom';
import Home from "../pages/Home";
import About from "../pages/About";
import Error from "../pages/Error";
import Dashboard from "../pages/Dashboard";
import SignUp from "../pages/SignUp";
import Projects from "../pages/Projects";
import Project from "../pages/Project";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/project/:id" element={<Project />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
