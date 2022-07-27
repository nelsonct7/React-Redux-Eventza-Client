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

export const userLogout=createAsyncThunk('auth/userLogout',async(navigate)=>{
    try{
        navigate("/")
        return 
    }catch(err){
        return null
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

export const adminLogout=createAsyncThunk('auth/adminLogout',async(navigate)=>{
    try{
        navigate('/adminlogin')
    }catch(err){
        return null
    }
})


export const vendorLogin=createAsyncThunk('auth/vendorLogin',async({formData,navigate},{rejectWithValue})=>{
    try{
        console.log();
        const responce=await api.vendorLogIn(formData)
        navigate("/vendorhome")
        return responce.data
    }catch(err){
        return rejectWithValue(err.responce.data)
    }
} )

export const vendorSignup=createAsyncThunk('auth/vendorSignup',async({formData,navigate},{rejectWithValue})=>{
    try{
        const responce=await api.vendorSignUp(formData)
            navigate("/loginas")
            return responce.data
    }catch(err){
        return rejectWithValue(err.responce.data)
    }
} )

export const vendorLogout=createAsyncThunk('auth/vendorLogout',async(navigate)=>{
    try{
        navigate('/vendorlogin')
        return null
    }catch(err){
        return null
    }
})


export const adminTockenValidator=createAsyncThunk('auth/adminTockenValidator',async({adminTocken})=>{
    try{ 
        const responce=await api.adminTockenValid(adminTocken)
        return responce
    }catch(err){
        return
    }
})

export const userTockenValidator=createAsyncThunk('auth/userTockenValidator',async({userTocken})=>{
    try{ 
        const responce=await api.userTockenValid(userTocken)
        return responce
    }catch(err){
        return
    }
})


export const vendorTockenValidator=createAsyncThunk('auth/vendorTockenValidator',async({vendorTocken})=>{
    try{ 
        const responce=await api.vendorTockenValid(vendorTocken)
        return responce
    }catch(err){
        return
    }
})

// <-------------------------------------------------------------------------------------------------------
const authSlice=createSlice({
    name:'auth',
    initialState:{
        userRedux:null,
        adminRedux:null,
        companyRedux:null,
        error:"",
        loading:false
    },
    extraReducers:{

        [login.pending]:(state,action)=>{
            state.loading=true
            state.error=''
        },
        [login.fulfilled]:(state,action)=>{
           
            state.loading=false
            localStorage.setItem('userTocken',JSON.stringify(action.payload.tocken))
            state.userRedux=action.payload
        },
        [login.rejected]:(state,action)=>{
            state.loading=false
            state.error='Authentication failed'
        },
 
        [signup.pending]:(state,action)=>{
            state.loading=true
            state.error=''
        },
        [signup.fulfilled]:(state,action)=>{
            state.loading=false
            localStorage.setItem('userTocken',JSON.stringify(action.payload.tocken))
            state.userRedux=action.payload
           
        },
        [signup.rejected]:(state,action)=>{
            state.loading=false
            state.error='Registration failed/User already exist'
        },
        [userLogout.pending]:(state,action)=>{
            state.loading=true
            state.error=""
        },
        [userLogout.fulfilled]:(state,action)=>{
            state.loading=false
            localStorage.removeItem('userTocken')
            state.userRedux=""
           
        },
        [userLogout.rejected]:(state,action)=>{
            state.loading=false
            state.error=''
        },

        
        [userTockenValidator.pending]:(state,action)=>{
            state.loading=true
            state.error=""
        },
        [userTockenValidator.fulfilled]:(state,action)=>{
            state.loading=false
            state.userRedux=action.payload.data
            
        },
        [userTockenValidator.rejected]:(state,action)=>{
            state.loading=false
            state.error=''
            localStorage.removeItem('userTocken')
        },

        [adminLogin.pending]:(state,action)=>{
            state.loading=true
            state.error=""
        },
        [adminLogin.fulfilled]:(state,action)=>{
            state.loading=false
            localStorage.setItem('adminTocken',JSON.stringify(action.payload.adminTocken))
            state.adminRedux=action.payload
           
        },
        [adminLogin.rejected]:(state,action)=>{
            state.loading=false
            state.error='Admin Log In Failed'
        },
        [adminLogout.pending]:(state,action)=>{
            state.loading=true
            state.error=""
        }, 

        [adminLogout.fulfilled]:(state,action)=>{
            state.loading=false
            localStorage.removeItem('adminTocken')
            state.adminRedux=""
           
        },
        [adminLogout.rejected]:(state,action)=>{
            state.loading=false
            state.error=''
        },

        [adminTockenValidator.pending]:(state,action)=>{
            state.loading=true
            state.error=""
        },
        [adminTockenValidator.fulfilled]:(state,action)=>{
            state.loading=false
            state.adminRedux=action.payload
            console.log(JSON.stringify(action.payload.data));
            
        },
        [adminTockenValidator.rejected]:(state,action)=>{
            state.loading=false
            state.error=''
            localStorage.removeItem('adminTocken')
        },

        [vendorLogin.pending]:(state,action)=>{
            state.loading=true
            state.error=''
        },
        [vendorLogin.fulfilled]:(state,action)=>{
            state.loading=false
            localStorage.setItem('vendorTocken',JSON.stringify(action.payload.tocken))
            state.companyRedux=action.payload
        },
        [vendorLogin.rejected]:(state,action)=>{
            state.loading=false
            state.error='Authentication failed'
        } ,

        [vendorSignup.pending]:(state,action)=>{
            state.loading=true
            state.error=''
        },
        [vendorSignup.fulfilled]:(state,action)=>{
            state.loading=false
           
        },
        [vendorSignup.rejected]:(state,action)=>{
            state.loading=false
            state.error='Registration failed/User already exist'
        },
        
        [vendorLogout.pending]:(state,action)=>{
            state.loading=true
            state.error=""
        }, 

        [vendorLogout.fulfilled]:(state,action)=>{
            state.loading=false
            localStorage.removeItem('vendorTocken')
            state.companyRedux=""
           
        },
        [vendorLogout.rejected]:(state,action)=>{
            state.loading=false
            state.error=''
        },

        [vendorTockenValidator.pending]:(state,action)=>{
            state.loading=true
            state.error=""
        },
        [vendorTockenValidator.fulfilled]:(state,action)=>{
            state.loading=false
            state.companyRedux=action.payload.data
            console.log(JSON.stringify(action.payload.data));
            
        },
        [vendorTockenValidator.rejected]:(state,action)=>{
            state.loading=false
            state.error=''
            localStorage.removeItem('vendorTocken')
        },
    }

}) 
;
export default authSlice.reducer