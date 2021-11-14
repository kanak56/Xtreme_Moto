import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';


const AllUsers = () => {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        const url = 'https://obscure-refuge-13960.herokuapp.com/users'
        fetch(url)
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])
    return (
        <div style={{ marginTop: '5%' }}>
            <h1>User Lists</h1>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="Orders table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name of Users</TableCell>
                            <TableCell align="right">Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.displayName}
                                </TableCell>
                                <TableCell align="right">{row.email}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default AllUsers;