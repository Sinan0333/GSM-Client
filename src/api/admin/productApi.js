import axios from 'axios'
// import { handleApiResponse, handleUserApiError } from '../../constants/constFunctions'
const baseURL = `${import.meta.env.VITE_BASE_URL}/admin/product`

const productApi= axios.create({
    baseURL
})

productApi.interceptors.request.use(

    (config)=>{
        
    const token = localStorage.getItem('token')

    if(token){
        config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config

    },

    (error)=>{
        return Promise.reject(error)
    }
)


productApi.interceptors.response.use(response => {
    return response;
 }, error => {
    console.log("unauthorized")
   if (error.response.status === 401) {
    localStorage.removeItem("token")
    window.location.href = '/auth/login';
   }
   return error;
 });


export const addProductApi = async (data)=>{
    try {         
        const result =  await productApi.post("/add",data)          
        return result.data 
    } catch (error) {
        console.log(error);
    }
}

export const editProductApi = async (id,data)=>{
    try {         
        const result =  await productApi.put(`/edit/${id}`,data)          
        return result.data 
    } catch (error) {
        console.log(error);
    }
}

export const blockProductApi = async (id,is_blocked)=>{
    try {         
        const result =  await productApi.patch(`/block/${id}`,{is_blocked})          
        return result.data 
    } catch (error) {
        console.log(error);
    }
}

export const fetchAllProducts = async ()=>{
    try {         
        const result =  await productApi.get('/')          
        return result.data 
    } catch (error) {
        console.log(error);
    }
}

export const fetchProduct = async (id)=>{
    try {         
        const result =  await productApi.get(`/${id}`)          
        return result.data 
    } catch (error) {
        console.log(error);
    }
}

