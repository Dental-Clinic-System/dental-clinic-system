import * as React from 'react';
  import Table from '@mui/material/Table';
  import TableBody from '@mui/material/TableBody';
  import TableCell from '@mui/material/TableCell';
  import TableContainer from '@mui/material/TableContainer';
  import TableHead from '@mui/material/TableHead';
  import TableRow from '@mui/material/TableRow';
  import Paper from '@mui/material/Paper';
  
  function createData( _id, Email, Phone, Password, Timestamp, Status, ClinicId, ServiceId) {
    return {_id, Email, Phone, Password, Timestamp, Status, ClinicId, ServiceId};
  }
  
  const rows = [
    createData('1234','example@gmail.com', 99009900, 'password123', 'Mon 1:00 - friday 2:00', 'Accepted', 'ClinicId' , 'ServiceId'),
    createData('1234','example@gmail.com', 99009900, 'password123', 'Mon 1:00 - friday 2:00', 'Accepted', 'ClinicId' , 'ServiceId'),
    createData('1234','example@gmail.com', 99009900, 'password123', 'Mon 1:00 - friday 2:00', 'Accepted', 'ClinicId' , 'ServiceId'),
    createData('1234','example@gmail.com', 99009900, 'password123', 'Mon 1:00 - friday 2:00', 'Accepted', 'ClinicId' , 'ServiceId'),
    createData('1234','example@gmail.com', 99009900, 'password123', 'Mon 1:00 - friday 2:00', 'Accepted', 'ClinicId' , 'ServiceId'),
    createData('1234','example@gmail.com', 99009900, 'password123', 'Mon 1:00 - friday 2:00', 'Accepted', 'ClinicId' , 'ServiceId'),
    createData('1234','example@gmail.com', 99009900, 'password123', 'Mon 1:00 - friday 2:00', 'Accepted', 'ClinicId' , 'ServiceId'),
    createData('1234','example@gmail.com', 99009900, 'password123', 'Mon 1:00 - friday 2:00', 'Accepted', 'ClinicId' , 'ServiceId'),
    createData('1234','example@gmail.com', 99009900, 'password123', 'Mon 1:00 - friday 2:00', 'Accepted', 'ClinicId' , 'ServiceId'),
    createData('1234','example@gmail.com', 99009900, 'password123', 'Mon 1:00 - friday 2:00', 'Declined', 'ClinicId' , 'ServiceId'),
    createData('1234','example@gmail.com', 99009900, 'password123', 'Mon 1:00 - friday 2:00', 'Declined', 'ClinicId' , 'ServiceId'),
    createData('1234','example@gmail.com', 99009900, 'password123', 'Mon 1:00 - friday 2:00', 'Declined', 'ClinicId' , 'ServiceId'),
    createData('1234','example@gmail.com', 99009900, 'password123', 'Mon 1:00 - friday 2:00', 'Declined', 'ClinicId' , 'ServiceId'),
    createData('1234','example@gmail.com', 99009900, 'password123', 'Mon 1:00 - friday 2:00', 'Declined', 'ClinicId' , 'ServiceId'),
    createData('1234','example@gmail.com', 99009900, 'password123', 'Mon 1:00 - friday 2:00', 'Declined', 'ClinicId' , 'ServiceId'),
    createData('1234','example@gmail.com', 99009900, 'password123', 'Mon 1:00 - friday 2:00', 'Requested', 'ClinicId' , 'ServiceId'),
    createData('1234','example@gmail.com', 99009900, 'password123', 'Mon 1:00 - friday 2:00', 'Requested', 'ClinicId' , 'ServiceId'),
    createData('1234','example@gmail.com', 99009900, 'password123', 'Mon 1:00 - friday 2:00', 'Requested', 'ClinicId' , 'ServiceId'),
    createData('1234','example@gmail.com', 99009900, 'password123', 'Mon 1:00 - friday 2:00', 'Requested', 'ClinicId' , 'ServiceId'),
    createData('1234','example@gmail.com', 99009900, 'password123', 'Mon 1:00 - friday 2:00', 'Requested', 'ClinicId' , 'ServiceId'),
  ];
  
  const Users = () => {
  return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>asdfgd</TableHead>
          <TableHead>
            <TableRow style={{'position': 'relative'}}>
              <TableCell>_id</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Phone</TableCell>
              <TableCell align="center">Password</TableCell>
              <TableCell align="center">Timestamp</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">ClinicId</TableCell>
              <TableCell align="center">ServiceId</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left">{row._id}</TableCell>
                <TableCell align="center">{row.Email}</TableCell>
                <TableCell align="center">{row.Phone}</TableCell>
                <TableCell align="center">{row.Password}</TableCell>
                <TableCell align="center">{row.Timestamp}</TableCell>
                <TableCell align="center">{row.Status}</TableCell>
                <TableCell align="center">{row.ClinicId}</TableCell>
                <TableCell align="center">{row.ServiceId}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

export default Users;
