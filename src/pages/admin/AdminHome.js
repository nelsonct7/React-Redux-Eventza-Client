import { Box, Stack } from '@mui/material'
import React,{useEffect} from 'react'
import CompanyList from '../../components/admin/CompanyList'
import Dashboard from '../../components/admin/Dashboard'
import ManagerList from '../../components/admin/ManagerList'
import Sidebar from '../../components/admin/Sidebar'
import UserList from '../../components/admin/UserList'
import {useNavigate} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'


function AdminHome() {
  const isUser=localStorage.getItem('profile')
  const isCompany=localStorage.getItem('company')
  const isAdmin=localStorage.getItem('adminProfile')
  const {showDash,showUser,showManager,showCompany}=useSelector((state)=>({...state.click}))
  const navigate=useNavigate()
  useEffect(()=>{
    
    if(isUser){
      navigate('/')
    }else if(isCompany){
      navigate('/vendorhome') 
    }
    if(!isAdmin){
      navigate('/loginas')
    } 
  },[])
  return (
    <Box>
        <Stack direction='row' spacing={2} justifyContent='space-between'>
            <Sidebar/>
            {showDash && <Dashboard/>}
            {showUser && <UserList/>}
            {showManager&&<ManagerList/>}
            {showCompany&&<CompanyList/>}
        </Stack>
    </Box>
  )
}

export default AdminHome
