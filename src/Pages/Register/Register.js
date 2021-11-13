import React, { useState } from 'react';
import logobanner from "./../../Asset/loginBanner.png";
import TextField from '@mui/material/TextField';
import { Button, Container, Grid, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { NavLink, useHistory } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import useAuth from '../../hokks/useAuth';


const Register = () => {

    const [loginData, setLoginData] = useState({});
    const { user, registerUser, isLoading, authError } = useAuth();
    const history = useHistory();
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Password did not match');
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();

    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 10 }} items xs={12} md={6}>
                    <Typography variant="h6" sx={{ mt: 5 }} gutterBottom>
                        Please Register
                    </Typography>

                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="User Name"
                            name="name"
                            onChange={handleOnChange}
                            type='username'
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onChange={handleOnChange}
                            type='emial'
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }} id="standard-basic"
                            label="Your Password"
                            name='password'
                            onChange={handleOnChange}
                            type='password'
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }} id="standard-basic"
                            label="Confirm Password"
                            name='password2'
                            onChange={handleOnChange}
                            type='password'
                            variant="standard" />


                        <Button sx={{ width: '75%', m: 3 }} variant='contained' type="submit">Register</Button>
                    </form>}
                    {isLoading && < CircularProgress />}
                    {user?.email && <Alert variant="filled" severity="success">
                        User Created Successfully
                    </Alert>}
                    {authError && <Alert variant="filled" severity="error">
                        {authError}
                    </Alert>}
                    <NavLink style={{ textDecoration: 'none' }} to="/login"><Button sx={{ m: 3 }} variant='text'>Already Registered? Please Login</Button></NavLink>
                </Grid>
                <Grid items xs={12} md={6}>

                    <img style={{ height: '100%', width: "100%" }} src={logobanner} alt=''></img>

                </Grid>
            </Grid>

        </Container>
    );
};

export default Register;