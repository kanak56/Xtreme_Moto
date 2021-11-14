import React, { useState } from 'react';

import logobanner from "./../../Asset/loginBanner.png";
import TextField from '@mui/material/TextField';
import { Button, Container, Grid, Typography } from '@mui/material';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hokks/useAuth';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import Footer from '../Footer/Footer';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 12 }} items xs={12} md={6}>

                    <img style={{ width: "100%" }} src={logobanner} alt=''></img>

                </Grid>
                <Grid sx={{ mt: 10 }} items xs={12} md={6}>
                    <Typography variant="h6" sx={{ mt: 5 }}>
                        Please Login
                    </Typography>

                    {!isLoading && <form onSubmit={handleLoginSubmit}>
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
                        <Button sx={{ width: '75%', m: 3 }} variant='contained' type="submit">Login</Button>
                    </form>}

                    {isLoading && < CircularProgress />}
                    {user?.email && <Alert variant="filled" severity="success">
                        Successfully Loged in
                    </Alert>}
                    {authError && <Alert variant="filled" severity="error">
                        {authError}
                    </Alert>}

                    <NavLink style={{ textDecoration: 'none' }} to="/register"><Button sx={{ m: 3 }} variant='text'>New User? Please Register</Button></NavLink>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;