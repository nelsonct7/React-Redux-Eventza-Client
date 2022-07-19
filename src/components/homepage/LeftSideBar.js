import { Box, Typography } from '@mui/material'
import React from 'react'
import Listcomponent from './Listcomponent'

const LeftSideBar = () => {
  return (
    
      <Box flex={1}  p={2} 
      sx={{display:{xs:'none',sm:'block'}}}>
        <Box sx={{position:'fixed'}}>
        <Box bgcolor={'#0077b6'} sx={{borderRadius:2,p:1,m:2}}>
        <Typography variant='h6'>Events</Typography>
        <Listcomponent />
        </Box>
        <Box bgcolor={'#0077b6'} sx={{borderRadius:2,p:1,m:2}}>
        <Typography variant='h6'>Managers</Typography>
        <Listcomponent />
        </Box>
        {/* <Box bgcolor={'#0077b6'} sx={{borderRadius:2,p:1,m:2}}>
        <Typography variant='h6'>Companies</Typography>
        <Listcomponent />
        </Box> */}
        </Box>
      </Box>
      
      
      )
}

export default LeftSideBar
