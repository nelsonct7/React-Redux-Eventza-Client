import React from 'react'
import Navbar from '../../components/Navbar'
import LoginSignup from '../../components/user/LoginSignup'
import {Grid} from '@mui/material'
const UserLoginSignUp = () => {
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
