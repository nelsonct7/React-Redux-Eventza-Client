import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import Navbar from '../../components/Navbar'
import LoginSignup from '../../components/user/LoginSignup'
import {Grid} from '@mui/material'
const UserLoginSignUp = () => {
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
    <Navbar/>
    <Grid container
    sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
        <Grid item>
        <LoginSignup></LoginSignup>
        </Grid>
    </Grid>
    
    </>
  )
}

export default UserLoginSignUp
