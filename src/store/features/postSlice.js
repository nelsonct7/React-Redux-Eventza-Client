import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import * as api from '../api' 

export const createPost=createAsyncThunk('post/createPost',async({formData},{rejectWithValue})=>{
    try{
        const uTocken=localStorage.getItem('userTocken')
        const vTocken=localStorage.getItem('vendorTocken')
        const tocken=uTocken?uTocken:vTocken
        // for (var key of formData.entries()) {
        //     console.log(key[0] + ', ' + key[1])
        //   }
        const responce=await api.createPost(formData)
        return 
    }catch(err){
        return rejectWithValue(err.responce.data)
    }
} )

export const updatePost=createAsyncThunk('post/updatePost',async({formData,postId},{rejectWithValue})=>{
    try{
        const uTocken=localStorage.getItem('userTocken')
        const vTocken=localStorage.getItem('vendorTocken')
        const tocken=uTocken?uTocken:vTocken
        // for (var key of formData.entries()) {
        //     console.log(key[0] + ', ' + key[1])
        //   }
        const responce=await api.editPost(formData,postId)
        return 
    }catch(err){
        return rejectWithValue(err.responce.data)
    }
} )

export const deletePost=createAsyncThunk('post/deletePost',async({postId},{rejectWithValue})=>{
    try{
        const uTocken=localStorage.getItem('userTocken')
        const vTocken=localStorage.getItem('vendorTocken')
        const tocken=uTocken?uTocken:vTocken
        // for (var key of formData.entries()) {
        //     console.log(key[0] + ', ' + key[1])
        //   }
        const responce=await api.deletePost(postId)
        return 
    }catch(err){
        return rejectWithValue(err.responce.data)
    }
} )

export const changeStatus=createAsyncThunk('post/changeStatus',async({postId,stat},{rejectWithValue})=>{
    try{
        const uTocken=localStorage.getItem('userTocken')
        const vTocken=localStorage.getItem('vendorTocken')
        const tocken=uTocken?uTocken:vTocken
        // for (var key of formData.entries()) {
        //     console.log(key[0] + ', ' + key[1])
        //   }
        const responce=await api.changeStatus(postId,stat)
        return 
    }catch(err){
        return rejectWithValue(err.responce.data)
    }
} )

const postSlice=createSlice({
    name:'post',
    initialState:{
        posts:"",
        error:"",
        loading:false,
    },
    extraReducers:{

        [createPost.pending]:(state,action)=>{
            state.loading=true
            state.error=''
        },
        [createPost.fulfilled]:(state,action)=>{
            state.loading=false
            state.posts=""
            state.posts="created"
        },
        [createPost.rejected]:(state,action)=>{
            state.loading=false
            state.error='Post Creation failed'
        },
        [updatePost.pending]:(state,action)=>{
            state.loading=true
            state.error=''
        },
        [updatePost.fulfilled]:(state,action)=>{
            state.loading=false
            state.posts=""
            state.posts="updated"
        },
        [updatePost.rejected]:(state,action)=>{
            state.loading=false
            state.error='Post Creation failed'
        },
        [deletePost.pending]:(state,action)=>{
            state.loading=true
            state.error=''
        },
        [deletePost.fulfilled]:(state,action)=>{
            state.loading=false
            state.posts=""
            state.posts="deleted"
        },
        [deletePost.rejected]:(state,action)=>{
            state.loading=false
            state.error='Post Creation failed'
        },
        [changeStatus.pending]:(state,action)=>{
            state.loading=true
            state.posts=""
            state.error=''
        },
        [changeStatus.fulfilled]:(state,action)=>{
            state.loading=false
            state.posts=""
            state.posts="statusChanged"
        },
        [changeStatus.rejected]:(state,action)=>{
            state.loading=false
            state.error='Post Creation failed'
        },
    }
})

export default postSlice.reducer