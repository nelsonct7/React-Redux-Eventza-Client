import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

function VendorCard() {
  return (
    <Box sx={{p:2,boxShadow:10,m:4,borderRadius:4,bgcolor:'#f4a261'}}>
      <Card sx={{maxHeight:700,p:2,boxShadow:10}}>
      <CardMedia
        component="img"
        height="140"
        image="https://post.healthline.com/wp-content/uploads/2021/06/lizard-iguana-1200x628-facebook.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Box>
  )
}

export default VendorCard
