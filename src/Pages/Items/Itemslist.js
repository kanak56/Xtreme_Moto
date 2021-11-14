import { Button } from '@mui/material';
import React from 'react';
import PlaceOrderItems from '../PopularItems/PlaceOrderItems/PlaceOrderItems';
import ProductDetails from '../PopularItems/ProductDetails/ProductDetails';

const Itemslist = (props) => {
    const { name, img, price } = props.item;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [orderOpen, setOrderOpen] = React.useState(false);
    const handleOpenOrder = () => setOrderOpen(true);
    const handleCloseOrder = () => setOrderOpen(false);
    return (

        <div className="col">
            <div className="card">
                <img src={img} style={{ height: '300px', maxWidth: '100%' }} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{price}</p>
                </div>
                <Button onClick={handleOpen} variant='h6'>See Product Details</Button>
                <Button onClick={handleOpenOrder} variant='h6'>Order Now</Button>
            </div>
            <ProductDetails
                key={props.item.id}
                productInfo={props.item}
                handleClose={handleClose}
                open={open}
            ></ProductDetails>
            <PlaceOrderItems
                key={props.item.id}
                product={props.item}
                handleOpenOrder={orderOpen}
                handleCloseOrder={handleCloseOrder}
            ></PlaceOrderItems>
        </div>

    );
};

export default Itemslist;