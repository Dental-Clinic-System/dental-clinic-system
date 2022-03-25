import { useQuery } from "@apollo/client";
import { Container, Typography } from "@mui/material";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { PatientsQuery } from 'src/hooks/query';

const columns: GridColDef[] = [
  { field: 'id', headerName: '№', width: 90 },
  {
    field: 'lastname',
    headerName: 'Овог',
    width: 150,
  },
  {
    field: 'firstname',
    headerName: 'Нэр',
    width: 150,
  },
  {
    field: 'birth',
    headerName: 'Төрсөн өдөр',
  },
  {
    field: 'age',
    headerName: 'Нас',
    width: 60,
  },
  {
    field: 'registration_number',
    headerName: 'Регистрийн дугаар',
    width: 120,
  },
  {
    field: 'sex',
    headerName: 'Хүйс',
    width: 90,
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
    field: 'role',
    headerName: 'Үүрэг',
    width: 100,
  },
  {
    field: 'phone',
    headerName: 'Утас',
    width: 160,
  },
  {
    field: 'home_phone',
    headerName: 'Гэрийн утас',
    width: 150,
  },
  {
    field: 'doctor',
    headerName: 'Эмч',
    width: 140,
  },
  {
    field: 'email',
    headerName: 'Имэйл',
    width: 170,
  },
  {
    field: 'card_number',
    headerName: 'Картны дугаар',
    width: 150,
  },
  {
    field: 'sysdate',
    headerName: 'Огноо',
  },
];

const Patients = () => {
  const { loading, error, data } = useQuery(PatientsQuery);
  const [patients, setPatients] = useState([])

  useEffect(() => {
    if (error) console.log(error)
    if (!loading && !error) setPatients(data.getPatients);
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
            rows={patients}
            columns={columns}
            pageSize={20}
            rowsPerPageOptions={[10]}
          />
        </div>
      }
    </>
  );
}

export default Patients;