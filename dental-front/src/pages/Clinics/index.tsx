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
  },
  {
    field: 'operation_name',
    headerName: 'Operation Date',
  },
  {
    field: 'operation_date',
    headerName: 'Operation Date',
  },
  {
    field: 'contact_number',
    headerName: 'Contact Number',
  },
  {
    field: 'clinic_web',
    headerName: 'clinic Web',
  },
  {
    field: 'official_address',
    headerName: 'Official Address',
  },
  {
    field: 'email',
    headerName: 'Email',
  },
  {
    field: 'status',
    headerName: 'Status',
  },
  {
    field: 'clinic_admin',
    headerName: 'Clinic Admin',
  },
  {
    field: 'work_hours',
    headerName: 'Work Hours',
  },
  {
    field: 'phone',
    headerName: 'Phone',
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