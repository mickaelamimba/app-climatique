import React, {createContext, useContext, useEffect, useState} from "react";
import axios from "axios";



const AuthContext =createContext(undefined)
const AuthContextProvider=({children})=>{
    let getToken =sessionStorage.getItem('token')
    let token= JSON.parse(getToken)
    const [user, setUser]=useState([])
    useEffect(()=>{
        axios.get(`/customer?token=${token.token}`).then((response)=> setUser(response.data))
    },[])

    return(
        <AuthContext.Provider value={{
            token:token,
            userData : user
        }}
           >
            {children}
        </AuthContext.Provider>
    )
}

const useAuth=()=>{
    const context = useContext(AuthContext)
    if (context === undefined){
        throw new Error('AuthContext mus be used within a AuthContextProvider')
    }
    return context
}
export {useAuth,AuthContextProvider}