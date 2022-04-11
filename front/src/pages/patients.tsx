import { useState } from "react";
import { Box, Button } from '@mui/material';
import { PatientsGrid, AddPatientModal, DeletePatientModal } from '../components'

export const PatientScreen = () => {
    const [openAdd, setOpenAdd] = useState(false)
    const [openDelete, setOpenDelete] = useState(false)
    const [selectedPatient, setSelectedPatient] = useState([])

    return (
        <Box>
            <Button onClick={() => setOpenAdd(true)} variant='outlined'>Өвчтөн нэмэх</Button>
            <Button onClick={() => setOpenDelete(true)} variant='outlined' color='error'>Өвчтөн хасах</Button>
            <PatientsGrid setSelectedPatient={setSelectedPatient}/>
            <AddPatientModal open={openAdd} setOpen={setOpenAdd}/>
            <DeletePatientModal open={openDelete} setOpen={setOpenDelete} deletingUser={selectedPatient}/>
        </Box>
    );
}