import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
const BikeImportant = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                '& > :not(style)': {
                },
            }}
        >
            <Paper elevation={3}>
                <img width='100%' src={'https://cdn.pixabay.com/photo/2017/07/17/07/05/bike-2511594_1280.jpg'} alt="" srcSet="" />
            </Paper>
            <Paper elevation={3}>
                <Typography sx={{ fontFamily: 'Lobster', fontSize: '20px' }} >
                    Owning a motorcycle does not only give you the joy of riding in an open air, it also offer other benefits such as affordability, better fuel efficiency that can save you money on gas, and easier maintenance.
                </Typography>
                <Paper sx={{ mt: 4, p: 1.2 }} elevation={3}>
                    <hr />
                    <Typography sx={{ fontSize: '20px', fontWeight: '600' }}>What should I know before buying a motorcycle?</Typography>

                    <Paper sx={{ mt: 1, fontFamily: 'Yuji Boku', fontWeight: '600' }} elevation={3}>
                        <ul style={{ listStyle: 'none' }} >
                            <li>BRING A FRIEND. Don’t go on your purchase journey alone.</li>
                            <li>INSPECT THE BIKE. And we mean it!</li>
                            <li>CHECK THE VIN (VEHICLE IDENTIFICATION NUMBER).</li>
                            <li>MAKE SURE IT’S NOT STOLEN.</li>
                            <li>NO LIENS!</li>
                            <li>WRITE UP A BILL OF SALE.</li>
                            <li>BEWARE OF “AS IS” DISCLOSURES.</li>
                        </ul>
                    </Paper>
                </Paper>
            </Paper>
        </Box>
    );
};

export default BikeImportant;