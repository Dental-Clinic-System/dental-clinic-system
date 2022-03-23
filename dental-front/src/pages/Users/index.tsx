import { useQuery } from "@apollo/client";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { UsersQuery } from 'src/hooks/query';
const columns: GridColDef[] = [
  {
    field: 'username',
    headerName: 'Username',
  },
  {
    field: 'timestamp',
    headerName: 'Time Stamp',
  },
  {
    field: 'serviceId',
    headerName: 'Service ID',
  },
  {
    field: 'role',
    headerName: 'Role',
  },
  {
    field: 'phone',
    headerName: 'Phone',
    headerAlign: 'left',
    type: "number",
  },
  {
    field: 'password',
    headerName: 'Password',
  },
  {
    field: 'lastname',
    headerName: 'Last Name',
  },
  {
    field: 'firstname',
    headerName: 'First Name',
  },
  {
    field: 'email',
    headerName: 'Email',
    type: "email",
  },
  {
    field: 'address',
    headerName: 'Address',
  },
  {
    field: 'birth',
    headerName: 'Birth',
  },
  {
    field: 'clinicId',
    headerName: 'ClinicId',
  },
  {
    field: '_id',
    headerName: 'id',
  },
];

const Users = () => {
  const { loading, error, data } = useQuery(UsersQuery);
  const [users, setUsers] = useState([])

  useEffect(() => {
    if (loading == false) setUsers(data.getUsers)
  }, [loading])

  return (
    <div style={{ height: '100%', width: '100%', justifyContent: "space-between" }}>
      <DataGrid
        getRowId={(row) => row._id}
        rows={users}
        columns={columns}
        pageSize={20}
        rowsPerPageOptions={[10]}
      />
    </div>
  );
}
export default Users;