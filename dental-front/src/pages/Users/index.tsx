import { useQuery } from "@apollo/client";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Box from '@mui/material/Box'
import { withStyles, WithStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import { UsersQuery } from 'src/hooks/query';

const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: '№',
    flex: 1
  },
  {
    field: 'username',
    headerName: 'Хэрэглэгчийн нэр',
    flex: 1
  },
  {
    field: 'timestamp',
    headerName: 'Цаг',
    flex: 1
  },
  {
    field: 'serviceId',
    headerName: 'Үйлчилгээний №',
    flex: 1
  },
  {
    field: 'role',
    headerName: 'Үүрэг',
    flex: 1
  },
  {
    field: 'phone',
    headerName: 'Утас',
    flex: 1
  },
  {
    field: 'lastname',
    headerName: 'Овог',
    flex: 1
  },
  {
    field: 'firstname',
    headerName: 'Нэр',
    flex: 1
  },
  {
    field: 'email',
    headerName: 'Имэйл',
    type: "email",
    flex: 1
  },
  {
    field: 'city',
    headerName: 'Аймаг, хот',
    flex: 1
  },
  {
    field: 'district',
    headerName: 'Cум, дүүрэг',
    flex: 1
  },
  {
    field: 'street',
    headerName: 'Баг, хороо',
    flex: 1
  },
  {
    field: 'address_detail',
    headerName: 'Дэлгэрэнгүй хаяг',
    flex: 1
  },
  {
    field: 'birth',
    headerName: 'Төрсөн өдөр',
    flex: 1
  },
  {
    field: 'clinicId',
    headerName: 'Эмнэлгийн №',
    flex: 1
  },
];

const styles = {
  root: {
    border: 3,
    borderRadius: '40',
    boxShadow: '0 1px 10px 1px lightgrey'
  }
}

function Users(props: WithStyles<typeof styles>) {
  const { loading, error, data } = useQuery(UsersQuery);
  const [users, setUsers] = useState([])
  const { classes } = props;

  useEffect(() => {
    if (loading == false) setUsers(data.getUsers)
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
        rows={users}
        columns={columns}
        pageSize={20}
        rowsPerPageOptions={[10]}
      />
    </Box>
  );
}
export default withStyles(styles)(Users);