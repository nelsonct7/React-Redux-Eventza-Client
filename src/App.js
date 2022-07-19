import Navbar from "./components/Navbar";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import LoginSignup from "./components/user/LoginSignup";
import LoginAsMain from "./pages/Loginas";
import UserLoginSignUp from "./pages/user/UserLoginSignUp";
import AdminLogInPage from "./pages/admin/AdminLogInPage";
import VendorLogInSignUpPage from "./pages/vendor/VendorLogInSignUpPage";
import AdminHome from "./pages/admin/AdminHome";
import VendorHome from "./pages/vendor/VendorHome";

function App() {
  return (
<Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/loginas" element={<LoginAsMain/>} />
        <Route exact path="/adminlogin" element={<AdminLogInPage/>} />
        <Route exact path="/adminhome" element={<AdminHome/>} />
        <Route exact path="/vendorhome" element={<VendorHome/>} />
        <Route exact path="/userlogin" element={<UserLoginSignUp/>} />
        <Route exact path="/vendorlogin" element={<VendorLogInSignUpPage/>} />
      </Routes>
    </Router> 
  );
}

export default App;
