import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./components/HomePage";

import 'bootstrap-icons/font/bootstrap-icons.css';
import Basketball from "./components/games/Basketball";
import Cricket from "./components/games/Cricket";
import Badminton from "./components/games/Badminton";
import Chess from "./components/games/Chess";
import Football from "./components/games/Football";
import Kabaddi from "./components/games/Kabaddi";
import Tabletennis from "./components/games/Tabletennis";
import Carroms from "./components/games/Carroms";
import Vollyball from "./components/games/Vollyball";
import Throwball from "./components/games/Throwball";
import Statistics from "./components/Statistics";
import AdminLogin from "./components/AdminLogin"
import SportsFixtures from "./components/SportsFixtures";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin_login" element={<AdminLogin />} />

        <Route path="/badminton" element={<Badminton />} />
        <Route path="/basketball" element={<Basketball />} />
        <Route path="/chess" element={<Chess />} />
        <Route path="/cricket" element={<Cricket />} />
        <Route path="/football" element={<Football />} />
        <Route path="/kabaddi" element={<Kabaddi />} />
        <Route path="/carroms" element={<Carroms />} />
        <Route path="/tabletennis" element={<Tabletennis />} />
        <Route path="/vollyball" element={<Vollyball />} />
        <Route path="/throwball" element={<Throwball />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/sportsfixtures" element={<SportsFixtures />} />

</Routes>
    </Router>
  );
}

export default App;