import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ProductDetails = ({ open, handleClose, productInfo }) => {
    const { name, price, engine, catagory, mt, mp, ec, fi, Gears, tc } = productInfo;
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        {name}
                    </Typography>
                    <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                        Price: {price}
                    </Typography>
                    <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                        Engine: {engine}
                    </Typography>
                    <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                        Catagory: {catagory}
                    </Typography>
                    <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                        Max Power: {mp}
                    </Typography>
                    <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                        Max Torque: {mt}
                    </Typography>
                    <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                        Cooling System: {ec}
                    </Typography>
                    <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                        FI: {fi}
                    </Typography>
                    <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                        Gear Box: {Gears}
                    </Typography>
                    <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                        Tank Capacity: {tc}
                    </Typography>
                </Box>
            </Fade>
        </Modal>
    );
};

export default ProductDetails;