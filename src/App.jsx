import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Transacao from "./components/Transacao";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Menu from "./Menu";
import Register from "./components/Register";

function AppLayout() {
  const location = useLocation();
  const hideMenu =
    location.pathname === "/" ||
    location.pathname === "/login" ||
    location.pathname === "/register";

  return (
    <>
      {!hideMenu && <Menu />}
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/transacao" element={<Transacao />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;