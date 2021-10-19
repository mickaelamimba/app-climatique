import React, {useEffect, useState} from 'react';
import {Button, Stack, Table} from "react-bootstrap";
import axios from "axios";

const UserLists = ({onClick}) => {
    const [data,setData]=useState([])

    useEffect(()=>{
        axios.get(`/customer`).then((response)=> setData(response.data))
    },[])
    return (
        <Table>
            <thead>
                <tr>
                    <th>Identifiant</th>
                    <th>Non</th>
                    <th>Addresse</th>
                    <th>Ville</th>
                    <th>Numero</th>
                    <th>Role</th>
                    <th>...</th>
                </tr>
            </thead>
            <tbody>
            {data?.map(({user})=>(
                <tr key={user.userName}>
                    <td>{user.userName}</td>
                    <td>{user.name}</td>
                    <td>{user.address}</td>
                    <td>{user.city}</td>
                    <td>{user.phoneNumber}</td>
                    <td>{user.role}</td>
                    <td>
                        <Stack direction="horizontal" gap={2}>
                            <Button onClick={onClick} variant="primary" >Modifer</Button>
                            {user.role === 'Officine'?
                                <Button variant="primary" >Ajouter une sonde</Button>:
                                null
                            }
                        </Stack>
                    </td>
                </tr>
            ))

            }

            </tbody>
            
        </Table>
    );
};

export default UserLists;