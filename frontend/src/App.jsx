import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Dishes from "./pages/Dishes.jsx";
import Admin from "./pages/Admin.jsx";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dishes" element={<Dishes />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

