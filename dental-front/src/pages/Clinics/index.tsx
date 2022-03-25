import { DataGrid, GridColDef } from '@mui/x-data-grid';
import * as React from 'react';
import { ClinicsQuery } from 'src/hooks/query';
import { useQuery } from "@apollo/client";
import { useState, useEffect } from 'react';


const columns: GridColDef[] = [
  { field: 'id',headerAlign: 'center', headerName: '№', width: 90 },
  {
    field: 'clinic_name',
    headerName: 'Эмнэлгийн нэр',
    width: 130
  },
  {
    field: 'contact_number',
    headerName: 'Утас',
    width: 160
  },
  {
    field: 'email',
    headerName: 'Имэйл',
    width: 170
  },
  {
    field: 'status',
    headerName: 'Төлөв',
    width: 130
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
];

const Clinics = () => {
  const { loading, error, data } = useQuery(ClinicsQuery);
  const [clinics, setClinics] = useState([])
  
  console.log(clinics)
  useEffect(() => {
    if (loading == false) setClinics(data.getClinics)
  }, [loading])

  return (
    <div style={{height: "100%", width: '100%' }}>
      <DataGrid
        getRowId={(row) => row._id}
        rows={clinics}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
export default Clinics;