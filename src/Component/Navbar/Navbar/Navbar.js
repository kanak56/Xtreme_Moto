import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import xtremeLogo from './../../../Asset/xtremeMotoZone.png'
import CabinIcon from '@mui/icons-material/Cabin';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import './Navbar.css';
import useAuth from '../../../hokks/useAuth';


const Navbar = (props) => {
    // const [user, setUser] = useState();
    const { user, logOut } = useAuth();
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
                            <MenuItem ><NavLink to='/' style={{ textDecoration: 'none', color: 'black' }} ><Button style={{ width: '140px', backgroundColor: 'skyblue', color: 'white' }} color='inherit'><CabinIcon style={{ paddingRight: '5px', paddingBottom: '5px' }} /> Home  </Button></NavLink></MenuItem>
                            <MenuItem ><NavLink to='/popularItems' style={{ textDecoration: 'none', color: 'black' }} ><Button style={{ width: '140px', backgroundColor: 'skyblue', color: 'white' }} color='inherit'>All Products</Button></NavLink></MenuItem>
                            <MenuItem >  <NavLink to='/about' style={{ textDecoration: 'none', color: 'black' }} ><Button style={{ width: '140px', backgroundColor: 'skyblue', color: 'white' }} color='inherit'>About</Button></NavLink></MenuItem>
                            {
                                user?.email ? <MenuItem > <Button onClick={logOut} style={{ width: '140px', backgroundColor: 'skyblue', color: 'white' }} color='inherit'>Log Out</Button></MenuItem> :
                                    < MenuItem > <NavLink to='/login' style={{ textDecoration: 'none', color: 'black' }} ><Button style={{ width: '140px', backgroundColor: 'skyblue', color: 'white' }} color='inherit'>Login</Button></NavLink></MenuItem>
                            }
                        </Menu>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <img src={xtremeLogo}></img> Moto Zone
                    </Typography>


                </Toolbar>
            </AppBar>
        </Box >
    );
};

export default Navbar;