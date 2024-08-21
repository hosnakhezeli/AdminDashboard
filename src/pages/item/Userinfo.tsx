import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import data from '../../../data.json'; 
import { useParams } from 'react-router-dom';
import LayoutContainer from '../../components/container/LayoutContainer';

type orders = {
    id: number;
    product_name: string;
    color: string;
    amount: string;
};

type User = {
    id: number;
    first_name: string;
    last_name: string;
    phone: string;
    create_at: number;
    address: string;
    orders: orders[];
    gender: string;
    last_login: number;
    club_rate: number;
}; 

const users: User[] = data;

function Userinfo() {
    const { userId } = useParams();
    const user = users.find((user: User) => user.id === parseInt(userId || '0', 10));

    if (!user) {
        return <div>کاربر یافت نشد!</div>;
    }

    return (
        <LayoutContainer>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">First Name</TableCell>
                            <TableCell align="left">Last Name</TableCell>
                            <TableCell align="left">Phone</TableCell>
                            <TableCell align="left">Create At</TableCell>
                            <TableCell align="left">Address</TableCell>
                            <TableCell align="left">Orders</TableCell>
                            <TableCell align="left">Gender</TableCell>
                            <TableCell align="left">Last Login</TableCell>
                            <TableCell align="left">Club Rate</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell align="left">{user.first_name}</TableCell>
                            <TableCell align="left">{user.last_name}</TableCell>
                            <TableCell align="left">{user.phone}</TableCell>
                            <TableCell align="left">{new Date(user.create_at * 1000).toLocaleString()}</TableCell>
                            <TableCell align="left">{user.address}</TableCell>
                            <TableCell align="left">
                                {user.orders.map(order => (
                                    <div key={order.id}>
                                        {order.product_name} ({order.color}) - {order.amount} ریال
                                    </div>
                                ))}
                            </TableCell>
                            <TableCell align="left">{user.gender === 'male' ? 'مرد' : 'زن'}</TableCell>
                            <TableCell align="left">{new Date(user.last_login * 1000).toLocaleString()}</TableCell>
                            <TableCell align="left">{user.club_rate}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </LayoutContainer>
    );
}

export default Userinfo;
