import { Box, Stack } from '@mui/material'
import React from 'react'
import Feed from './Feed'
import LeftSideBar from './LeftSideBar'
import RightSideBar from './RightSideBar'

const HomeLayout = () => {
  return (
    <Box>
        <Stack direction='row' spacing={2} justifyContent='space-between'>
            <LeftSideBar/>
            <Feed/>
            <RightSideBar/>
        </Stack>
    </Box>
  )
}

export default HomeLayout
