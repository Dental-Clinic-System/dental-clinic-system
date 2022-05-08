import { useState } from "react";
import { Box, Button } from '@mui/material';
import { PatientsGrid, CreateModal } from '../components/index'
import { AddPatientForm } from "../components/custom";

export const PatientScreen = () => {
    const [openAdd, setOpenAdd] = useState(false)

    return (
        <Box>
            <PatientsGrid setOpenAdd={setOpenAdd}/>

            <CreateModal open={openAdd} setOpen={setOpenAdd} addButtonName={'Өвчтөн нэмэх'} showButton={false}>
                <AddPatientForm setOpen={setOpenAdd}/>
            </CreateModal>
        </Box>
    );
}