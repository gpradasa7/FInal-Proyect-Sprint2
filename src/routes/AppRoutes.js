import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ProductDetail } from "../components/homeComp/ProductDetail";
import RestaurantDishes from "../components/homeComp/RestaurantDishes";
import ProfileChatSupport from "../components/profileComp/profileChatSupport";
import CreateAccount from "../components/registerComp/createAccount";
import Location from "../components/registerComp/location";
import Register2 from "../components/registerComp/register2";
import Register3 from "../components/registerComp/register3";
import Register4 from "../components/registerComp/register4";

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
        <Route path="/" element={<Register />} />
        <Route path="/register2" element={<Register2 />} />
        <Route path="/register3" element={<Register3 />} />
        <Route path="/register4" register2 element={<Register4 />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/location" element={<Location />} />
        <Route path="/rest:name" element={<RestaurantDishes />} />

        <Route path="/rest/detail:index" element={<ProductDetail />} />
        <Route path="/profile/edit" element={<ProfileEdit />} />
        <Route path="/profile/support" element={<ProfileSupport />} />
        <Route path="/profile/chat" element={<ProfileChatSupport />} />
        <Route path="/home" element={<Home />} />
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
