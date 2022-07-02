import React from "react"
import Nav from '../components/header/Nav'
import Footer from '../components/footer/Footer'
import { Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <div className="container">
      <Nav />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Layout