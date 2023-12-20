import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Buscarusuario = React.lazy(() => import("pages/BuscarUsuario"));
const Buscarusuarios = React.lazy(() => import("pages/BuscarUsuarios"));
const EditarUsuario = React.lazy(() => import("pages/EditarUsuario"),);
const CriarUsuario = React.lazy(() => import("pages/CriarUsuario"));
const MenuInicial = React.lazy(() => import("pages/MenuInicial"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<MenuInicial />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/criarusuario" element={<CriarUsuario/>} />
          <Route path="/editarusuario" element={<EditarUsuario/>}/>
          <Route path="/buscarusuarios" element={<Buscarusuarios/>} />
          <Route path="/buscarusuario" element={<Buscarusuario/>} />
          <Route path="/dhiwise-dashboard" element={<Home/>} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
