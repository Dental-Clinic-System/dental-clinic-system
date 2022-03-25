import { useQuery } from "@apollo/client";
import { Container, Typography } from "@mui/material";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Box from '@mui/material/Box'
import { withStyles, WithStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import { ServicesQuery } from 'src/hooks/query';

const columns: GridColDef[] = [
  { field: 'id', headerAlign: 'center', headerName: '№', },
  {
    field: 'classification',
    headerName: 'Ангилал',
    flex: 1
  },
  {
    field: 'service_name',
    headerName: 'Үйлчилгээний нэр',
    flex: 1
  },
  {
    field: 'code',
    headerName: 'Код',
    flex: 1
  },
  {
    field: 'short',
    headerName: 'Богино',
    flex: 1
  },
  {
    field: 'price',
    headerName: 'Үнэ',
    flex: 1
  },
  {
    field: 'description',
    headerName: 'Тодорхойлолт',
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

function Services(props: WithStyles<typeof styles>) {
  const { loading, error, data } = useQuery(ServicesQuery);
  const [services, setServices] = useState([])
  const { classes } = props;

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
        <Box sx={{
          height: "100%",
          width: '100%',
          borderRadius: 40,
          padding: "5%"
        }}>
          <DataGrid
            getRowId={(row) => row._id}
            rows={services}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        </Box>
      }
    </>
  );
}
export default withStyles(styles)(Services);