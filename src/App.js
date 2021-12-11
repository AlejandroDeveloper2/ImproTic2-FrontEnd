import Login from "./components/Login";
import Home from "./components/views/Home";
import Usuarios from "./components/views/Usuarios";
import Proyectos from "./components/views/Proyectos";
import Avances from "./components/views/Avances";
import Inscripciones from "./components/views/Inscripciones";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistroUsuarios from "./components/RegistroUsuarios";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route index path="/" element={<Login />} />
            <Route exact path="registro" element={<RegistroUsuarios />} />
          </Route>

          <Route>
            <Route index path="menu/home" element={<Home />} />
            <Route exact path="menu/usuarios" element={<Usuarios />} />
            <Route exact path="menu/proyectos" element={<Proyectos />} />
            <Route exact path="menu/avances" element={<Avances />} />
            <Route exact path="menu/inscripciones" element={<Inscripciones/>} />
            
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
