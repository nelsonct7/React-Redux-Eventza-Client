import { Box } from '@mui/material'
import React,{useEffect,useState} from 'react'
import AddPost from '../homepage/Post'
import VendorCard from './VendorCard'
import {useSelector,useDispatch} from 'react-redux'
import * as api from '../../store/api'

function VendorFeed() {
  const {loading,userRedux,companyRedux,adminRedux,error} =useSelector((state)=>({...state.auth}))
  const {posts}=useSelector((state)=>({...state.post}))

  const [feeds,setFeeds]=useState([])
  const getData=async()=>{
    const data=await api.getPost()
    setFeeds(data.data.feeds)
  }
  useEffect(()=>{
    getData()
  },[posts])
  return (
    <Box flex={4} p={2}>
        {companyRedux && <AddPost/>}
        {feeds.map((fee,index)=> <VendorCard key={index} data={fee}/>)}
    </Box>
  )
}

export default VendorFeed
