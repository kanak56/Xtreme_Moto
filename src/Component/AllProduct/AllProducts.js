
import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://obscure-refuge-13960.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));

    }, []);
    const handleDelete = id => {

        const url = `https://obscure-refuge-13960.herokuapp.com/products/${id}`;
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('Deleted Successfully');
                    const remainingUsers = products.filter(order => order._id !== id);
                    setProducts(remainingUsers);
                }
            })


    }
    return (
        <div style={{ marginTop: '5%' }}>
            <h1>All Product List</h1>
            <h3>Total: {products.length}</h3>
            <hr />
            <Row style={{ marginTop: "10px", marginBottom: '10px' }} >
                {
                    products.map(product => <><ul style={{ listStyle: 'none' }}
                    >
                        <li
                            key={product._id}
                        >{product.name}</li><Button onClick={() => handleDelete(product._id)} variant='contained'>Delete</Button>
                    </ul></>)
                }
            </Row>
        </div>
    );
};

export default AllProducts;