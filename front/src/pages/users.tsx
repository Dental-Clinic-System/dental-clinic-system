import { Box } from '@mui/system'
import React from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid';

export const Users = () => {
  const column: GridColDef[] = [
    {
      field:"id", 
      headerName:"ID",
      flex: 1
    },
    {
      field: "username",
      headerName: "Хэрэглэгчийн нэр",
      flex: 1
    },
    {
      field: "address",
      headerName: "Хаяг",
      flex: 1
    },
    {
      field: "firstname",
      headerName: "Нэр",
      flex: 1
    },
    {
      field: "lastname",
      headerName: "Овог",
      flex: 1
    },
    {
      field: "email",
      headerName: "Мэйл",
      flex: 1
    },
    {
      field: "phone",
      headerName: "Дугаар",
      flex: 1
    },
    {
      field: "birth",
      headerName: "Төрсөн өдөр",
      flex: 1
    },
    {
      field: "timestamp",
      headerName: "Ажиллах хуваарь",
      flex: 1
    },
    {
      field: "role",
      headerName: "Үүрэг",
      flex: 1
    },
    // {
    //   field: "clinicId",
    //   headerName: ""
    // },
    // {
    //   field: "serviceId",
    //   headerName: ""
    // }`
  ]
  const row = [
    {
      id: 1, 
      username: "Sonor",
      firstname: "Mungunsukh",
      lastname: "Sonor",
      email: "sonor@gmail.com",
      phone: "99119911",
      birth: "2005.11.04",
      timestamp: "9:00 - 17:00",
      role: "worker", // ["admin", "superadmin", "worker"]
    },
    {
      id: 2, 
      username: "Sonor 2",
      firstname: "Mungunsukh",
      lastname: "Sonor 2",
      email: "sonor@gmail.com",
      phone: "99119911",
      birth: "2005.11.04",
      timestamp: "9:00 - 17:00",
      role: "worker", // ["admin", "superadmin", "worker"]
    },
    {
      id: 3, 
      username: "Sonor 3",
      firstname: "Mungunsukh",
      lastname: "Sonor 3",
      email: "sonor@gmail.com",
      phone: "99119911",
      birth: "2005.11.04",
      timestamp: "9:00 - 17:00",
      role: "worker", // ["admin", "superadmin", "worker"]
    },
  ]
  return (
    <Box>
      <DataGrid 
      sx={{        height: "70vh"
      }}
      getRowId={(row) => row.id}
      rows={row}
      columns={column}
      pageSize={10}
      rowsPerPageOptions={[5]}
      />
    </Box>
  )
}
export default Users;