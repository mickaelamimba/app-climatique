import React from 'react';
import {Nav} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const MenuItem = () => {
    return (
        <>
            <Nav.Item>
                <NavLink className="nav-link" exact activeClassName="active" to='/'>Home</NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink className="nav-link" exact activeClassName="active" to='/import-sonde-data'>sonde</NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink className="nav-link" exact activeClassName="active" to='/management-user'>Gestion utilisateur</NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink className="nav-link" exact activeClassName="active" to='/mon-compte'>Mon compte</NavLink>
            </Nav.Item>

        </>
    );
};

export default MenuItem;