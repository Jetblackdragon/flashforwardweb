import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

// If you are going to add a new page:
// - Make a new folder in pages with the name of the page
// - Make a jsx and css file for it
// - Write the code and make sure to export the function
// - Decide what the url extension will be ex: /newPage
// - Make a CustomLink to it in below where the other ones are
// - Add in the Main.jsx file a new route using the url extension to go to your new page
// - Done.

const Navbar = () => {
    // When a link is pressed, it makes the url change to have /(link name) at the end
    // this makes the code in the app.jsx respond with changing the container to have what ever route
    // the website is at.
    return (
        <nav className="navbar">
            <Link to="/" className="title">Flash Forward</Link>
            <ul>
                <CustomLink to="/donations">Donations</CustomLink>
                <CustomLink to="/about">About</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ href, children, ...props}) {
    const path = window.location.pathname;
    
    return (
        <li className={path === href ? "active": ""}>
            <Link to={href} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default Navbar;