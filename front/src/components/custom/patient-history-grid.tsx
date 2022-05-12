import { useState } from 'react'
import { useQuery } from "@apollo/client";
import { GET_PATIENT_HISTORY } from "../../graphql";
import { Loading, DefaultModal } from "..";
import { Box, Button, Table, TableBody, TableCell, TableRow } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { SmallDataGridHeight } from "../../helper/constants";
import { APPOINTMENT_FORM } from '../../helper/constants';

type PatientHistoryGridType = {
    id: string;
}

type AppointmentType = {
    notes: string;
    startDate: string;
    endDate: string;
    title: string
}

export const PatientHistoryGrid: React.FC<PatientHistoryGridType> = ({ id }) => {
    const clinicId = window.sessionStorage.getItem("clinicId")
    const { data, loading } = useQuery(GET_PATIENT_HISTORY, {
        variables: {
            clinicId: clinicId,
            patientId: id
        }
    })
    const [open, setOpen] = useState<boolean>(false)
    const [appointmentData, setAppointmentData] = useState<AppointmentType>()

    const renderModal = (val: AppointmentType) => {
        setOpen(true)
        setAppointmentData(val)
    }

    const columns = [
        { field: 'serviceId', headerName: 'Авсан үйлчилгээ', width: 300, valueFormatter: ({ value }: any) => value.serviceName },
        { field: 'appointmentId', headerName: 'Цаг авалт', width: 300, valueFormatter: ({ value }: any) => value.title },
        { field: 'note', headerName: 'Мэдээлэл', width: 300 },
        {
            field: 'Дэлгэрэнгүй', width: 300, renderCell: (cellValue: any) => {
                return (
                    <Button
                        variant="contained"
                        color="primary"
                        size='small'
                        onClick={() => renderModal(cellValue.row.appointmentId)}
                    >
                        Дэлгэрэнгүй
                    </Button>
                );
            },
        },
    ];

    const histories = data ? data.getPatientHistories : []

    const createRowData = (name: string, field: any) => {
        return { name, field }
    }

    const rows = [
        createRowData(APPOINTMENT_FORM.title, appointmentData?.title),
        createRowData(APPOINTMENT_FORM.startDate, appointmentData?.startDate),
        createRowData(APPOINTMENT_FORM.endDate, appointmentData?.endDate),
        createRowData(APPOINTMENT_FORM.notes, appointmentData?.notes),
    ];

    return (
        <Box>
            {loading && <Loading />}
            <DataGrid
                sx={{ height: SmallDataGridHeight }}
                getRowId={(row) => row._id}
                rows={histories}
                columns={columns}
                disableSelectionOnClick
            />
            <DefaultModal open={open} setOpen={setOpen} sx={{
                width: 450,
                height: 300,
            }}>
                <Table>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.field}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </DefaultModal>
        </Box>
    );
}