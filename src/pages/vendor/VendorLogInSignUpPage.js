import React from 'react'
import Navbar from '../../components/Navbar'
import {Grid} from '@mui/material'
import VendorLogInSignup from '../../components/vendors/VendorLogInSignup'

const VendorLogInSignUpPage = () => {
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
        <VendorLogInSignup/>
        
        </Grid>
    </Grid>
    
    </>
  )
}

export default VendorLogInSignUpPage
