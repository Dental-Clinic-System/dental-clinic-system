import { useQuery } from "@apollo/client";
import { Container, Typography } from "@mui/material";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { UsersQuery } from 'src/hooks/query';
const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: '№',
    width: 90
  },
  {
    field: 'username',
    headerName: 'Хэрэглэгчийн нэр',
    width: 150
  },
  {
    field: 'timestamp',
    headerName: 'Цаг',
    width: 100
  },
  {
    field: 'serviceId',
    headerName: 'Үйлчилгээний №',
    width: 120
  },
  {
    field: 'role',
    headerName: 'Үүрэг',
    width: 100
  },
  {
    field: 'phone',
    headerName: 'Утас',
    width: 160
  },
  {
    field: 'lastname',
    headerName: 'Овог',
    width: 130
  },
  {
    field: 'firstname',
    headerName: 'Нэр',
    width: 130
  },
  {
    field: 'email',
    headerName: 'Имэйл',
    type: "email",
    width: 170
  },
  {
    field: 'city',
    headerName: 'Аймаг, хот',
    width: 150
  },
  {
    field: 'district',
    headerName: 'Cум, дүүрэг',
    width: 140
  },
  {
    field: 'street',
    headerName: 'Баг, хороо',
    width: 130
  },
  {
    field: 'address_detail',
    headerName: 'Дэлгэрэнгүй хаяг',
    width: 260
  },
  {
    field: 'birth',
    headerName: 'Төрсөн өдөр',
  },
  {
    field: 'clinicId',
    headerName: 'Эмнэлгийн №',
  },
];

const Users = () => {
  const { loading, error, data } = useQuery(UsersQuery);
  const [users, setUsers] = useState([])

  useEffect(() => {
    if (error) console.log(error)
    if (!loading && !error) setUsers(data.getUsers);
  }, [loading])

  return (
    <>
      {loading || error ?
        <Container maxWidth="sm" sx={{ textAlign: "center" }}>
          <Typography paddingTop='100px' variant="h1" color={error ? "crimson" : ''}>
            {error ? 'Error' : 'Loading...'}
          </Typography>
        </Container>
        :
        <div style={{ height: '100%', width: '100%', justifyContent: "space-between" }}>
          <DataGrid
            getRowId={(row) => row._id}
            rows={users}
            columns={columns}
            pageSize={20}
            rowsPerPageOptions={[10]}
          />
        </div>
      }
    </>
  );
}
export default Users;