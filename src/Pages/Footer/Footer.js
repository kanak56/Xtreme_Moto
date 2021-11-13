import { Typography } from '@mui/material';
import React from 'react';
import xtremeLogo from './../../Asset/xtremeMotoZone.png'
const Footer = () => {
    return (
        <div style={{ backgroundColor: '#2e1500' }}>
            <Typography variant="h6" component="div" sx={{ color: 'white' }}  > <img src={xtremeLogo}></img>Moto Zone</Typography>
        </div>
    );
};

export default Footer;