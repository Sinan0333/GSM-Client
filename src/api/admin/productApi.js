import axios from 'axios'
// import { handleApiResponse, handleUserApiError } from '../../constants/constFunctions'
const baseURL = `${import.meta.env.VITE_BASE_URL}/admin/product`

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


export const addProductApi = async (data)=>{
    try {         
        const result =  await productApi.post("/add",data)          
        return result.data 
    } catch (error) {
        console.log(error);
    }
}

