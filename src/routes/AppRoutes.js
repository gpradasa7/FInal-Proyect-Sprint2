import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ProductDetail } from "../components/homeComp/ProductDetail";
import RestaurantDishes from "../components/homeComp/RestaurantDishes";
import ProfileChatSupport from "../components/profileComp/profileChatSupport";

import Home from "../containers/Home";
import Orders from "../containers/order";
import Profile from "../containers/profile";
import ProfileEdit from "../containers/ProfileEdit";
import ProfileSupport from "../containers/ProfileSupport";
import Register from "../containers/Register";
import Search from "../containers/search";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas publicas */}
        <Route path="/" element={<Home />} />
        <Route path="/rest:name" element={<RestaurantDishes />} />

        <Route path="/rest/detail:name" element={<ProductDetail />} />
        <Route path="/profile/edit" element={<ProfileEdit />} />
        <Route path="/profile/support" element={<ProfileSupport />} />
        <Route path="/profile/chat" element={<ProfileChatSupport />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/orders" element={<Orders />} />

        {/* Redireccionamiento */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
