import { DataGrid, GridColDef } from '@mui/x-data-grid';
import * as React from 'react';
import { ClinicsQuery } from 'src/hooks/query';
import { useQuery } from "@apollo/client";
import { useState, useEffect } from 'react';


const columns: GridColDef[] = [
  { field: 'id',headerAlign: 'center', headerName: 'ID', width: 90 },
  {
    field: 'clinic_name',
    headerName: 'Clinic Name',
    width: 130
  },
  // {
  //   field: 'operation_name',
  //   headerName: 'Operation Date',
  // width: 130
  // },
  // {
  //   field: 'operation_date',
  //   headerName: 'Operation Date',
  // width: 130
  // },
  {
    field: 'contact_number',
    headerName: 'Contact Number',
    width: 130
  },
  {
    field: 'clinic_web',
    headerName: 'clinic Web',
    width: 130
  },
  {
    field: 'official_address',
    headerName: 'Official Address',
    width: 130
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 130
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 130
  },
  {
    field: 'clinic_admin',
    headerName: 'Clinic Admin',
    width: 130
  },
  {
    field: 'work_hours',
    headerName: 'Work Hours',
    width: 130
  },
  {
    field: 'phone',
    headerName: 'Phone',
    width: 130
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