import { useQuery } from "@apollo/client";
import { GET_PATIENT_HISTORY } from "../../graphql";
import { Loading } from "..";
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { SmallDataGridHeight } from "../../helper/constants";

const columns = [
    { field: 'clinicId', headerName: 'Үзүүлсэн Эмнэлэг', width: 180, valueFormatter: ({ value } : any) => value.title },
    { field: 'serviceId', headerName: 'Авсан үйлчилгээ', width: 180, valueFormatter: ({ value } : any) => value.serviceName },
    { field: 'appointmentId', headerName: 'Цаг авалт', width: 180, valueFormatter: ({ value } : any) => value.hello },
    { field: 'note', headerName: 'Мэдээлэл', width: 180 },
];

type PatientHistoryGridType = {
    id: String;
}

export const PatientHistoryGrid: React.FC<PatientHistoryGridType> = ({ id }) => {
    const clinicId = window.sessionStorage.getItem("clinicId")
    const { data, loading } = useQuery(GET_PATIENT_HISTORY, {
        variables: {
            clinicId: clinicId,
            patientId: id
        }
    })

    const histories = data ? data.getPatientHistories : []

    return (
        <Box>
            {loading && <Loading />}
            <DataGrid
                sx={{ height: SmallDataGridHeight }}
                getRowId={(row) => row._id}
                rows={histories}
                columns={columns}
            />
        </Box>
    );
}