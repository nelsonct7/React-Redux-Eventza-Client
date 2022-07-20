import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import Loginas from '../components/loginas/Loginas'
import Navbar from '../components/Navbar'

function LoginAsMain() {
  const navigate=useNavigate()
  useEffect(()=>{
    const isAdmin=localStorage.getItem('adminProfile')
    const isUser=localStorage.getItem('profile')
    const isCompany=localStorage.getItem('company')
    if(isUser){
      navigate('/')
    }else if(isAdmin){
      navigate('/adminhome')
    }else if(isCompany){
      navigate('/vendorhome')
    }
  })
  return (
    <>
    <Navbar navColor='navy'></Navbar>
    <Loginas></Loginas>
    </>
  )
}

export default LoginAsMain
