import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import TextField from '@mui/material/TextField';
import { Button, Container, Grid, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hokks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const PlaceOrderItems = ({ handleOpenOrder, handleCloseOrder, product }) => {
    const { name, price } = product;
    const { user, isLoading } = useAuth();
    const initialOrder = { displayName: user.displayName, email: user.email }
    const [orderData, setOrderData] = useState(initialOrder);


    // const history = useHistory();
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newOrderData = { ...orderData };
        newOrderData[field] = value;
        console.log(newOrderData);
        setOrderData(newOrderData);
    }
    const handleOrderPlace = e => {
        // collect data
        const orders = {
            ...orderData,

        }
        // send to server

        e.preventDefault();

    }
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={handleOpenOrder}
            onClose={handleCloseOrder}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={handleOpenOrder}>
                <Box sx={style}>
                    <Typography variant="h6" sx={{ mt: 5 }} gutterBottom>
                        Your Orders
                    </Typography>
                    {!isLoading && <form onSubmit={handleOrderPlace}>
                        <TextField
                            disabled
                            sx={{ width: '100%', m: 1 }}
                            id="standard-basic"
                            label={user.displayName}
                            name="displayName"
                            onBlur={handleOnBlur}
                            type='username'
                            variant="standard" />
                        <TextField
                            disabled
                            sx={{ width: '100%', m: 1 }} id="standard-basic"
                            label={user.email}
                            name='email'
                            type="email"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '100%', m: 1 }} id="standard-basic"
                            label="Your Phone Number"
                            name='number'
                            onBlur={handleOnBlur}
                            type='number'
                            variant="standard" />
                        <TextField
                            disabled
                            sx={{ width: '100%', m: 1 }} id="standard-basic"
                            label={name}
                            name='productName'
                            onBlur={handleOnBlur}
                            type='text'
                            variant="standard" />
                        <TextField
                            disabled
                            sx={{ width: '100%', m: 1 }} id="standard-basic"
                            label={price}
                            name='price'
                            onBlur={handleOnBlur}
                            type='text'
                            variant="standard" />


                        <NavLink to='/placeOrder' style={{ textDecoration: 'none' }}>
                            <Button sx={{ width: '80%', m: 3 }} variant='contained' type="submit">Place Order</Button>
                        </NavLink>
                    </form>}
                    {isLoading && < CircularProgress />}
                </Box>
            </Fade>
        </Modal>
    );
};

export default PlaceOrderItems;