import {configureStore} from '@reduxjs/toolkit';
import AuthReducer from './features/authSlice'
import ClickReducer from './features/clickSlice'


export default configureStore({
    reducer:{
        auth:AuthReducer,
        click:ClickReducer
    }
})