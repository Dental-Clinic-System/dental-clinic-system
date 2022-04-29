import { Box } from "@mui/system";
import { useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useMutation, useQuery } from "@apollo/client";
import { GET_STAFFS, ADD_STAFF, UPDATE_STAFF } from '../graphql'
import { CreateModal, ModalInput } from '../components'
import { Button } from "@mui/material";

const RenderInfo = () => {
  const [age, setAge] = useState("");
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
export const Users = () => {
  const clinicId = window.sessionStorage.getItem("clinicId");
  const { data, loading } = useQuery(GET_STAFFS, {
    variables: {
      clinicId: clinicId
    }
  })
  const [addStaffModal, setAddStaffModal] = useState(false)
  const [staffInfo, addStaffInfo] = useState({})
  const [addStaff] = useMutation(ADD_STAFF)
  const [updateStaff] = useMutation(UPDATE_STAFF)

  if (loading) {
    return <h1>Loading ...</h1>
  }

  const staffs = data?.getStaffs.map((staff: any, indx: any) => ({ ...staff, id: indx + 1, info: "Дэлгэрэнгүй" }))

  console.log('staffs: ', data)
  return (
    <Box>
      <CreateModal open={addStaffModal} setOpen={setAddStaffModal} addButtonName={"Ажилтан нэмэх"} createFunction={() => {
        addStaff({
          variables: {
            ...staffInfo,
            clinicId: clinicId
          }
        })
        setAddStaffModal(false)
      }}>
        <ModalInput onChange={(e: any) => addStaffInfo({ ...staffInfo, username: e.target.value })} label={"Хэрэглэгчийн нэр"} />
        <ModalInput onChange={(e: any) => addStaffInfo({ ...staffInfo, firstName: e.target.value })} label={"Нэр"} />
        <ModalInput onChange={(e: any) => addStaffInfo({ ...staffInfo, lastName: e.target.value })} label={"Овог"} />
        <ModalInput onChange={(e: any) => addStaffInfo({ ...staffInfo, email: e.target.value })} label={"Мэйл"} />
        <ModalInput onChange={(e: any) => addStaffInfo({ ...staffInfo, password: e.target.value })} label={"Нууц үг"} />
        <ModalInput onChange={(e: any) => addStaffInfo({ ...staffInfo, phone: e.target.value })} label={"Дугаар"} />
      </CreateModal>
      <Button onClick={() => setAddStaffModal(true)} >Ажилтан нэмэх</Button>
      <DataGrid
        sx={{ height: 640, width: '80vw' }}
        getRowId={(row) => row.id}
        rows={staffs}
        columns={column}
        pageSize={10}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        onEditRowsModelChange={async (e, d) => {
          const { type } = e[Object.keys(e)[0]]
          const key = Object.keys(e)[0]
          const userName = staffs[`${Number(key) - 1}`];
          await updateStaff({
            variables: {
              clinicId: clinicId,
              username: userName['username'],
              type: type.value
            }
          })
        }}
      />
    </Box>
  );
};

export default Users;

const column: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    flex: 1,
  },
  {
    field: "username",
    headerName: "Хэрэглэгчийн нэр",
    flex: 1,
  },
  {
    field: "first_name",
    headerName: "Нэр",
    flex: 1,
  },
  {
    field: "last_name",
    headerName: "Овог",
    flex: 1,
  },
  {
    field: "email",
    headerName: "Имэйл",
    flex: 1,
  },
  {
    field: "phone",
    headerName: "Дугаар",
    flex: 1,
  },
  {
    field: "availability",
    headerName: "Ажиллах хуваарь",
    flex: 1,
    renderCell: (staff: any) => {
      return staff.formattedValue === "A9_13" ? "9:00 - 13:00" : ""
    }
  },
  {
    field: "type",
    headerName: "Үүрэг",
    flex: 1,
    editable: true,
    type: "singleSelect",
    valueOptions: ["doctor", "reception", "admin"],
    // renderCell: () => { return RenderInfo }
  },
  {
    field: "info",
    headerName: "Дэлгэрэнгүй",
    flex: 1,
    renderCell: (row) => {
      return (
        <Link to={`/staff/${row.id}`} state={{ id: row.id }}>
          Дэлгэрэнгүй
        </Link>
      );
    },
  }
];