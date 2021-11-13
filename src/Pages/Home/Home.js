import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import logo from './../../Asset/loginBanner.png';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Itemslist from '../Items/Itemslist';




const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Home = () => {
    const [items, setItems] = useState();
    useEffect(() => {
        fetch('popularItem.json')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])
    return (
        <div>
            <Banner />
            <Box sx={{ flexGrow: 1, m: 5 }}>
                <Grid container spacing={2} columns={16}>
                    <Grid item xs={8}>
                        <Item>
                            <img height='100%' width='100%' src={logo}></img>

                        </Item>
                    </Grid>
                    <Grid item xs={8}>
                        <Paper sx={{ mt: 10 }} elevation={3}>
                            <hr />
                            <Typography color='red' variant='h4'>
                                Welcome To Xtreme Moto Store
                            </Typography>
                            <Paper sx={{ mt: 10 }} elevation={3}>
                                <hr />
                                <Typography variant='h6'>What we Are Providing</Typography>
                                <hr />
                                <ul style={{ listStyle: 'none', fontSize: '20px' }}>
                                    <li>Free helmet</li>
                                    <li>Free T-shirt</li>
                                    <li>Free Tax token</li>
                                    <li> 5 Free Services</li>
                                </ul>
                            </Paper>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>

            <h1>Our Items</h1>
            <hr />
            {
                items.map(item => <Itemslist
                    key={item.id}
                    item={item}
                ></Itemslist>)
            }

        </div >
    );
};

export default Home;