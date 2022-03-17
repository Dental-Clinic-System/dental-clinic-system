import { useQuery } from "@apollo/client";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { PatientsQuery } from 'src/hooks/query';

const columns: GridColDef[] = [
  { field: '_id',headerAlign: 'center', headerName: 'ID', width: 90 },
  {
    field: 'last_name',
    headerName: 'Last Name',
    width: 150,
    headerAlign: 'center',
  },
  {
    field: 'first_name',
    headerName: 'First Name',
    width: 150,
    headerAlign: 'center',
  },
  {
    field: 'birth',
    headerName: 'Birth',
    width: 110,
    headerAlign: 'center',
  },
  {
    field: 'age',
    headerName: 'Age',
    width: 110,
    headerAlign: 'center',
  },
  {
    field: 'registration_number',
    headerName: 'Registration Number',
    width: 150,
    headerAlign: 'center',
  },
  {
    field: 'sex',
    headerName: 'Sex',
    width: 110,
    headerAlign: 'center',
  },
  {
    field: 'city',
    headerName: 'City',
    width: 110,
    headerAlign: 'center',
  },
  {
    field: 'district',
    headerName: 'District',
    width: 110,
    headerAlign: 'center',
  },
  {
    field: 'committee',
    headerName: 'Committee',
    width: 110,
    headerAlign: 'center',
  },
  {
    field: 'address_description',
    headerName: 'Address Description',
    width: 150,
    headerAlign: 'center',
  },
  {
    field: 'role',
    headerName: 'Role',
    width: 110,
    headerAlign: 'center',
  },
  {
    field: 'phone',
    headerName: 'Phone',
    width: 110,
    headerAlign: 'center',
  },
  {
    field: 'home_phone',
    headerName: 'Home Phone',
    width: 110,
    headerAlign: 'center',
  },
  {
    field: 'doctor',
    headerName: 'Doctor',
    width: 110,
    headerAlign: 'center',
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 110,
    headerAlign: 'center',
  },
  {
    field: 'card_number',
    headerName: 'Card Number',
    width: 110,
    headerAlign: 'center',
  },
  {
    field: 'sysdate',
    headerName: 'Sysdate',
    width: 110,
    headerAlign: 'center',
  },
];

const Patients = () => {
  const { loading, error, data } = useQuery(PatientsQuery);
  const [patients, setPatients] = useState([])

  useEffect(() => {
    if (loading == false) setPatients(data.getUsers)
  }, [loading])

  return (
    <div style={{ height: '100%', width: '100%', justifyContent: "space-between" }}>
      <DataGrid
        getRowId={(row) => row._id}
        rows={patients}
        columns={columns}
        pageSize={20}
        rowsPerPageOptions={[10]}
      />
    </div>
  );
}
export default Patients;