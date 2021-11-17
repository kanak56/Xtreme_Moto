import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import CheckOutForm from './CheckOutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_51Jw7CDJmNCJ6D2veXWyNgSIX0sXjYMywgKec2baqzdbft1rfvxDrbZdwI9z3uhdlAk905umRYVGlvsNffiDWd16I00hSeZErfb')

const PlaceOrder = () => {
    const { id } = useParams();
    const [order, setOrder] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/orders/${id}`)
            .then(res => res.json())
            .then(data => setOrder(data));
    }, [id])
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                mt: 5,
                ml: 25,
                width: 600,
                height: 400,

            }}
        >

            <Paper sx={{
                width: 600,
                height: 400,
            }} elevation={24}>
                <div style={{ marginTop: '10%', padding: '30px' }}>
                    <Paper elevation={3}>
                        <h2 style={{ padding: '2%' }}>Proceed To pay</h2>
                    </Paper>

                    <h6>Your Name: {order.name}</h6>
                    <h6>Email: {order.email}</h6>
                    <h6>Product: {order.productName}</h6>
                    <h6>Pay: {order.price}</h6>

                </div>
                {order.price && <Elements stripe={stripePromise}>
                    <CheckOutForm
                        order={order}
                    />
                </Elements>}
            </Paper>
        </Box>
    );
};

export default PlaceOrder;

/*
1. install stripe and stripe-react
2. set publishable key
3. Elements
4. Checkout Form
-------
 5. create payment method
 6. server create payment intent api
 7. load client secret
 8. confirmed payment
 9.handle user error
*/