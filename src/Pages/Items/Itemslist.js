import { Card } from '@mui/material';
import React from 'react';

const Itemslist = (props) => {
    const { name, img, price } = props.item;
    return (
        <Card container xs={12} sm={6} m={6}>
            <h1>{name}</h1>
            <img width="100%" src={img} alt="" srcset="" />
            <h3>Price: {price}</h3>
        </Card>
    );
};

export default Itemslist;