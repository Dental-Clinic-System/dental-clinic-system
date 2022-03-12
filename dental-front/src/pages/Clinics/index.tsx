import * as React from 'react';
  import Table from '@mui/material/Table';
  import TableBody from '@mui/material/TableBody';
  import TableCell from '@mui/material/TableCell';
  import TableContainer from '@mui/material/TableContainer';
  import TableHead from '@mui/material/TableHead';
  import TableRow from '@mui/material/TableRow';
  import Paper from '@mui/material/Paper';
  
  function createData( _id, Name, Phone, Email, Status, WorkHours) {
    return {_id, Name, Phone, Email, Status, WorkHours };
  }
  
  const rows = [
    createData('1234', 'Sonor', 99009900, 'example@gmail.com', 'accepted', '9am-10pm'),
    createData('1234', 'Sonor', 99009900, 'example@gmail.com', 'accepted', '9am-10pm'),
    createData('1234', 'Sonor', 99009900, 'example@gmail.com', 'accepted', '9am-10pm'),
    createData('1234', 'Sonor', 99009900, 'example@gmail.com', 'accepted', '9am-10pm'),
    createData('1234', 'Sonor', 99009900, 'example@gmail.com', 'accepted', '9am-10pm'),
    createData('1234', 'Sonor', 99009900, 'example@gmail.com', 'accepted', '9am-10pm'),
    createData('1234', 'Sonor', 99009900, 'example@gmail.com', 'accepted', '9am-10pm'),
    createData('1234', 'Sonor', 99009900, 'example@gmail.com', 'accepted', '9am-10pm'),
    createData('1234', 'Sonor', 99009900, 'example@gmail.com', 'accepted', '9am-10pm'),
    createData('1234', 'Sonor', 99009900, 'example@gmail.com', 'accepted', '9am-10pm'),
    createData('1234', 'Sonor', 99009900, 'example@gmail.com', 'accepted', '9am-10pm'),
    createData('1234', 'Sonor', 99009900, 'example@gmail.com', 'accepted', '9am-10pm'),
    createData('1234', 'Sonor', 99009900, 'example@gmail.com', 'accepted', '9am-10pm'),
    createData('1234', 'Sonor', 99009900, 'example@gmail.com', 'accepted', '9am-10pm'),
    createData('1234', 'Sonor', 99009900, 'example@gmail.com', 'accepted', '9am-10pm'),
    createData('1234', 'Sonor', 99009900, 'example@gmail.com', 'accepted', '9am-10pm'),
    createData('1234', 'Sonor', 99009900, 'example@gmail.com', 'accepted', '9am-10pm'),
    createData('1234', 'Sonor', 99009900, 'example@gmail.com', 'accepted', '9am-10pm'),
    createData('1234', 'Sonor', 99009900, 'example@gmail.com', 'accepted', '9am-10pm'),
    createData('1234', 'Sonor', 99009900, 'example@gmail.com', 'accepted', '9am-10pm'),
  ];
  
  const Clinics = () => {
  return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow style={{'position': 'relative'}}>
              <TableCell>_id</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Phone</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Work Hours</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left">{row._id}</TableCell>
                <TableCell align="center">{row.Name}</TableCell>
                <TableCell align="center">{row.Phone}</TableCell>
                <TableCell align="center">{row.Email}</TableCell>
                <TableCell align="center">{row.Status}</TableCell>
                <TableCell align="center">{row.WorkHours}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

export default Clinics;
