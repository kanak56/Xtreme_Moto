import React from 'react';
import Navbar from '../../Component/Navbar/Navbar/Navbar';
import Footer from '../Footer/Footer';

const NotFound = () => {
    return (
        <div>
            <Navbar />
            <h1>404</h1>
            <p>page not found</p>
            <Footer />
        </div>
    );
};

export default NotFound;