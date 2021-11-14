import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import TabPannel from './TabPannel/TabPannel';
import { Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Navbar from '../../Component/Navbar/Navbar/Navbar';


const PopularItems = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://obscure-refuge-13960.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));

    }, [])

    return (
        <div>
            <Navbar />
            <Row style={{ marginTop: "10px", marginBottom: '10px' }} xs={1} md={3} className="g-2">
                {
                    products.map(product => <TabPannel
                        key={product.id}
                        product={product}
                    ></TabPannel>)
                }
            </Row>
            <Footer />
        </div >


    );
};

export default PopularItems;