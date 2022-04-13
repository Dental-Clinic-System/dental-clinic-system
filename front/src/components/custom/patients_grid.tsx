import { useQuery } from "@apollo/client";
import { GET_PATIENTS } from "../../graphql";
import { Loading } from "..";
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: '_id', width: 150 },
    { field: 'firstname', headerName: 'Өвчтөний нэр', width: 150, editable: true },
    { field: 'lastname', headerName: 'Өвчтөний Овог', width: 150, editable: true },
    { field: 'age', headerName: 'Нас', width: 70, editable: true },
    { field: 'birth', headerName: 'Төрсөн өдөр', width: 150, editable: true },
    { field: 'registration_number', headerName: 'Регистийн дугаар', width: 150, editable: true },
    { field: 'sex', headerName: 'Хүйс', width: 70, editable: true },
    { field: 'address_description', headerName: 'Хаяг', width: 150, editable: true },
    { field: 'phone', headerName: 'Утасны дугаар', width: 150, editable: true },
    { field: 'home_phone', headerName: 'Гэрийн утасны дугаар', width: 150, editable: true },
    { field: 'email', headerName: 'Имэйл хаяг', width: 150, editable: true },
    { field: 'doctor', headerName: 'Эмчлэгч эмч', width: 150, editable: true },
    { field: 'card_number', headerName: 'Картын дугаар', width: 150, editable: true },
];

type PatientsGridType = {
    setSelectedPatient: Function
}

export const PatientsGrid:React.FC<PatientsGridType> = ({ setSelectedPatient }) => {
    const { loading, data } = useQuery(GET_PATIENTS)

    return (
        <Box>
            {loading && <Loading/>}
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