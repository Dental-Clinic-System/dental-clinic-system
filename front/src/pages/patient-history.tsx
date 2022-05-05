import { useState, useContext, useEffect } from 'react'
import { Loading, PatientHistoryGrid } from "../components"
import { useParams } from 'react-router'
import { Box, TextField } from '@mui/material'
import { useQuery } from '@apollo/client'
import { GET_PATIENTS_BRIEFLY, GET_PATIENT } from '../graphql'
import { SmallDataGridHeight } from '../helper/constants'
import DentalChart from '../components/custom/dentalChart'
import { DefaultModal } from '../components/common'
import { PatientContext } from '../providers'
import { PATIENT_FORM } from '../helper/constants'
import { useNavigate } from "react-router"
import {
    containerStyle,
    searchListStyle,
    textStyle,
    textFormCellStyle,
    patientInfoStyle,
    innerContainterStyle,
    searchModalStyle,
    searchModalCellStyle,
    searchPatientStyle
} from '../styles/patient-history-style'

type PatientType = {
    cardNumber: string;
    firstName: string;
    lastName: string;
    _id: string;
}

export const PatientHistoryScreen = () => {
    const navigate = useNavigate();
    const { contextPatient, setContextPatient } = useContext(PatientContext)
    const { id = '' } = useParams();
    const clinicId = window.sessionStorage.getItem("clinicId")

    const { data: patientData } = useQuery(GET_PATIENT, {
        variables: {
            id: id
        }
    })

    const { data, loading } = useQuery(GET_PATIENTS_BRIEFLY, {
        variables: {
            clinicId: clinicId
        }
    })

    useEffect(() => {
        patientData && setContextPatient(patientData?.getPatient)
    }, [patientData])

    const { firstName, lastName, age, birthdate, cardNumber, email, gender, mobileNumber, registrationNumber } = contextPatient;

    const [recommendedPatients, setRecommendedPatients] = useState<PatientType[]>([])
    const [name, setName] = useState<string>(firstName)
    const [searchingName, setSearchingName] = useState<string>(firstName)
    const [open, setOpen] = useState<boolean>(false)
    const [selectedPatient, setSelectedPatient] = useState<string>(id)

    const handleChange = (e: any) => {
        setSearchingName(e.target.value);

        let newArray = data && data.getPatients.filter((patient: PatientType) => patient.firstName.toLowerCase().includes(e.target.value))

        setRecommendedPatients(newArray)
    }

    const selectPatient = (id: string, firstname: string) => {
        setSelectedPatient(id)
        setName(firstname)
        setSearchingName(firstname)
        setOpen(false)
        setRecommendedPatients([])
        navigate(`/patient-history/${id}`)
    }

    return (
        <Box sx={containerStyle}>
            {loading && <Loading />}
            <Box sx={innerContainterStyle}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <TextField size='small'
                        placeholder={name}
                        onClick={() => setOpen(true)}
                        InputProps={{
                            readOnly: true,
                        }}
                        sx={searchPatientStyle}
                    />
                    <Box sx={patientInfoStyle}>
                        <Box sx={textFormCellStyle}>
                            <Box sx={textStyle}>{PATIENT_FORM.firstName.name}:</Box>
                            <TextField size='small' placeholder={firstName} InputProps={{ readOnly: true }} />
                        </Box>
                        <Box sx={textFormCellStyle}>
                            <Box sx={textStyle}>{PATIENT_FORM.lastName.name}:</Box>
                            <TextField size='small' placeholder={lastName} InputProps={{ readOnly: true }} />
                        </Box>
                        <Box sx={textFormCellStyle}>
                            <Box sx={textStyle}>{PATIENT_FORM.age.name}:</Box>
                            <TextField size='small' placeholder={age} InputProps={{ readOnly: true }} />
                        </Box>
                        <Box sx={textFormCellStyle}>
                            <Box sx={textStyle}>{PATIENT_FORM.gender.name}:</Box>
                            <TextField size='small' placeholder={gender} InputProps={{ readOnly: true }} />
                        </Box>
                        <Box sx={textFormCellStyle}>
                            <Box sx={textStyle}>{PATIENT_FORM.email.name}:</Box>
                            <TextField size='small' placeholder={email} InputProps={{ readOnly: true }} />
                        </Box>
                        <Box sx={textFormCellStyle}>
                            <Box sx={textStyle}>{PATIENT_FORM.cardNumber.name}:</Box>
                            <TextField size='small' placeholder={cardNumber} InputProps={{ readOnly: true }} />
                        </Box>
                        <Box sx={textFormCellStyle}>
                            <Box sx={textStyle}>{PATIENT_FORM.mobileNumber.name}:</Box>
                            <TextField size='small' placeholder={mobileNumber} InputProps={{ readOnly: true }} />
                        </Box>
                        <Box sx={textFormCellStyle}>
                            <Box sx={textStyle}>{PATIENT_FORM.registrationNumber.name}:</Box>
                            <TextField size='small' placeholder={registrationNumber} InputProps={{ readOnly: true }} />
                        </Box>
                        <Box sx={textFormCellStyle}>
                            <Box sx={textStyle}>{PATIENT_FORM.birthdate.name}:</Box>
                            <TextField size='small' placeholder={birthdate} InputProps={{ readOnly: true }} />
                        </Box>
                    </Box>
                </Box>
                <DefaultModal open={open} setOpen={setOpen} sx={{
                    width: 500,
                    height: 500,
                }}>
                    <TextField value={searchingName} onChange={(e) => handleChange(e)} size='small' />
                    <Box sx={{ height: SmallDataGridHeight, marginTop: 3 }}>
                        <Box sx={searchModalStyle}>
                            <Box sx={searchModalCellStyle}>Нэр</Box>
                            <Box sx={searchModalCellStyle}>Овог</Box>
                            <Box sx={searchModalCellStyle}>Кардны дугаар</Box>
                        </Box>
                        {recommendedPatients && recommendedPatients.map((patient: PatientType, index: number) => {
                            return (
                                <Box key={index} sx={searchListStyle} onClick={() => selectPatient(patient._id, patient.firstName)}>
                                    <Box sx={searchModalCellStyle}>{patient.firstName}</Box>
                                    <Box sx={searchModalCellStyle}>{patient.lastName}</Box>
                                    <Box sx={searchModalCellStyle}>{patient.cardNumber}</Box>
                                </Box>
                            )
                        })}
                    </Box>
                </DefaultModal>
                <DentalChart />
            </Box>

            <PatientHistoryGrid id={selectedPatient} />
        </Box >
    )
}