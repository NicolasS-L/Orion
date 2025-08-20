import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Transacao from "./components/Transacao";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Menu from "./Menu";
import Register from "./components/Register";
import { AuthProvider } from "./context/AuthContext";

function AppLayout() {



function App() {
   const location = useLocation();
    const hideMenu =
      location.pathname === "/" ||
      location.pathname === "/login" ||
      location.pathname === "/register";
  return (
    <Router>
      <AppLayout />
    <AuthProvider>
      <Router>
        <Menu />
        <>
        {!hideMenu && <Menu />}
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/transacao" element={<Transacao />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;