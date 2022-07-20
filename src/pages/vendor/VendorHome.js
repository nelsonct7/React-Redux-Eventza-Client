import React,{useEffect} from 'react'
import Navbar from '../../components/Navbar'
import VendorHomeLayout from '../../components/vendors/VendorHomeLayout'
import {useNavigate} from 'react-router-dom'

function VendorHome() {
  const navigate=useNavigate()
  useEffect(()=>{
    const isAdmin=localStorage.getItem('adminProfile')
    const isUser=localStorage.getItem('profile')
    const isCompany=localStorage.getItem('company')
    if(isUser){
      navigate('/')
    }else if(isAdmin){
      navigate('/adminhome')
    }else if(isCompany){
      
    }else{
      navigate('/loginas')
    }
  })
  return (
    <div>
      <Navbar navColor='#F77F00'/>
      <VendorHomeLayout/>
    </div>
  )
}

export default VendorHome
