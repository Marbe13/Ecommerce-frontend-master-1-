import React from "react";
import { NavBar } from "./NavBar";
import { Outlet } from "react-router-dom";
import "./Layout.css";

export const Layout = () => {
  return (
    <>
      <NavBar />
      <div className="container mt-4">
        <Outlet />
      </div>
    </>
  );
};
