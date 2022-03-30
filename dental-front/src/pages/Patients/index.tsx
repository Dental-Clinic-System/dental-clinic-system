import { useQuery } from "@apollo/client";
import { Container, Typography } from "@mui/material";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Box from '@mui/material/Box'
import { withStyles, WithStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import { PatientsQuery } from 'src/hooks/query';
import { Rowing } from "@mui/icons-material";

const columns: GridColDef[] = [
  { field: '_id', headerName: '№',width: 60 },
  {
    field: 'lastname',
    headerName: 'Овог',
    flex: 1,
    hide: true,
  },
  {
    field: 'firstname',
    headerName: 'Нэр',
    flex: 1,
    hide: true,
  },
  {
    field: 'birth',
    headerName: 'Төрсөн өдөр',
    flex: 1,
    hide: true,
  },
  {
    field: 'age',
    headerName: 'Нас',
    width: 70,
  },
  {
    field: 'registration_number',
    headerName: 'Регистрийн дугаар',
    flex: 1,
  },
  {
    field: 'sex',
    headerName: 'Хүйс',
    width: 80,
  },
  {
    field: 'city',
    headerName: 'Аймаг, хот',
    flex: 0.5
  },
  {
    field: 'district',
    headerName: 'Cум, дүүрэг',
    flex: 1,
    hide: true,
  },
  {
    field: 'street',
    headerName: 'Баг, хороо',
    flex: 1,
    hide: true,
  },
  {
    field: 'address_detail',
    headerName: 'Дэлгэрэнгүй хаяг',
    flex: 1,
    hide: true,
  },
  {
    field: 'role',
    headerName: 'Үүрэг',
    flex: 1,
  },
  {
    field: 'phone',
    headerName: 'Утас',
    flex: 1,
  },
  {
    field: 'home_phone',
    headerName: 'Гэрийн утас',
    flex: 1,
    hide: true,
  },
  {
    field: 'doctor',
    headerName: 'Эмч',
    flex: 1,
    hide: true,
  },
  {
    field: 'email',
    headerName: 'Имэйл',
    flex: 1,
  },
  {
    field: 'card_number',
    headerName: 'Картны дугаар',
    flex: 1,
    hide: true,
  },
  {
    field: 'sysdate',
    headerName: 'Огноо',
    flex: 1,
    hide: true,
  },
];

const styles = {
  root: {
    border: 3,
    borderRadius: '40',
    boxShadow: '0 1px 10px 1px lightgrey'
  }
}

function Patients(props: WithStyles<typeof styles>) {
  const { loading, error, data } = useQuery(PatientsQuery);
  const [patients, setPatients] = useState([])
  const { classes } = props;


  useEffect(() => {
    if (error) console.log(error)
    if (!loading && !error) setPatients(data.getPatients.map((e: any, i: number) => ({...e, _id: i+1})));
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
        <Box sx={{
          height: "100%",
          width: '100%',
          borderRadius: 40,
          padding: "5%"
        }}>
          <DataGrid
            className={classes.root}
            getRowId={(row) => row._id}
            rows={patients}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        </Box>
      }
    </>
  );
}

export default withStyles(styles)(Patients);
