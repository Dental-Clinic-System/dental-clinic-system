import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { display, textAlign } from '@mui/system';
import axios from 'axios'



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
];

const rows = [
  // { id: `${id}`, username: `${username}`, timestamp: `${timestamp}`, serviceId: `${serviceId}`, role:`${role}`, phone:`${phone}`, password: `${password}`, lastname: `${lastname}`, firstname: `${firstname}`, email:`${email}`, address: `${address}`, birth:`${birth}`, clinicId:`${clinicId}` },
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const Users = () => {
  const [data, setData] = useState<any>()
  useEffect(() => {

    const dat = axios.post('http://192.168.0.102:4000/', {
      query: `query GetUsers($id: String, $address: String, $firstname: String, $lastname: String, $birth: String, $email: String, $phone: String, $username: String, $password: String, $timestamp: String, $role: String, $clinicId: String, $serviceId: String) {
        getUsers(_id: $id, address: $address, firstname: $firstname, lastname: $lastname, birth: $birth, email: $email, phone: $phone, username: $username, password: $password, timestamp: $timestamp, role: $role, clinicId: $clinicId, serviceId: $serviceId) {
          _id
          username
          timestamp
          serviceId
          role
          password
          phone
          lastname
          firstname
          email
          clinicId
          birth
          address
        }
      }`,
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    setData(dat)


  }, [])

  console.log('data: ', data)
  return (
    <div style={{ height: 400, width: '100%', justifyContent: "space-between" }}>
      <DataGrid
      sx={{
        justifyContent: "space-between"
      }}
        rows={rows}
        columns={columns}
        pageSize={20}
        rowsPerPageOptions={[10]}
      />
    </div>
  );
}
export default Users;