import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Transacao from "./components/transacao";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Menu from "./Menu";



function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Login />} /> {/*Tela de login vai aqui */}
        <Route path="/transacao" element={<Transacao />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;