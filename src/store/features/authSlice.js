import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import * as api from '../api' 

export const login=createAsyncThunk('auth/login',async({formData,navigate,toast},{rejectWithValue})=>{
    try{
        const responce=await api.logIn(formData)
        navigate("/")
        return responce.data
    }catch(err){
        return rejectWithValue(err.responce.data)
    }
} )

export const signup=createAsyncThunk('auth/signup',async({formData,navigate,toast},{rejectWithValue})=>{
    try{
        const responce=await api.signUp(formData)
        console.log(responce);
        if(responce.data.userRoll==="user"){
            navigate("/")
            return responce.data
        }else{
            navigate("/loginas")
            return null
        }
        return null
        
    }catch(err){
        return rejectWithValue(err.responce.data)
    }
} )

export const adminLogin=createAsyncThunk('auth/adminLogin',async({formData,navigate},{rejectWithValue})=>{
    try{
        const responce=await api.adminLogIn(formData)
        navigate("/adminhome")
        return responce.data
    }catch(err){
        return rejectWithValue(err.responce.data)
    }
} )


export const vendorLogin=createAsyncThunk('auth/vendorLogin',async({formData,navigate,toast},{rejectWithValue})=>{
    try{
        const responce=await api.vendorLogIn(formData)
        navigate("/")
        return responce.data
    }catch(err){
        return rejectWithValue(err.responce.data)
    }
} )

export const vendorSignup=createAsyncThunk('auth/vendorSignup',async({formData,navigate,toast},{rejectWithValue})=>{
    try{
        const responce=await api.vendorSignUp(formData)
        console.log(responce);
            navigate("/vendorhome")
            return responce.data

        
    }catch(err){
        return rejectWithValue(err.responce.data)
    }
} )


// <-------------------------------------------------------------------------------------------------------
const authSlice=createSlice({
    name:'auth',
    initialState:{
        user:null,
        error:"",
        loading:false
    },
    extraReducers:{

        [login.pending]:(state,action)=>{
            state.loading=true
        },
        [login.fulfilled]:(state,action)=>{
           
            state.loading=false
            localStorage.setItem('profile',JSON.stringify({...action.payload}))
            state.user=action.payload
        },
        [login.rejected]:(state,action)=>{
            state.loading=false
            state.error='Authentication failed'
        } ,
        [signup.pending]:(state,action)=>{
            state.loading=true
        },
        [signup.fulfilled]:(state,action)=>{
            state.loading=false
            localStorage.setItem('profile',JSON.stringify({...action.payload}))
            state.user=action.payload
           
        },
        [signup.rejected]:(state,action)=>{
            state.loading=false
            state.error='Registration failed/User already exist'
        },
        [adminLogin.pending]:(state,action)=>{
            state.loading=true
        },
        [adminLogin.fulfilled]:(state,action)=>{
            state.loading=false
            localStorage.setItem('adminProfile',JSON.stringify({...action.payload}))
            state.user=action.payload
           
        },
        [adminLogin.rejected]:(state,action)=>{
            state.loading=false
            state.error='Admin Log In Failed'
        } 
    }

}) 
;
console.log(authSlice.actions);
export default authSlice.reducer