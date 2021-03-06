import React, {useEffect, useState} from 'react';

import axios from "axios";
import ModifyAccount from "../Register/ModifyAccount";
import {useAuth} from "../../Context/Auth";

const Account = () => {
   let getToken =sessionStorage.getItem('token')
   let token= JSON.parse(getToken)
   const {user}= useAuth()
        console.log(user)
    const [openModal,setOpenModal]=useState(false)
    const [data,setData]=useState([])


 const handleClick =()=>{
      setOpenModal(!openModal)

 }

  useEffect(()=>{
      axios.get(`/customer?token=${token.token}`).then((response)=> setData(response.data))
    },[])

    return (
        <section>
            <h1>Mon compte</h1>
                    <article className='card mb-3' >
                        <div className='card-header'>
                            <p>Non d'utilisateur : {data[0]?.userName}</p>
                        </div>
                        <div className='card-body'>
                            <p  className='card-title'> Non : {data[0]?.name} </p>
                            <address> Adresse : {data[0]?.address }
                                 <span> {data[0]?.city}</span>
                            </address>
                            <p> Numero de télephone : {data[0]?.phoneNumber}</p>
                            <div>
                                Mot de passe
                                <input className='form-control' type='text' placeholder='******' disabled/>
                            </div>

                        </div>


                        <div className='card-footer '>
                            <p>Role : {data[0]?.role}</p>
                        </div>



                    </article>

                <button className='btn btn-primary' onClick={handleClick}>Modifer</button>

            <ModifyAccount
                name={data[0]?.name}
                address={data[0]?.address}
                city={data[0]?.city}
                phoneNumber={data[0]?.phoneNumber}
                userName={data[0]?.userName}
                show={openModal}
                onHide={handleClick}
            />



            
        </section>
    );
};

export default Account;