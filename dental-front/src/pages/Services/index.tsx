import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { AlignHorizontalCenter, AlignVerticalCenter } from '@mui/icons-material';
import { textAlign } from '@mui/system';

const columns: GridColDef[] = [
  { field: 'id',headerAlign: 'center', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,

    headerAlign: 'center',
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    headerAlign: 'center',
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    headerAlign: 'center',
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    headerAlign: 'center',
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  {display: "flex", alignItems: "center", id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, },
  { id: 2, lastName: 'Idol', firstName: 'Super', age: 69 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const Users = () => {
  return (
    <div style={{height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
export default Users;