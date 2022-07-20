import React,{useEffect} from 'react'
import AdminLogin from '../../components/admin/AdminLogin'
import Navbar from '../../components/Navbar'
import {Grid} from '@mui/material'
import {useNavigate} from 'react-router-dom'

const AdminLogInPage = () => {
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
    <div>
      <Navbar></Navbar>
      <Grid container
    sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }} 
    >
        <Grid item>
        <AdminLogin/>
        </Grid>
    </Grid>
    </div>
  )
}

export default AdminLogInPage
