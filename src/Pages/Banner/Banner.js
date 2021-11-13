import { Typography } from '@mui/material';
import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <Carousel variant="dark">

            <Carousel.Item>
                <img style={{ height: '650px' }}
                    className="d-block w-100"
                    src='https://idsb.tmgrup.com.tr/ly/uploads/images/2020/10/18/65876.jpg'
                    alt="First slide"
                />
                <Carousel.Caption>
                    <Typography style={{ color: 'white', backgroundColor: 'black' }} variant='h6'>All your Need is here</Typography>
                    <p style={{ color: 'white', backgroundColor: 'black' }}>Your Bike Store is here</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: '650px' }}
                    className="d-block w-100"
                    src="https://images.firstpost.com/wp-content/uploads/2021/05/Marc-Marquez-Portuguese-MotoGP-AP-640.jpg?impolicy=website&width=1200&height=800"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <Typography style={{ color: 'white', backgroundColor: 'black' }} variant='h6'>We are Providing After  Sale Services</Typography>
                    <p style={{ color: 'white', backgroundColor: 'black' }}>Your Bike Store is here</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: '650px' }}
                    className="d-block w-100"
                    src="https://cdn.motorlat.com/administrator/uploads/19000/19675_motorlat-motogp-portuguesegp-fp3-quartararo-leads-the-way-into-qualifying-v46.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <Typography style={{ color: 'white', backgroundColor: 'black' }} variant='h6'>We are providing free Gifts for our custormer</Typography>
                    <p style={{ color: 'white', backgroundColor: 'black' }}>Your Bike Store is here</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;