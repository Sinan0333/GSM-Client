import axios from 'axios'
const baseURL = `${import.meta.env.VITE_BASE_URL}/admin/auth`

const authApi= axios.create({
    baseURL
})

export const loginApi = async (data)=>{
    try {         
        const result =  await authApi.post("/login",data)          
        return result.data 
    } catch (error) {
        console.log(error);
    }
}