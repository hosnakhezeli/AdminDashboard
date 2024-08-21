import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import LayoutContainer from '../../components/container/LayoutContainer';



function createData(
  id: number,
  first_name: string,
  last_name: string,
  phone: string,
  create_at: number,
) {
  return { id, first_name, last_name, phone, create_at };
}

const rows = [
  createData(1, 'محمدحسین', 'طارمی', '09393023301', 1723984406),
];

export default function BasicTable() {
  return (
    <LayoutContainer>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">شماره </TableCell>
            <TableCell align="left">نام</TableCell>
            <TableCell align="left">نام خانوادگی</TableCell>
            <TableCell align="left">شماره تماس</TableCell>
            <TableCell align="left">تاریخ ایجاد</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">{row.id}</TableCell>
              <TableCell align="left" component="th" scope="row">
                {row.first_name}
              </TableCell>
              <TableCell align="left">{row.last_name}</TableCell>
              <TableCell align="left">{row.phone}</TableCell>
              <TableCell align="left">
                <a href={`/user/${row.id}`}>{row.create_at}</a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </LayoutContainer>
  );
}