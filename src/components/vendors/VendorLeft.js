import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import DashboardCustomizeRoundedIcon from '@mui/icons-material/DashboardCustomizeRounded';
import SupervisedUserCircleRoundedIcon from '@mui/icons-material/SupervisedUserCircleRounded';
import StoreRoundedIcon from '@mui/icons-material/StoreRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import PostAddRoundedIcon from '@mui/icons-material/PostAddRounded';
import SummarizeRoundedIcon from '@mui/icons-material/SummarizeRounded';
import LogoutIcon from '@mui/icons-material/Logout';
import React from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import { vendorLogout } from '../../store/features/authSlice';

function VendorLeft() {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleLogout=()=>{
    dispatch(vendorLogout({navigate}))
  }
  return (
    <Box flex={1} sx={{display:{xs:'none',sm:'block',m:2}}}>
      <Box flex={12} sx={{bgcolor:'#f4a261',position:'fixed',height:'100%',borderRadius:2,p:2}}>
      <nav aria-label="main mailbox folders">
      <List sx={{marginTop:2}}>
        <ListItem disablePadding>
          <ListItemButton> 
            <ListItemIcon>
              <DashboardCustomizeRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SupervisedUserCircleRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Managers" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <StoreRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <PeopleAltRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Users" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <PostAddRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Posts" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding onClick={handleLogout}>
          <ListItemButton>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Log out" />
          </ListItemButton>
        </ListItem>
      </List>
    </nav>
    </Box>
    </Box>
  )
}

export default VendorLeft
