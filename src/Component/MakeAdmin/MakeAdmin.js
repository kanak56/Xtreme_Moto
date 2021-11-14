import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email }
        fetch('https://obscure-refuge-13960.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                }
                console.log(data)
            })
        e.preventDefault()
    }
    return (
        <div style={{ marginTop: '5%' }}>
            <h1>You can make admin</h1>
            <form onSubmit={handleAdminSubmit}>
                <TextField sx={{ width: '50%' }}
                    id="standard-basic"
                    type='email'
                    onBlur={handleOnBlur}
                    label='Give an Email' variant='standard'></TextField>
                <Button type='submit' variant='contained'>Make Admin</Button>
            </form>
            {success && <Alert severity='success'>Admin Added Successfully</Alert>}
        </div>
    );
};

export default MakeAdmin;