import React from 'react'
import AdminLogin from '../../components/admin/AdminLogin'
import Navbar from '../../components/Navbar'
import {Grid} from '@mui/material'

const AdminLogInPage = () => {
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
