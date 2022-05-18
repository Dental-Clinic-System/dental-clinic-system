import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useMutation, useQuery } from '@apollo/client';
import { GET_STAFFS, ADD_STAFF, UPDATE_STAFF } from '../graphql';
import { CreateModal, ModalInput } from '../components';
import { Button } from '@mui/material';
import { STAFFS } from '../helper/constants';

const RenderInfo = () => {
  const [age, setAge] = useState('');
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Age</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
};

type StaffType = {
  _id: string;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  last_login: string;
  availability: string;
  type: string;
  timestamp: boolean;
  password: string;
  createdAt: Date;
  updatedAt: Date;
};

export const Users = () => {
  const clinicId = window.sessionStorage.getItem('clinicId');
  const { data, loading, error } = useQuery(GET_STAFFS, {
    variables: {
      clinicId: clinicId
    }
  });
  const [addStaffModal, setAddStaffModal] = useState(false);
  const [staffInfo, addStaffInfo] = useState({});
  const [staffs, setStaffs] = useState<Array<StaffType>>([]);
  const [addStaff] = useMutation(ADD_STAFF);
  const [updateStaff] = useMutation(UPDATE_STAFF);

  useEffect(() => {
    document.title = STAFFS;
    if (error) console.log(error);
    if (!loading && !error) {
      setStaffs(
        data?.getStaffs.map((staff: any, index: any) => ({
          ...staff,
          index: index + 1,
          info: 'Дэлгэрэнгүй'
        }))
      );
    }
  }, [loading]);

  const addData = async () => {
    try {
      const res: any = await addStaff({
        variables: {
          ...staffInfo,
          clinicId: clinicId
        }
      });
      const addedStaffIndex = staffs.length + 1;
      const addedStaff: StaffType = {
        ...res.data.addStaff,
        index: addedStaffIndex
      };
      staffs.map((staff: any, index: any) => ({
        ...staff,
        index: index + 1,
        info: 'Дэлгэрэнгүй'
      }));
      setStaffs([...staffs, addedStaff]);
      setAddStaffModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return <h1>Loading ...</h1>;
  }

  return (
    <Box>
      <CreateModal
        open={addStaffModal}
        setOpen={setAddStaffModal}
        addButtonName={'Ажилтан нэмэх'}
        createFunction={addData}
      >
        <ModalInput
          onChange={(e: any) =>
            addStaffInfo({ ...staffInfo, username: e.target.value })
          }
          label={'Хэрэглэгчийн нэр'}
        />
        <ModalInput
          onChange={(e: any) =>
            addStaffInfo({ ...staffInfo, lastName: e.target.value })
          }
          label={'Овог'}
        />
        <ModalInput
          onChange={(e: any) =>
            addStaffInfo({ ...staffInfo, firstName: e.target.value })
          }
          label={'Нэр'}
        />
        <ModalInput
          onChange={(e: any) =>
            addStaffInfo({ ...staffInfo, email: e.target.value })
          }
          label={'Имэйл'}
        />
        <ModalInput
          onChange={(e: any) =>
            addStaffInfo({ ...staffInfo, password: e.target.value })
          }
          label={'Нууц үг'}
        />
        <ModalInput
          onChange={(e: any) =>
            addStaffInfo({ ...staffInfo, phone: e.target.value })
          }
          label={'Утасны дугаар'}
        />
      </CreateModal>
      <Button
        sx={{ marginBottom: '10px' }}
        variant="outlined"
        onClick={() => setAddStaffModal(true)}
      >
        Ажилтан нэмэх
      </Button>
      <DataGrid
        sx={{ height: 640, width: '100%' }}
        getRowId={(row) => row._id}
        rows={staffs}
        columns={column}
        pageSize={10}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
      />
    </Box>
  );
};

export default Users;

const column: GridColDef[] = [
  {
    field: 'index',
    headerName: 'Ду',
    flex: 1
  },
  {
    field: 'username',
    headerName: 'Хэрэглэгчийн нэр',
    flex: 1
  },
  {
    field: 'first_name',
    headerName: 'Нэр',
    flex: 1
  },
  {
    field: 'last_name',
    headerName: 'Овог',
    flex: 1
  },
  {
    field: 'email',
    headerName: 'Имэйл',
    flex: 1
  },
  {
    field: 'phone',
    headerName: 'Дугаар',
    flex: 1
  },
  {
    field: 'availability',
    headerName: 'Ажиллах хуваарь',
    flex: 1,
    renderCell: (staff: any) => {
      return staff.formattedValue === 'A9_13' ? '9:00 - 13:00' : '';
    }
  },
  {
    field: 'type',
    headerName: 'Үүрэг',
    flex: 1,
    editable: true,
    type: 'singleSelect',
    valueOptions: ['doctor', 'reception', 'admin']
    // renderCell: () => { return RenderInfo }
  },
  {
    field: 'info',
    headerName: 'Дэлгэрэнгүй',
    flex: 1,
    renderCell: (row) => {
      return (
        <Link to={`/staff/${row.id}`} state={{ id: row.id }}>
          Дэлгэрэнгүй
        </Link>
      );
    }
  }
];
