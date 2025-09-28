import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import Setting from "./pages/Setting";
import ProjectManagement from "./pages/ProjectManagement";
import TeamManagement from "./pages/TeamManagement";

function App() {
  return (
    <>
      <Router>
        <Routes>
          // public routes
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
          // protected routes
          <Route element={<ProtectedRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route element={<ProtectedRoutes />}>
            <Route path="/settings" element={<Setting />} />
          </Route>
          <Route element={<ProtectedRoutes />}>
            <Route path="/projects" element={<ProjectManagement />} />
          </Route>
          <Route element={<ProtectedRoutes />}>
            <Route path="/teams" element={<TeamManagement />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
