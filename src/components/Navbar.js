import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-black d-flex justify-content-around">
                <Link to="/" className='link_nav px-2 text-decoration-none '> Home </Link>
                <Link  to="/Posiciones" className="link_nav px-2 text-decoration-none"> Table </Link>
                <Link  to="/Faqs" className="link_nav px-2 text-decoration-none"> Info</Link>
            </nav>
        </>
    )
}
