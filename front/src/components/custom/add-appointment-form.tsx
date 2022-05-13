import { DateTimePicker, LocalizationProvider } from "@mui/lab"
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Autocomplete, Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { useEffect, useState } from "react"
import { useMutation, useQuery } from "@apollo/client";
import { ADD_APPOINTMENT, DELETE_APPOINTMENT, GET_SERVICES, UPDATE_APPOINTMENT } from "../../graphql";

type AppointmentFormType = {
    data?: any,
    setOpen: Function,
    staffs: any, 
    buttonLabel: 'change' | 'add',
    showDelete?: boolean,
    setData: Function,
    patients: any, 
    services: any
}

export const AddAppointmentForm = ({ data, setOpen, staffs, buttonLabel, showDelete, setData, patients, services }: AppointmentFormType) => {
    const [AddAppointment] = useMutation(ADD_APPOINTMENT)
    const [UpdateAppointment] = useMutation(UPDATE_APPOINTMENT)
    const [DeleteAppointment] = useMutation(DELETE_APPOINTMENT)

    const [title, setTitle] = useState(data && data.title)
    const [notes, setNotes] = useState(data && data.notes)
    const [staff, setStaff] = useState(data ? data.staffId : staffs[0].id)
    const [startTime, setStartTime] = useState(data && data.startDate)
    const [endTime, setEndTime] = useState(data && data.endDate)
    const [patient, setPatient] = useState({ text: '', _id: '' })
    const [service, setService] = useState({ serviceName: '', _id: '' })

    useEffect(() => {
        if (data && patients) {
            let pat = patients.find((e: any) => e.id == data.patientId)
            setPatient(pat)
        }

        if (data && services) {
            let ser = services.find((e: any) => e._id == data.serviceId)
            setService(ser)
        }
    }, [data, patients, services])

    const change = () => {
        let changed = {
            title,
            notes,
            staffId: staff,
            startDate: startTime,
            endDate: endTime,
            patientId: patient._id,
            serviceId: service._id
        }

        setData((e: any) => {
            let tempdata = e;

            tempdata = tempdata.map((appointment: any) => {
                if (appointment.id == data.id) {
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
            patientId: patient._id,
            clinicId: sessionStorage.getItem('clinicId'),
            status: "active",
            serviceId: service._id
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
                <Autocomplete
                    value={patient}
                    onChange={(event, newValue) => {
                        if (typeof newValue === 'string') {
                            setPatient({
                                text: newValue,
                                _id: patients.find((e: any) => e.lastName + ' ' + e.firstName == newValue)
                            })
                        } else if (newValue && newValue.text) {
                            setPatient(newValue)
                        }
                    }}
                    getOptionLabel={(option) => {
                        return option.text;
                    }}
                    selectOnFocus
                    options={patients}
                    renderOption={(props, option) => <li {...props}>{option.text}</li>}
                    renderInput={(params) => (
                        <TextField required sx={{ marginBottom: '20px', width: '100%' }} {...params} size='small' label="Өвчтөн" />
                    )}
                />
                <Autocomplete
                    value={service}
                    onChange={(event, newValue) => {
                        if (newValue && newValue.serviceName) {
                            setService(newValue)
                        }
                    }}
                    getOptionLabel={(option) => {
                        return option.serviceName;
                    }}
                    selectOnFocus
                    options={services}
                    renderOption={(props, option) => <li {...props}>{option.serviceName}</li>}
                    renderInput={(params) => (
                        <TextField required sx={{ marginBottom: '20px', width: '100%' }} {...params} size='small' label="Эмчилгээ" />
                    )}
                />
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