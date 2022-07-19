import { Box, Stack } from '@mui/material'
import React from 'react'
import CompanyList from '../../components/admin/CompanyList'
import Dashboard from '../../components/admin/Dashboard'
import ManagerList from '../../components/admin/ManagerList'
import Sidebar from '../../components/admin/Sidebar'
import UserList from '../../components/admin/UserList'

function AdminHome() {
  return (
    <Box>
        <Stack direction='row' spacing={2} justifyContent='space-between'>
            <Sidebar/>
            <Dashboard/>
            <UserList/>
            <ManagerList/>
            <CompanyList/>
        </Stack>
    </Box>
  )
}

export default AdminHome
