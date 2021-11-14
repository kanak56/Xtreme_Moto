import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import logo from './../../Asset/loginBanner.png';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import { Typography } from '@mui/material';
import Itemslist from '../Items/Itemslist';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
} from '@mui/material/styles';
import BikeImportant from '../BikeImportant/BikeImportant';
import Footer from '../Footer/Footer';
import About from '../About/About';
import Navbar from '../../Component/Navbar/Navbar/Navbar';
import Review from '../Review/Review';
import useAuth from '../../hokks/useAuth';
import Reviews from '../Review/Reviews.js/Reviews';

let theme = createTheme();
theme = responsiveFontSizes(theme);


const Home = () => {
    const [items, setItems] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        fetch('https://obscure-refuge-13960.herokuapp.com/items')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])
    return (
        <div>
            <Navbar />
            <Banner />
            <Box>
                <ThemeProvider theme={theme}>
                    <Typography sx={{ mt: 5, fontFamily: 'Yuji Boku' }} variant="h3">Welcome To Xtreme Moto Store....</Typography>
                </ThemeProvider>
                <Paper sx={{ mt: 10 }} elevation={3}>
                    <hr />
                    <Typography variant='h6' bgcolor='yellowgreen'>What we Are Providing</Typography>
                    <hr />
                    <div style={{ display: 'flex', justifyContent: "center" }}>
                        <ul style={{ listStyle: 'none', fontSize: '20px' }}>
                            <li>Free helmet</li>
                            <li>Free T-shirt</li>
                            <li>Free Tax token</li>
                            <li> 5 Free Services</li>
                        </ul>
                        <img style={{ width: '200px' }} src={logo}></img>
                    </div>
                </Paper>
            </Box>
            <BikeImportant></BikeImportant>
            <h1 style={{ fontFamily: 'Yuji Boku', fontSize: '60px' }}>Our Popular Items</h1>
            <hr />
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    items.map(item => <Itemslist
                        key={item.id}
                        item={item}
                    ></Itemslist>)
                }
            </div>
            <div style={{ margin: '20px' }}>
                <NavLink to='/popularItems'>
                    <Button>Explore More Items</Button>
                </NavLink>
            </div>
            <About></About>
            <Reviews />
            {user.email && <Review />}
            <Footer />
        </div >
    );
};

export default Home;