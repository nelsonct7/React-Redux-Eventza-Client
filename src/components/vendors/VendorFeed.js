import { Box } from '@mui/material'
import React from 'react'
import VendorCard from './VendorCard'

function VendorFeed() {
  return (
    <Box flex={4} p={2}>
        <VendorCard/>
        <VendorCard/>
        <VendorCard/>
    </Box>
  )
}

export default VendorFeed
