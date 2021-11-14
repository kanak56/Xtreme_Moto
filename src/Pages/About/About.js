import React from 'react';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';



const About = () => {
    return (
        <div id='about'>
            <h1 style={{ fontFamily: 'Yuji Boku' }}>About Us</h1>
            <hr />
            <hr />
            <Paper sx={{ mb: 5 }} elevation={3}>
                <Typography>Xtreme moto  is simple Motorcyle Store
                    <Paper elevation={3}>
                        <Typography>Our Purpose is to Provide best bike with service to the customers
                            <Paper elevation={3}>
                                <Typography>Xreme Moto Zone Are Open 24/7 at your Service
                                    <Paper elevation={3}>
                                        <Typography>We provide after sale service
                                            <Paper elevation={3}>
                                                <Typography>Our Branches is all over the country you can get services from anywhere inside the country
                                                    <Paper elevation={3}>
                                                        <Typography>So Don't wait Just
                                                            <NavLink to='/popularItems'>Explore Our Product</NavLink>
                                                        </Typography>
                                                    </Paper>
                                                </Typography>
                                            </Paper>
                                        </Typography>
                                    </Paper>
                                </Typography>
                            </Paper>
                        </Typography>
                    </Paper>
                </Typography>
            </Paper>


        </div>
    );
};

export default About;