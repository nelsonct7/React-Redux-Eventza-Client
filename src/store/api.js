import axios from 'axios'


const API = axios.create({baseURL:'http://localhost:5000'});

export const logIn=(formData)=>API.post('/user/login',{...formData})
export const signUp=(formData)=>API.post('/user/signup',{...formData})
export const adminLogIn=(formData)=>API.post('/admin/login',{...formData})
export const vendorLogIn=(formData)=>API.post('/vendor/login',{...formData})
export const vendorSignUp=(formData)=>API.post('/vendor/signup',{...formData})

export const viewUserListAdmin=()=>API.get('/admin/userlist')
export const adminDeleteUser=(userId)=>API.delete('/admin/deleteuser/'+userId)
export const changeStatusUser=(userId,status)=>API.patch('/admin/changestatus/'+userId+'/'+status)

export const viewManagerListAdmin=()=>API.get('/admin/managerlist')
export const adminDeleteManager=(userId)=>API.delete('/admin/deleteuser/'+userId)
export const changeStatusManager=(userId,status)=>API.patch('/admin/changestatus/'+userId+'/'+status)

export const viewCompanyListAdmin=()=>API.get('/admin/vendorlist')
export const adminDeleteCompany=(companyId)=>API.delete('/admin/deletevendor/'+companyId)
export const changeStatusCompany=(companyId,status)=>API.patch('/admin/changevendorstatus/'+companyId+'/'+status)