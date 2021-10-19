import React, {useState} from 'react';
import Register from "../component /Register/Register";
import ManageColdRoomAndItsProbes from "../component /ManageColdRoomAndItsProbes/ManageColdRoomAndItsProbes";
import UserLists from "../component /Account/UserLists";
import {Button} from "react-bootstrap";
import ModifyAccount from "../component /Register/ModifyAccount";

const UserManagement = () => {
    const [openModal,setOpenModal]=useState(false)
    const handleClick =()=>{
        setOpenModal(!openModal)
    }
    const [updateModal,setUpdateModal]=useState(false)
    const handleUpdateClick =()=>{
        setUpdateModal(!updateModal)
    }
    return (
        <section>
            <h1>Gestion des utilisateurs</h1>
            <hr/>
            <UserLists onClick={handleUpdateClick}/>
            <Button onClick={handleClick}>Ajouter un utilisateur</Button>
            <Register
                show={openModal}
                onHide={handleClick}
            />
           <ModifyAccount
               show={updateModal}
               onHide={handleUpdateClick}
           />

        </section>
    );
};

export default UserManagement;