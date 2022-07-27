import axios from 'axios'


const API = axios.create({baseURL:'http://localhost:5000'},{headers:{"Content-Type": "multipart/form-data"}});

export const logIn=(formData)=>API.post('/user/login',{...formData})
export const signUp=(formData)=>API.post('/user/signup',{...formData})
export const userTockenValid=(userTocken)=>API.post('user/tockenValidator',{userTocken})

export const adminLogIn=(formData)=>API.post('/admin/login',{...formData})
export const adminTockenValid=(adminTocken)=>API.post('/admin/tockenvalidator',{adminTocken})

export const vendorLogIn=(formData)=>API.post('/vendor/login',{...formData})
export const vendorSignUp=(formData)=>API.post('/vendor/signup',{...formData})
export const vendorTockenValid=(vendorTocken)=>API.post('/vendor/tockenvalidator',{vendorTocken})

export const viewUserListAdmin=()=>API.get('/admin/userlist')
export const adminDeleteUser=(userId)=>API.delete('/admin/deleteuser/'+userId)
export const changeStatusUser=(userId,status)=>API.patch('/admin/changestatus/'+userId+'/'+status)

export const viewManagerListAdmin=()=>API.get('/admin/managerlist')
export const adminDeleteManager=(userId)=>API.delete('/admin/deleteuser/'+userId)
export const changeStatusManager=(userId,status)=>API.patch('/admin/changestatus/'+userId+'/'+status)

export const viewCompanyListAdmin=()=>API.get('/admin/vendorlist')
export const adminDeleteCompany=(companyId)=>API.delete('/admin/deletevendor/'+companyId)
export const changeStatusCompany=(companyId,status)=>API.patch('/admin/changevendorstatus/'+companyId+'/'+status)

export const createPost=(formData)=>API.post('/post/createpost/',formData)
export const getPost=()=>API.get('/post/getpost')
export const getAdminPost=()=>API.get('/post/getadminpost')
export const editPost=(formData,postId)=>API.patch('/post/editpost/'+postId,formData)
export const deletePost=(postId)=>API.delete('/post/deletepost/'+postId)
export const changeStatus=(postId,stat)=>API.patch('/post/changeStatus/'+postId+"/"+stat)

//,{headers:{"Content-Type": "multipart/form-data"}}
