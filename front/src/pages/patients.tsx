import { useState } from "react";
import { Box, Button } from '@mui/material';
import { PatientsGrid, CreateModal, AddPatientInput, DeleteModal } from '../components/index'
import { ADD_PATIENT, DELETE_PATIENT } from "../graphql";
import { useMutation } from "@apollo/client";

export const PatientScreen = () => {
    const [addPatient] = useMutation(ADD_PATIENT)
    const [deletePatient] = useMutation(DELETE_PATIENT)
    const clinicId = window.sessionStorage.getItem("clinicId")

    const [selectedPatient, setSelectedPatient] = useState([])

    const [openAdd, setOpenAdd] = useState(false)
    const [openDelete, setOpenDelete] = useState(false)

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [age, setAge] = useState('')
    const [birth, setBirth] = useState('')
    const [gender, setGender] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [stateRegNumber, setStateRegNumber] = useState('')

    const clear = () => {
        setFirstname('')
        setLastname('')
        setAge('')
        setBirth('')
        setGender('')
        setPhone('')
        setEmail('')
        setCardNumber('')
        setStateRegNumber('')
        setOpenAdd(false)
    }

    const AddPatient = () => {
        let variables = {
            clinicId: clinicId,
            firstName: firstname,
            lastName: lastname,
            stateRegNumber: stateRegNumber,
            mobileNumber: phone,
            email: email,
            gender: gender,
            age: age,
            birthdate: birth,
            cardNumber: cardNumber
        }

        addPatient({ variables: variables })
        clear()
    }

    const DeletePatient = () => {
        let variables = {
            id: selectedPatient[0]
        }

        deletePatient({ variables: variables })
        setOpenDelete(false)
    }

    return (
        <Box>
            <Button onClick={() => setOpenAdd(true)} variant='outlined'>Өвчтөн нэмэх</Button>
            <Button onClick={() => setOpenDelete(true)} variant='outlined' color='error'>Өвчтөн хасах</Button>

            <PatientsGrid setSelectedPatient={setSelectedPatient} />

            <CreateModal open={openAdd} setOpen={setOpenAdd} createFunction={AddPatient} addButtonName={'Өвчтөн нэмэх'}>
                <AddPatientInput value={firstname} setValue={setFirstname} placeholder={'Нэр'} />
                <AddPatientInput value={lastname} setValue={setLastname} placeholder={'Овог'} />
                <AddPatientInput value={age} setValue={setAge} placeholder={'Нас'} />
                <AddPatientInput value={birth} setValue={setBirth} placeholder={'Төрсөн өдөр'} />
                <AddPatientInput value={gender} setValue={setGender} placeholder={'Хүйс'} />
                <AddPatientInput value={phone} setValue={setPhone} placeholder={'Утасны дугаар'} />
                <AddPatientInput value={email} setValue={setEmail} placeholder={'и-майл'} />
                <AddPatientInput value={cardNumber} setValue={setCardNumber} placeholder={'Кардын дугаар'} />
                <AddPatientInput value={stateRegNumber} setValue={setStateRegNumber} placeholder={'Дүүргийн гегистерийн дугаар'} />
            </CreateModal>

            <DeleteModal open={openDelete} setOpen={setOpenDelete} deleteButtonName={'устгах'} deleteFunction={DeletePatient}></DeleteModal>
        </Box>
    );
}