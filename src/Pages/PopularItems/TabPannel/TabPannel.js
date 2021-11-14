import React, { useState } from 'react';

import { Card, Col } from 'react-bootstrap';
import { Button, Typography } from '@mui/material';
import ProductDetails from '../ProductDetails/ProductDetails';

import PlaceOrderItems from '../PlaceOrderItems/PlaceOrderItems';



const TabPannel = (props) => {
    const { name, img, price } = props.product;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [orderOpen, setOrderOpen] = React.useState(false);
    const handleOpenOrder = () => setOrderOpen(true);
    const handleCloseOrder = () => setOrderOpen(false);
    return (
        <>
            <Col>
                <Card>
                    <Card.Img variant="top" height="300" width='200' src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            <Typography>Price:{price}</Typography>
                        </Card.Text>
                        <Card.Text>
                            <Button onClick={handleOpen} variant='h6'>See Product Details</Button>
                        </Card.Text>


                        <Button onClick={handleOpenOrder} variant='h6'>Order Now</Button>
                    </Card.Body>
                </Card>
            </Col>
            <ProductDetails
                key={props.product.id}
                productInfo={props.product}
                handleClose={handleClose}
                open={open}
            ></ProductDetails>

            <PlaceOrderItems
                key={props.product.id}
                product={props.product}
                handleOpenOrder={orderOpen}
                handleCloseOrder={handleCloseOrder}
            ></PlaceOrderItems>




        </>

    );
};

export default TabPannel;