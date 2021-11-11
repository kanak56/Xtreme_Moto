import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import './Navbar.css';
import userEvent from '@testing-library/user-event';

const Navbar = (props) => {
    // const [user, setUser] = useState();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >  <Button
                        id="basic-button"
                        aria-controls="basic-menu"
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        variant='primary'
                    >
                            <MenuIcon />
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem ><NavLink to='/' style={{ textDecoration: 'none', color: 'black' }} ><Button color='inherit'>Home</Button></NavLink></MenuItem>
                            <MenuItem ><NavLink to='/popularItems' style={{ textDecoration: 'none', color: 'black' }} ><Button color='inherit'>Popular Items</Button></NavLink></MenuItem>
                            <MenuItem ><NavLink to='/services' style={{ textDecoration: 'none', color: 'black' }} ><Button color='inherit'>Services</Button></NavLink></MenuItem>
                            <MenuItem >  <NavLink to='/about' style={{ textDecoration: 'none', color: 'black' }} ><Button color='inherit'>About</Button></NavLink></MenuItem>
                            < MenuItem > <NavLink to='/login' style={{ textDecoration: 'none', color: 'black' }} ><Button color='inherit'>Login</Button></NavLink></MenuItem>
                            <MenuItem > <NavLink to='/login' style={{ textDecoration: 'none', color: 'black' }} ><Button color='inherit'>Log Out</Button></NavLink></MenuItem>
                        </Menu>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Xtreme Moto Zone
                    </Typography>


                </Toolbar>
            </AppBar>
        </Box >
    );
};

export default Navbar;