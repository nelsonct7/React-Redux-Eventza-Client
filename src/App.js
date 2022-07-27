import Navbar from "./components/Navbar";
import React,{useEffect,useState} from "react";
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'
import Home from "./pages/Home";
import LoginSignup from "./components/user/LoginSignup";
import LoginAsMain from "./pages/Loginas";
import UserLoginSignUp from "./pages/user/UserLoginSignUp";
import AdminLogInPage from "./pages/admin/AdminLogInPage";
import VendorLogInSignUpPage from "./pages/vendor/VendorLogInSignUpPage";
import AdminHome from "./pages/admin/AdminHome";
import VendorHome from "./pages/vendor/VendorHome";
import { adminTockenValidator,userTockenValidator,vendorTockenValidator } from "./store/features/authSlice";

function App() {
const dispatch=useDispatch()
const adminTocken=JSON.parse(localStorage.getItem('adminTocken'))
const userTocken=JSON.parse(localStorage.getItem('userTocken'))
const vendorTocken=JSON.parse(localStorage.getItem('vendorTocken'))
useEffect(()=>{
  if(adminTocken){
    dispatch(adminTockenValidator({adminTocken}))
  }
  if(userTocken){
    dispatch(userTockenValidator({userTocken}))
  }
  if(vendorTocken){
    dispatch(vendorTockenValidator({vendorTocken}))
  }

},[])
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
