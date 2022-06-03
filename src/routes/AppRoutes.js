import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Navbar from "../components/Navbar";
import Home from "../containers/Home";
import Orders from "../containers/order";
import Profile from "../containers/profile";
import Register from "../containers/Register";
import Search from "../containers/search";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas publicas */}
        <Route path="/" element={<Register />} />
        <Route path="/register" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/orders" element={<Orders />} />

        {/* Redireccionamiento */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Navbar />
    </BrowserRouter>
  );
};

export default AppRoutes;
