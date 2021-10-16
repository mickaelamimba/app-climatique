import React from 'react';
import Register from "../component /Register/Register";
import ManageColdRoomAndItsProbes from "../component /ManageColdRoomAndItsProbes/ManageColdRoomAndItsProbes";

const UserManagement = () => {
    return (
        <section>
            <h1>Gestion des utilisateurs</h1>
            <hr/>
            <div className="container justify-content-center justify-content-lg-between row row-cols-md-2">
                <Register/>
                <ManageColdRoomAndItsProbes/>
            </div>

        </section>
    );
};

export default UserManagement;