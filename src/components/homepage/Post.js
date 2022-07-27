import React,{useState,useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Button, Card, CardActions, CardContent, TextField, Typography } from '@mui/material';
import {useSelector,useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { createPost } from '../../store/features/postSlice';
import * as api from '../../store/api'
import axios from 'axios'

function AddPost() {
    const {loading,userRedux,companyRedux,adminRedux,error} =useSelector((state)=>({...state.auth}))
    const [image,setImage]=useState("")
    const [post,setPost]=useState('')
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const handlePostChange=(e)=>{
        setPost(e.target.value)
    }

    const handleSubmit=async()=>{
        if(post===""){
            alert('Add Some Post')
        }else{               
               const formData=new FormData()
               formData.append("postCreator",userRedux?userRedux.userName:companyRedux.companyName)
               formData.append("creatorId",userRedux?userRedux._id:companyRedux._id)
               formData.append("creatorType",userRedux?"user":"company")
               formData.append("post",post)
               formData.append("postImage",image)
               console.log(post);
               console.log(image);
              
            dispatch(createPost({formData,navigate}))          
        }
    }
    const handleImage=(e)=>{
        setImage(e.target.files[0])
    }


  return (
    <Card sx={{  }}>
      
      <CardContent>
        
        <Typography gutterBottom variant="h5" component="div">
          Add Post
        </Typography>
        <TextField
          id="outlined-multiline-flexible"
          label="Say Something....!"
          multiline
          maxRows={6}
          sx={{mt:2}}
          fullWidth
          name='post'
          value={post}
          onChange={handlePostChange}
        />
        
      </CardContent>
      <CardActions sx={{display:'flex',justifyContent:'end',gap:2}}>
          <Button variant="contained" component="label">
          Upload Image
          <input
            type="file"
            filename='postImage'
            onChange={handleImage}
            hidden
          /></Button>
        <Button variant="contained" onClick={handleSubmit}>Post</Button>
      </CardActions>
    </Card>
 
    
  )
}

export default AddPost

