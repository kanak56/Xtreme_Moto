import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddItems = () => {
    const [productData, setProductData] = useState();
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newProductData = { ...productData };
        newProductData[field] = value;
        console.log(newProductData);
        setProductData(newProductData);
    }
    const handleAddProduct = e => {
        const product = {
            ...productData,
            // details: {
            //     engine: productData.Engine,
            //     catagory: productData.catagory
            // }
        }
        console.log(product);
        // data to server
        fetch("https://obscure-refuge-13960.herokuapp.com/products", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Product Submited Successfully')
                    setProductData('');
                }
                else {
                    alert("failed to order")

                }
            })

        e.preventDefault();
    }
    return (
        <div style={{ marginTop: '5%' }}>
            <h1>Please add a Product</h1>
            <form onSubmit={handleAddProduct}>
                <TextField
                    sx={{ width: '50%', m: 1 }} id="standard-basic"
                    label='Bike Name'
                    name='name'
                    onBlur={handleOnBlur}
                    type='text'
                    variant="standard" />
                <TextField
                    sx={{ width: '50%', m: 1 }} id="standard-basic"
                    label='Price'
                    name='price'
                    onBlur={handleOnBlur}
                    type='text'
                    variant="standard" />
                <TextField
                    sx={{ width: '50%', m: 1 }} id="standard-basic"
                    label='Image Url'
                    name='img'
                    onBlur={handleOnBlur}
                    type='text'
                    variant="standard" />
                <TextField
                    sx={{ width: '50%', m: 1 }} id="standard-basic"
                    label='Engine CC'
                    name='engine'
                    onBlur={handleOnBlur}
                    type='text'
                    variant="standard" />
                <TextField
                    sx={{ width: '50%', m: 1 }} id="standard-basic"
                    label='Bike Catagory'
                    name='catagory'
                    onBlur={handleOnBlur}
                    type='text'
                    variant="standard" />
                <TextField
                    sx={{ width: '50%', m: 1 }} id="standard-basic"
                    label='Gears'
                    name='Gears'
                    onBlur={handleOnBlur}
                    type='text'
                    variant="standard" />
                <TextField
                    sx={{ width: '50%', m: 1 }} id="standard-basic"
                    label='Compresion Ratio'
                    name='cmRatio'
                    onBlur={handleOnBlur}
                    type='text'
                    variant="standard" />
                <TextField
                    sx={{ width: '50%', m: 1 }} id="standard-basic"
                    label='Cooling System'
                    name='ec'
                    onBlur={handleOnBlur}
                    type='text'
                    variant="standard" />
                <TextField
                    sx={{ width: '50%', m: 1 }} id="standard-basic"
                    label='Max Power'
                    name='mp'
                    onBlur={handleOnBlur}
                    type='text'
                    variant="standard" />
                <TextField
                    sx={{ width: '50%', m: 1 }} id="standard-basic"
                    label='Max Torque'
                    name='mt'
                    onBlur={handleOnBlur}
                    type='text'
                    variant="standard" />
                <br />
                <Button type='submit' variant='contained'>Submit</Button>
            </form>
        </div>
    );
};

export default AddItems;