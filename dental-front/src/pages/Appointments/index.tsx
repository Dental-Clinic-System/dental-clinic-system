import { useQuery } from "@apollo/client";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Box from '@mui/material/Box'
import { withStyles, WithStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import { AppointmentsQuery } from 'src/hooks/query';

const columns: GridColDef[] = [
  { field: 'id',headerAlign: 'center', headerName: '№', width: 90 },
  {
    field: 'userId',
    headerName: 'userId',
    flex: 1
  },
  {
    field: 'patientId',
    headerName: 'patientId',
    flex: 1
  },
  {
    field: 'clinicsId',
    headerName: 'ClinicsId',
    flex: 1
  },
  {
    field: 'status',
    headerName: 'Төлөв',
    flex: 1
  },
  {
    field: 'date',
    headerName: 'Date',
    flex: 1
  },
  {
    field: 'serviceId',
    headerName: 'serviceId',
    flex: 1
  },
  {
    field: 'hour',
    headerName: 'hour',
    flex: 1
  },
];

const styles={
  root: {
    border: 3,
    borderRadius: '40',
    boxShadow: '0 1px 10px 1px lightgrey'
  }
}

function Appointments(props: WithStyles<typeof styles>) {
  const { loading, error, data } = useQuery(AppointmentsQuery);
  const [Appointments, setAppointments] = useState([])
  const { classes } = props;

  useEffect(() => {
    if (loading == false) setAppointments(data.getServices)
  }, [loading])

  return (
    <Box sx={{
      height: "100%",
      width: "100%",
      padding: "5%",
    }}>
      <DataGrid
        className={classes.root}
        getRowId={(row) => row._id}
        rows={Appointments}
        columns={columns}
        pageSize={20}
        rowsPerPageOptions={[10]}
      />
    </Box>
  );
}
export default withStyles(styles)(Appointments);