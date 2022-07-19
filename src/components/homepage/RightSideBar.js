import { Box, Typography,Avatar,AvatarGroup,ImageList,ImageListItem, } from '@mui/material'
import React from 'react'

const RightSideBar = () => {
  return (
      <Box flex={1} p={2}
      sx={{display:{xs:'none',sm:'block'}}}>
        <Box sx={{position:'fixed'}}>
        <Box>
        <Typography variant={'h6'}>Followers</Typography>
        <AvatarGroup max={7}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
        <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
        </Box>
        <Box sx={{marginTop:5}}>
        <Typography variant={'h6'}>Following</Typography>
        <AvatarGroup max={7}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
        <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
        </Box>
        {/* <Box>
          <Typography>Recent images</Typography>
<ImageList
  sx={{ width: 500, height: 450 }}
  variant="quilted"
  cols={4}
  rowHeight={121}
>
  {itemData.map((item) => (
    <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
      <img
        {...srcset(item.img, 121, item.rows, item.cols)}
        alt={item.title}
        loading="lazy"
      />
    </ImageListItem>
  ))}
</ImageList>
        </Box> */}
        </Box>
        
      
      </Box>
  )
}

export default RightSideBar
