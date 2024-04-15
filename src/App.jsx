import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home"
import Sobre from "./pages/Sobre/Sobre"
import Projetos from "./pages/Projetos/Projetos"

export default function App(){
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/sobre" element={<Sobre/>} />
          <Route path="/projetos" element={<Projetos/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}