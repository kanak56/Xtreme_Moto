import { Grid } from '@mui/material';
import React from 'react';
import Orders from '../../Orders/Orders';

const InventoryHome = () => {
    return (
        <div>
            <Grid sx={{ mt: 5 }}>
                <Orders></Orders>
            </Grid>
        </div>
    );
};

export default InventoryHome;