import { Box } from "@mui/system";
import { useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

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
  // const navigate = useNavigate()
  // const SendProfile = (params: any) => {
  //   return (
  //     <button onClick={() => navigation?.navigate('profile', { state: params })}>
  //       Дэлгэрэнгүй
  //     </button>
  //   )
  // }
  const row = [
    {
      id: 1,
      username: "anand",
      firstname: "radnaa",
      lastname: "anand",
      email: "anada@gmail.com",
      phone: "99119911",
      birth: "2005.11.04",
      timestamp: "9:00 - 17:00",
      role: "worker", // ["admin", "superadmin", "worker"],
      info: "Дэлгэрэнгүй",
    },
    {
      id: 2,
      username: "anand 2",
      firstname: "radnaa",
      lastname: "anand 2",
      email: "anada@gmail.com",
      phone: "99119911",
      birth: "2005.11.04",
      timestamp: "9:00 - 17:00",
      role: "worker", // ["admin", "superadmin", "worker"]
      info: "Дэлгэрэнгүй",
    },
    {
      id: 3,
      username: "anand 3",
      firstname: "radnaa",
      lastname: "anand 3",
      email: "anada@gmail.com",
      phone: "99119911",
      birth: "2005.11.04",
      timestamp: "9:00 - 17:00",
      role: "worker", // ["admin", "superadmin", "worker"]
      info: "Дэлгэрэнгүй",
    },
  ];
  return (
    <Box>
      <DataGrid
        sx={{ height: 640, width: '80vw' }}
        getRowId={(row) => row.id}
        rows={row}
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
    field: "address",
    headerName: "Хаяг",
    flex: 1,
  },
  {
    field: "firstname",
    headerName: "Нэр",
    flex: 1,
  },
  {
    field: "lastname",
    headerName: "Овог",
    flex: 1,
  },
  {
    field: "email",
    headerName: "Мэйл",
    flex: 1,
  },
  {
    field: "phone",
    headerName: "Дугаар",
    flex: 1,
  },
  {
    field: "birth",
    headerName: "Төрсөн өдөр",
    flex: 1,
  },
  {
    field: "timestamp",
    headerName: "Ажиллах хуваарь",
    flex: 1,
  },
  {
    field: "role",
    headerName: "Үүрэг",
    flex: 1,
    // renderCell: () => { return RenderInfo }
  },
  {
    field: "info",
    headerName: "Дэлгэрэнгүй",
    flex: 1,
    renderCell: (row) => {
      return (
        <Link to={`/profile/${row.id}`} state={{ id: row.id }}>
          Дэлгэрэнгүй
        </Link>
      );
    },
  },
  // {
  //   field: "clinicId",
  //   headerName: ""
  // },
  // {
  //   field: "serviceId",
  //   headerName: ""
  // }`
];