import { useQuery } from "@apollo/client";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { ServicesQuery } from "src/hooks/query";

const columns: GridColDef[] = [
  { field: 'id',headerAlign: 'center', headerName: 'ID',},
  {
    field: 'classification',
    headerName: 'Classification',
    width: 150
  },
  {
    field: 'service_name',
    headerName: 'Service Name',
    width: 150
  },
  {
    field: 'code',
    headerName: 'Code',
  },
  {
    field: 'short',
    headerName: 'Short',
  },
  {
    field: 'price',
    headerName: 'Price',
  },
  {
    field: 'description',
    headerName: 'Description',
  },
];
const Users = () => {
  const { loading, error, data } = useQuery(ServicesQuery);
  const [services, setServices] = useState([])

  console.log(services);
  useEffect(() => {
    if (loading == false) setServices(data.getServices)
  }, [loading])

  return (
    <div style={{height: "100%", width: '100%' }}>
      <DataGrid
        getRowId={(row) => row._id}
        rows={services}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
export default Users;