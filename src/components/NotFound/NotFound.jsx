/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <div className="container body">
                <h1 className="error-code">404</h1>
                <p className="error-message">Page Not Found</p>
                <p>Oops! The page you are looking for does not exist.</p>
                <p>Please check the URL or go back to the <Link to="/">Homepage</Link>.</p>
            </div>
        </div>
    );
};

export default NotFound;