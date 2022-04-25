import { useQuery } from "@apollo/client";
import { GET_PATIENTS } from "../../graphql";
import { Loading } from "..";
import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

type PatientsGridType = {
  setSelectedPatient: Function;
};

export const PatientsGrid: React.FC<PatientsGridType> = ({
  setSelectedPatient,
}) => {
  const { loading, data } = useQuery(GET_PATIENTS);

  return (
    <Box>
      {loading && <Loading />}
      <DataGrid
        sx={{ height: 640, width: '80vw' }}
        getRowId={(row) => row._id}
        rows={data ? data.getPatients : []}
        columns={columns}
        onSelectionModelChange={(item: any) => {
          setSelectedPatient(item)
        }}
        pageSize={10}
      />
    </Box>
  );
}

const columns = [
  {
    field: "Засах",
    renderCell: (cellValues: any) => {
      return (
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => console.log(e, cellValues)}
        >
          Өөрчлөх
        </Button>
      );
    }
  },
  { field: 'firstName', headerName: 'Өвчтөний нэр', width: 150, editable: true },
  { field: 'lastName', headerName: 'Өвчтөний Овог', width: 150, editable: true },
  { field: 'age', headerName: 'Нас', width: 70, editable: true },
  { field: 'birthdate', headerName: 'Төрсөн өдөр', width: 70, editable: true },
  { field: 'gender', headerName: 'Хүйс', width: 70, editable: true },
  { field: 'mobileNumber', headerName: 'Утасны дугаар', width: 150, editable: true },
  { field: 'email', headerName: 'Имэйл хаяг', width: 150, editable: true },
  { field: 'cardNumber', headerName: 'Картын дугаар', width: 150, editable: true },
];
