import { Routes, Route, Link } from "react-router-dom";

import { Home } from "../Home/Home.js"
import { Historia } from "../Historia/Historia.js"
import { Integrantes } from "../Integrantes/Integrantes.js"
import { Albumes } from "../Albumes/Albumes.js"
import { Menu } from "../Menu/Menu.js"
import { Footer } from "../Footer/Footer.js";
import{ Musicos} from "../Musicos/Musicos"

export function Rutas() {
    return (
      <div className="App">
        <Menu></Menu>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="historia" element={<Historia />} />
          <Route path="integrantes" element={<Musicos />} />
          <Route path="albumes" element={<Albumes />} />
          <Route path="menu" element={<Menu />} />
          <Route path="footer" element={<Footer />} />
        </Routes>
      </div>
    );
  }