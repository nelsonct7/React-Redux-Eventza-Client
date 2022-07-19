import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import DashboardCustomizeRoundedIcon from '@mui/icons-material/DashboardCustomizeRounded';
import SupervisedUserCircleRoundedIcon from '@mui/icons-material/SupervisedUserCircleRounded';
import StoreRoundedIcon from '@mui/icons-material/StoreRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import PostAddRoundedIcon from '@mui/icons-material/PostAddRounded';
import SummarizeRoundedIcon from '@mui/icons-material/SummarizeRounded';
import React from 'react'

function VendorLeft() {
  return (
    <Box flex={1} sx={{m:2}}>
      <Box flex={12} sx={{bgcolor:'#f4a261',position:'fixed',height:'100%',borderRadius:2,p:2}}>
      <nav aria-label="main mailbox folders">
      <List sx={{marginTop:2}}>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <DashboardCustomizeRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="DashBoard" />
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
            <ListItemText primary="Companies" />
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
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SummarizeRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Reports" />
          </ListItemButton>
        </ListItem>
      </List>
    </nav>
    </Box>
    </Box>
  )
}

export default VendorLeft
