import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import xtremeLogo from '../../Asset/xtremeMotoZone.png';
import { Button, Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';
import {

    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import InventoryHome from './InventoryHome/InventoryHome';
import AddItems from '../AddItems/AddItems';
import useAuth from '../../hokks/useAuth';
import AllUsers from './AllUsers/AllUsers';
import AllProducts from '../AllProduct/AllProducts';

const drawerWidth = 150;
const Inventory = (props) => {
    const { window } = props;
    const { admin } = useAuth();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <List>

                <NavLink style={{ textDecoration: 'none' }} to={`${url}`}>
                    <ListItem>
                        <Button>My Order</Button>
                    </ListItem>
                </NavLink>
                {
                    admin && <Box>
                        <NavLink style={{ textDecoration: 'none' }} to={`${url}/makeAdmin`}>
                            <ListItem><Button>Make Admin</Button></ListItem>
                        </NavLink>
                        <NavLink style={{ textDecoration: 'none' }} to={`${url}/addItems`}>
                            <ListItem><Button>Add Items</Button></ListItem>
                        </NavLink>
                        <NavLink style={{ textDecoration: 'none' }} to={`${url}/allProducts`}>
                            <ListItem><Button>All Products</Button></ListItem>
                        </NavLink>
                        <NavLink style={{ textDecoration: 'none' }} to={`${url}/allUsers`}>
                            <ListItem><Button>User Lists</Button></ListItem>
                        </NavLink>
                    </Box>
                }
                <NavLink style={{ textDecoration: 'none' }} to='/'>
                    <ListItem>
                        <Button>Home</Button>
                    </ListItem>
                </NavLink>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        <img src={xtremeLogo} alt="" srcset="" />
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >

                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <InventoryHome></InventoryHome>
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route path={`${path}/addItems`}>
                        <AddItems></AddItems>
                    </Route>
                    <Route path={`${path}/allUsers`}>
                        <AllUsers></AllUsers>
                    </Route>
                    <Route path={`${path}/allProducts`}>
                        <AllProducts></AllProducts>
                    </Route>
                </Switch>

            </Box>

        </Box>
    );

};
Inventory.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};
export default Inventory;