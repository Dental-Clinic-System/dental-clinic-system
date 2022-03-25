import { useQuery } from "@apollo/client";
import { Container, Typography } from "@mui/material";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { ServicesQuery } from "src/hooks/query";

const columns: GridColDef[] = [
  { field: 'id', headerAlign: 'center', headerName: '№', },
  {
    field: 'classification',
    headerName: 'Ангилал',
    width: 150
  },
  {
    field: 'service_name',
    headerName: 'Үйлчилгээний нэр',
    width: 150
  },
  {
    field: 'code',
    headerName: 'Код',
  },
  {
    field: 'short',
    headerName: 'Богино',
  },
  {
    field: 'price',
    headerName: 'Үнэ',
  },
  {
    field: 'description',
    headerName: 'Тодорхойлолт',
    width: 150
  },
];
const Users = () => {
  const { loading, error, data } = useQuery(ServicesQuery);
  const [services, setServices] = useState([])

  useEffect(() => {
    if (error) console.log(error)
    if (!loading && !error) setServices(data.getServices);
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
        <div style={{ height: "100%", width: '100%' }}>
          <DataGrid
            getRowId={(row) => row._id}
            rows={services}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        </div>
      }
    </>
  );
}
export default Users;