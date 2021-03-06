import React, { useEffect, useState } from 'react';
import useAuth from '../../hokks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';


const Orders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const url = `https://obscure-refuge-13960.herokuapp.com/orders?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);
    const handleDeleteOrder = id => {
        window.confirm('Are your sre sure want to delete');

        if (window.confirm() === true) {
            const url = `https://obscure-refuge-13960.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully');
                        const remainingUsers = orders.filter(order => order._id !== id);
                        setOrders(remainingUsers);
                    }
                })
        }
        else {
            alert('Try Again')
        }
    }
    return (
        <div>
            <h1>Orders {orders.length}</h1>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="Orders table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Product Name</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Mobile No.</TableCell>
                            <TableCell align="right">Check Out</TableCell>
                            <TableCell align="right">Delete Order</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.productName}</TableCell>
                                <TableCell align="right">{row.price}</TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                                <TableCell align="right">{row.number}</TableCell>
                                <TableCell align="right">

                                    {row.payment ? 'Paid' : <NavLink style={{ textDecoration: 'none' }} to={`/inventory/orders/${row._id}`}><Button>Confirm Order</Button></NavLink>}
                                </TableCell>
                                <TableCell align="right">
                                    <Button onClick={() => handleDeleteOrder(row._id)}>Delete</Button>
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </TableContainer>
        </div>
    );
};

export default Orders; <h1>Orders</h1>