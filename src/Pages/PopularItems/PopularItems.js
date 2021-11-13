import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import TabPannel from './TabPannel/TabPannel';
import { Row } from 'react-bootstrap';


const PopularItems = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setProducts(data));

    }, [])

    return (
        <div>
            <Row style={{ marginTop: "10px", marginBottom: '10px' }} xs={1} md={3} className="g-2">
                {
                    products.map(product => <TabPannel
                        key={product.id}
                        product={product}
                    ></TabPannel>)
                }
            </Row>


            <Typography>
                <NavLink to='/services' style={{ textDecoration: 'none' }}  ><Button sx={{ width: 1 }} style={{ backgroundColor: 'green', color: 'white' }}>Explore More items</Button></NavLink>
            </Typography>
        </div >


    );
};

export default PopularItems;