import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import userEvent from '@testing-library/user-event';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hokks/useAuth';

const Review = () => {
    const [review, setReview] = useState();
    const { user } = useAuth();
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newReview = { ...review };
        newReview[field] = value;
        setReview(newReview);
    }
    const handleAddReview = e => {
        const reviews = {
            ...review
        }
        console.log(reviews);
        fetch("https://obscure-refuge-13960.herokuapp.com/reviews", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('success')

                }
                else {
                    alert("failed to order")
                }
            })
        e.preventDefault();
    }
    return (
        <div>
            <h1>Review Our Service</h1>
            <Box sx={{ mt: 5 }}>
                <form onSubmit={handleAddReview}>
                    <TextField
                        sx={{ width: '50%', m: 1 }} id="standard-basic"
                        label='Your Email'
                        name='email'
                        onBlur={handleOnBlur}
                        type='text'
                        variant="standard" />
                    <TextField
                        sx={{ width: '50%' }}
                        id="outlined-multiline-static"
                        label="Add Reviews"
                        multiline
                        rows={4}
                        name='description'
                        type='text'
                        onBlur={handleOnBlur}
                    />

                    < Button onClick={handleAddReview} sx={{ width: '50%', m: 3 }} variant='contained' type="submit">Submit</Button>
                </form>
            </Box>
        </div >
    );
};

export default Review;