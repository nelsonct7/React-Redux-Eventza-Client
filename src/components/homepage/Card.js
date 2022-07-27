import React,{useEffect, useState} from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';


import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button, Modal, TextField } from '@mui/material';
import {useSelector,useDispatch} from 'react-redux'
import { Box, height } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { updatePost,deletePost } from '../../store/features/postSlice';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [editPost,setEditPost]=useState(props.editdata.post) 
  const [image,setImage]=useState("")
  const navigate=useNavigate()
  const dispatch=useDispatch()

  const handleImage=(e)=>{
    setImage(e.target.files[0])
  }

const handleSubmit=async()=>{
  if(editPost===""){
      alert('Add Some Post')
  }else{     
        const postId=props.editdata._id          
         const formData=new FormData()
         formData.append("creatorId",props.editdata._id)
         formData.append("post",editPost)
          formData.append("postImage",image)
         handleClose()
        dispatch(updatePost({formData,postId}))          
  }
}

const handleDelete=()=>{
  const postId=props.editdata._id
  handleClose()
  dispatch(deletePost({postId}))
  
}

  return (
    <div>
      <Button onClick={handleOpen}>Edit Post</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {props.editdata.postCreator}
          </Typography>
          <TextField 
          id="outlined-basic" 
          label="Edit Post" 
          variant="outlined" 
          value={editPost} 
          sx={{m:2}}
          onChange={(e)=>{setEditPost(e.target.value)}}
          fullWidth
          />
          <Box sx={{display:'flex'}} gap={2}>
          {(props.editdata.postImage)? 
          <><img alt="Remy Sharp" src={"http://localhost:5000/post-images/"+props.editdata.postImage} 
          style={{height:100,width:100}}/>
          <Button variant="contained" component="label" sx={{maxHeight:40}}>
          Upload Image
          <input
            type="file"
            filename='postImage'
            onChange={handleImage}
            hidden
          /></Button>
          </>
          :
          ""}
          </Box>
          <Box sx={{display:'flex',margin:2}} gap={2}>
          <Button variant="contained" component="label" sx={{maxHeight:40}} onClick={handleSubmit}>Update</Button>
          <Button variant="contained" component="label" sx={{maxHeight:40}} onClick={handleDelete}>Delete</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}



export default function Post(props) {
  const [expanded, setExpanded] = React.useState(true);
  const {loading,userRedux,companyRedux,adminRedux,error} =useSelector((state)=>({...state.auth}))

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{mt:3,bgcolor:'#a663cc'}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src="https://i.pinimg.com/originals/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg">
            R
          </Avatar>
        }
 
        title={props.data.postCreator}
        subheader={props.data.postDate}
      />
      {(userRedux && (userRedux._id===props.data.creatorId))?(<BasicModal editdata={props.data}/>):""}
      
      {props.data.postImage?
      <CardMedia
      component="img"
      height="10%"
      image={"http://localhost:5000/post-images/"+props.data.postImage}
      alt="Paella dish"
      />
      : ""} 
      
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.data.post}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
