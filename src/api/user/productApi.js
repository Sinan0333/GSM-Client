import axios from 'axios'
// import { handleApiResponse, handleUserApiError } from '../../constants/constFunctions'
const baseURL = `${import.meta.env.VITE_BASE_URL}/product`

const productApi= axios.create({
    baseURL
})

// doctorApi.interceptors.request.use(

//     (config)=>{
        
//     const userToken = localStorage.getItem('userToken')

//     if(userToken){
//         config.headers['Authorization'] = `Bearer ${userToken}`;
//     }

//     return config

//     },

//     (error)=>{
//         return Promise.reject(error)
//     }
// )

// doctorApi.interceptors.response.use(handleApiResponse,handleUserApiError);


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

