import React from "react";
import { Route, Routes } from "react-router-dom";
import ResetPassword from "../Components/Auth/ResetPassword";
import Login from "../Components/Auth/Login";
import ForgotPassword from "../Components/Auth/ForgotPassword";
const AuthRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/forgot-password" element={<ForgotPassword />} />
        <Route exact path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </>
  );
};

export default AuthRoutes;
