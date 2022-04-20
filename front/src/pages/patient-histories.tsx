import { useState } from 'react'
import { Loading, PatientHistoryGrid } from "../components";
import { Box, TextField } from '@mui/material'
import { useQuery } from '@apollo/client';
import { GET_PATIENTS_BRIEFLY } from '../graphql';
import { SmallDataGridHeight } from '../helper/constants';

type PatientType = {
    card_number: String;
    firstname: String;
    lastname: String;
    registration_number: String;
    _id: String;
}

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '100vh',
    width: '80%',
    marginLeft: '5%'
}

const searchListStyle = {
    width: '100%',
    height: 50,
    background: 'white',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    cursor: 'pointer',
    ":hover": {
        background: '#d4d4d3',
    },
    overflow: 'scroll',
    borderBottom: '1px #EBECF0 solid'
}

export const PatientHistoriesScreen = ({ patientId = '' }) => {
    const { data, loading } = useQuery(GET_PATIENTS_BRIEFLY)
    const [recommendedPatients, setRecommendedPatients] = useState<PatientType[]>([])
    const [name, setName] = useState<String>('')
    const [selectedPatient, setSelectedPatient] = useState<String>(patientId)

    const handleChange = (e: any) => {
        setName(e.target.value);

        let newArray = data && data.getPatients.filter((patient: PatientType) => patient.firstname.toLowerCase().includes(e.target.value))

        setRecommendedPatients(newArray)
    }

    const selectPatient = (id: String, firstname: String) => {
        setSelectedPatient(id)
        setName(firstname)
        setRecommendedPatients([])
    }

    return (
        <Box sx={containerStyle}>
            {loading && <Loading />}
            <Box sx={{ width: '100%' }}>
                <TextField value={name} onChange={(e) => handleChange(e)} size='small'/>
                <Box sx={{ height: SmallDataGridHeight, marginTop: 3 }}>
                    {recommendedPatients && recommendedPatients.map((patient: PatientType, index: number) => {
                        return (
                            <Box key={index} sx={searchListStyle} onClick={() => selectPatient(patient._id, patient.firstname)}>
                                <Box sx={{ width: '20%' }}>{patient.firstname}</Box>
                                <Box sx={{ width: '20%' }}>{patient.lastname}</Box>
                                <Box sx={{ width: '20%' }}>{patient.registration_number}</Box>
                                <Box sx={{ width: '20%' }}>{patient.card_number}</Box>
                            </Box>
                        )
                    })}
                </Box>
            </Box>

            <PatientHistoryGrid id={selectedPatient}/>
        </Box>
    )
}