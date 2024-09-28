import { Navigate, Outlet } from "react-router-dom"

export function AdminIsLoggedIn() {

    const token = localStorage.getItem('token')

    return (
      token ? <Outlet/>: <Navigate to='/auth/login'/> 
    )
}


export function AdminIsLoggedOut({children}) {

    const token = localStorage.getItem('token')

    return (
        token ? <Navigate to='/admin'/> : children
    )
}