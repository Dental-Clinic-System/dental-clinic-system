import * as React from 'react';
  import Table from '@mui/material/Table';
  import TableBody from '@mui/material/TableBody';
  import TableCell from '@mui/material/TableCell';
  import TableContainer from '@mui/material/TableContainer';
  import TableHead from '@mui/material/TableHead';
  import TableRow from '@mui/material/TableRow';
  import Paper from '@mui/material/Paper';
  
  function createData( _id, Email, Phone, Lastname, Firstname, ClinicId) {
    return {_id, Email, Phone, Lastname, Firstname, ClinicId};
  }
  
  const rows = [
    createData('1234', 'example@gmail.com', 99009900,  'Sonor', 'M.',  'ClinicId'),
    createData('1234', 'example@gmail.com', 99009900,  'Sonor', 'M.',  'ClinicId'),
    createData('1234', 'example@gmail.com', 99009900,  'Sonor', 'M.',  'ClinicId'),
    createData('1234', 'example@gmail.com', 99009900,  'Sonor', 'M.',  'ClinicId'),
    createData('1234', 'example@gmail.com', 99009900,  'Sonor', 'M.',  'ClinicId'),
    createData('1234', 'example@gmail.com', 99009900,  'Sonor', 'M.',  'ClinicId'),
    createData('1234', 'example@gmail.com', 99009900,  'Sonor', 'M.',  'ClinicId'),
    createData('1234', 'example@gmail.com', 99009900,  'Sonor', 'M.',  'ClinicId'),
    createData('1234', 'example@gmail.com', 99009900,  'Sonor', 'M.',  'ClinicId'),
    createData('1234', 'example@gmail.com', 99009900,  'Sonor', 'M.',  'ClinicId'),
    createData('1234', 'example@gmail.com', 99009900,  'Sonor', 'M.',  'ClinicId'),
    createData('1234', 'example@gmail.com', 99009900,  'Sonor', 'M.',  'ClinicId'),
    createData('1234', 'example@gmail.com', 99009900,  'Sonor', 'M.',  'ClinicId'),
    createData('1234', 'example@gmail.com', 99009900,  'Sonor', 'M.',  'ClinicId'),
    createData('1234', 'example@gmail.com', 99009900,  'Sonor', 'M.',  'ClinicId'),
    createData('1234', 'example@gmail.com', 99009900,  'Sonor', 'M.',  'ClinicId'),
    createData('1234', 'example@gmail.com', 99009900,  'Sonor', 'M.',  'ClinicId'),
    createData('1234', 'example@gmail.com', 99009900,  'Sonor', 'M.',  'ClinicId'),
    createData('1234', 'example@gmail.com', 99009900,  'Sonor', 'M.',  'ClinicId'),
    createData('1234', 'example@gmail.com', 99009900,  'Sonor', 'M.',  'ClinicId'),
  ];
  
  const Patients = () => {
  return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow style={{'position': 'relative'}}>
              <TableCell>_id</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Phone</TableCell>
              <TableCell align="center">Lastname</TableCell>
              <TableCell align="center">Firstname</TableCell>
              <TableCell align="center">ClinicId</TableCell>
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
                <TableCell align="center">{row.Lastname}</TableCell>
                <TableCell align="center">{row.Firstname}</TableCell>
                <TableCell align="center">{row.ClinicId}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

export default Patients;
