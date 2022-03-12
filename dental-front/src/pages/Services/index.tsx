import * as React from 'react';
  import Table from '@mui/material/Table';
  import TableBody from '@mui/material/TableBody';
  import TableCell from '@mui/material/TableCell';
  import TableContainer from '@mui/material/TableContainer';
  import TableHead from '@mui/material/TableHead';
  import TableRow from '@mui/material/TableRow';
  import Paper from '@mui/material/Paper';
  
  function createData( _id, ClinicId, Title, Description) {
    return {_id, ClinicId, Title, Description};
  }
  
  const rows = [
    createData('1234', 'ClinicId', 'Title',  'Description Description Description'),
    createData('1234', 'ClinicId', 'Title',  'Description Description Description'),
    createData('1234', 'ClinicId', 'Title',  'Description Description Description'),
    createData('1234', 'ClinicId', 'Title',  'Description Description Description'),
    createData('1234', 'ClinicId', 'Title',  'Description Description Description'),
    createData('1234', 'ClinicId', 'Title',  'Description Description Description'),
    createData('1234', 'ClinicId', 'Title',  'Description Description Description'),
    createData('1234', 'ClinicId', 'Title',  'Description Description Description'),
    createData('1234', 'ClinicId', 'Title',  'Description Description Description'),
    createData('1234', 'ClinicId', 'Title',  'Description Description Description'),
    createData('1234', 'ClinicId', 'Title',  'Description Description Description'),
    createData('1234', 'ClinicId', 'Title',  'Description Description Description'),
    createData('1234', 'ClinicId', 'Title',  'Description Description Description'),
    createData('1234', 'ClinicId', 'Title',  'Description Description Description'),
    createData('1234', 'ClinicId', 'Title',  'Description Description Description'),
    createData('1234', 'ClinicId', 'Title',  'Description Description Description'),
    createData('1234', 'ClinicId', 'Title',  'Description Description Description'),
    createData('1234', 'ClinicId', 'Title',  'Description Description Description'),
    createData('1234', 'ClinicId', 'Title',  'Description Description Description'),
    createData('1234', 'ClinicId', 'Title',  'Description Description Description'),
  ];
  
  const Services = () => {
  return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow style={{'position': 'relative'}}>
              <TableCell>_id</TableCell>
              <TableCell align="center">ClinicId</TableCell>
              <TableCell align="center">Title</TableCell>
              <TableCell align="center">Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left">{row._id}</TableCell>
                <TableCell align="center">{row.ClinicId}</TableCell>
                <TableCell align="center">{row.Title}</TableCell>
                <TableCell align="center">{row.Description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

export default Services;
