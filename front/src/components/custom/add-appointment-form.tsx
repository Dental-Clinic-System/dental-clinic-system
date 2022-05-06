import { DateTimePicker, LocalizationProvider } from "@mui/lab"
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { useState } from "react"
import { useMutation } from "@apollo/client";
import { ADD_APPOINTMENT, DELETE_APPOINTMENT, UPDATE_APPOINTMENT } from "../../graphql";

export const AddAppointmentForm = ({ data, setOpen, staffs, buttonLabel, showDelete, setData }: any) => {
    const [AddAppointment] = useMutation(ADD_APPOINTMENT)
    const [UpdateAppointment] = useMutation(UPDATE_APPOINTMENT)
    const [DeleteAppointment] = useMutation(DELETE_APPOINTMENT)

    const [title, setTitle] = useState(data && data.title)
    const [notes, setNotes] = useState(data && data.notes)
    const [staff, setStaff] = useState(data ? data.staffId : staffs[0].id)
    const [startTime, setStartTime] = useState(data && data.startDate)
    const [endTime, setEndTime] = useState(data && data.endDate)
    const [patient, setPatient] = useState(data && data.patientId)

    const change = () => {
        let changed = {
            title,
            notes,
            staffId: staff,
            startDate: startTime,
            endDate: endTime,
            patientId: patient,
        }

        setData((e: any) => {
            let tempdata = e;

            tempdata = tempdata.map((appointment: any) => {
                if (appointment.id == data.id) {
                    console.log('dasd')
                    UpdateAppointment({ variables: { ...changed, id: appointment.id } })
                    return { ...appointment, ...changed }
                } else {
                    return appointment;
                }
            });

            return tempdata;
        })

        setOpen(false)
    }

    const add = async () => {
        let formattedData = {
            title,
            notes,
            staffId: staff,
            startDate: startTime,
            endDate: endTime,
            patientId: patient,
            clinicId: sessionStorage.getItem('clinicId'),
            status: "active",
            serviceId: ""
        }

        await AddAppointment({ variables: formattedData })
        window.location.reload()
    }

    const deleteFunction = () => {
        setData((e: any) => {
            let tempdata = e;
            tempdata = tempdata.filter((appointment: any) => {
                if (appointment.id === data.id) {
                    DeleteAppointment({ variables: { id: appointment.id } })
                    return false;
                } else {
                    return true;
                }
            });

            return tempdata
        })

        setOpen(false)
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Box>
                <TextField required sx={{ marginBottom: '20px', width: '100%' }} label='Гарчиг' size='small' value={title} onChange={(e) => setTitle(e.target.value)} />
                <FormControl sx={{ width: '100%' }}>
                    <InputLabel sx={{ height: '100%' }} id='staff'>Эмч</InputLabel>
                    <Select required size='small' sx={{ marginBottom: '20px', width: '100%' }} labelId='staff' label='Эмч' value={staff} onChange={(e) => setStaff(e.target.value)}>
                        {staffs && staffs.map((e: any) => (
                            <MenuItem value={e.id}>{e.text}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <TextField required sx={{ marginBottom: '20px', width: '100%' }} label='Өвчтөн' size='small' value={patient} onChange={(e) => setPatient(e.target.value)} />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                        label='Эхлэх цаг'
                        renderInput={(params) => { setStartTime(params?.inputProps?.value); return <TextField required sx={{ marginBottom: '20px', width: '100%' }} size='small' {...params} /> }}
                        value={startTime}
                        onChange={(e) => setStartTime(e)}
                    />
                    <DateTimePicker
                        label='Дуусах цаг'
                        renderInput={(params) => { setEndTime(params?.inputProps?.value); return <TextField required sx={{ marginBottom: '20px', width: '100%' }} size='small' {...params} /> }}
                        value={endTime}
                        onChange={(e) => setEndTime(e)}
                    />
                </LocalizationProvider>
                <TextField sx={{ marginBottom: '20px', width: '100%' }} rows={4} multiline label='Нэмэлт мэдээлэл' size='small' value={notes} onChange={(e) => setNotes(e.target.value)} />
            </Box>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-around' }}>
                <Button variant='outlined' size='small' onClick={() => setOpen(false)}>Буцах</Button>
                {showDelete &&
                    <Button
                        variant='outlined'
                        color='error'
                        onClick={() => { deleteFunction() }}
                        size='small'
                    >
                        Устгах
                    </Button>
                }
                {buttonLabel == 'change' &&
                    <Button variant='outlined' size='small' color='success' onClick={() => change()}>Засах</Button>
                }
                {buttonLabel == 'add' &&
                    <Button variant='outlined' size='small' color='success' onClick={() => add()}>Цаг авах</Button>
                }
            </Box>
        </Box>
    )
}