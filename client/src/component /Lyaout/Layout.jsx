import React from 'react';
import {NavLink}from 'react-router-dom';
const Layout = ({children}) => {
    document.title ='Climatique'
    return (
        <>


            <header>

            </header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <section className="collapse navbar-collapse" id="navbarNav">
                        <ul className='navbar-nav' role="menu">
                            <li role='menuItem' className="nav-item">
                                <NavLink className="nav-link" exact activeClassName="active" to='/'>Home</NavLink>
                            </li>

                            <li role='menuItem' className="nav-item">
                                <NavLink className="nav-link" exact activeClassName="active" to='/import-sonde-data'>sonde</NavLink>

                            </li>
                            <li role='menuItem' className="nav-item">
                                <NavLink className="nav-link" exact activeClassName="active" to='/management-user'>Gestion utilisateur</NavLink>
                            </li>
                            <li role='menuItem' className="nav-item">
                                <NavLink className="nav-link" exact activeClassName="active" to='/mon-compte'>Mon compte</NavLink>
                            </li>
                        </ul>

                    </section>
                </div>



            </nav>
            <main>
                <div className='container-fluid'>
                    {children}
                </div>

            </main>
            <footer>

            </footer>

        </>
    );
};

export default Layout;