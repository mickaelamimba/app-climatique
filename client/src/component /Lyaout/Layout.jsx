import React from 'react';
import {NavLink}from 'react-router-dom';
import Menu from "./Menu/Menu";
const Layout = ({children}) => {
    document.title ='Climatique'
    return (
        <>


            <header>

            </header>
            <Menu/>
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