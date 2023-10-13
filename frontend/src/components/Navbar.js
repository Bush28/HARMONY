import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        //Clear user information from local storage
        localStorage.removeItem('currentUser');

        //Redirect to the homepage (AccountForm)
        navigate('/');
    };

    return (
        <nav>
            <ul>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/youraccount">Your Account</Link></li>
                <li><Link to="/ask">Financial Advisor</Link></li>
            </ul>
            <button onClick={handleLogout}>Logout</button>
        </nav>
    );
};

export default Navbar;
