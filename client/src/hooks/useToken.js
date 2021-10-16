
import { useState } from 'react';


const useToken = ()=> {
const getToken =()=>{
 const tokenString = sessionStorage.getItem('token')
    const useToken = JSON.stringify(tokenString)
    return useToken.token
}
const [token, setToken]=useState(getToken())
    const saveToken = userToken =>{
        sessionStorage.setItem('token',JSON.stringify(userToken))
        console.log(userToken)
        setToken(userToken.token)
    }

    return{
        setToken:saveToken,
        token
    }
};


export default useToken;