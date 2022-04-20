import { useQuery } from "@apollo/client";
import { GET_PATIENT_HISTORY } from "../../graphql";
import { Loading } from "..";
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { SmallDataGridHeight } from "../../helper/constants";

const columns = [
    { field: 'date', headerName: 'Огноо', width: 150 },
    { field: 'clinicId', headerName: 'Үзүүлсэн Эмнэлэг', width: 150 },
    { field: 'serviceId', headerName: 'Авсан үйлчилгээ', width: 150 },
    { field: 'payment', headerName: 'Төлбөр төлөлт', width: 150 },
];

type PatientHistoryGridType = {
    id: String;
}

export const PatientHistoryGrid: React.FC<PatientHistoryGridType> = ({ id }) => {
    const { data, loading } = useQuery(GET_PATIENT_HISTORY, {
        variables: {
            id: id
        }
    })

    const histories = data ? data.getPatients[0].history : [];

    return (
        <Box>
            {loading && <Loading />}
            <DataGrid
                sx={{ height: SmallDataGridHeight, width: '100%' }}
                getRowId={(row) => row.payment}
                rows={histories}
                columns={columns}
            />
        </Box>
    );
}