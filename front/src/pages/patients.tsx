import { useState } from "react";
import { Box, Button } from '@mui/material';
import { PatientsGrid, CreateModal, AddPatientInput, DeleteModal } from '../components/index'
import { ADD_PATIENTS, DELETE_PATIENT } from "../graphql";
import { useMutation } from "@apollo/client";

export const PatientScreen = () => {
    const [addPatient] = useMutation(ADD_PATIENTS)
    const [deletePatient] = useMutation(DELETE_PATIENT)

    const [selectedPatient, setSelectedPatient] = useState([])

    const [openAdd, setOpenAdd] = useState(false)
    const [openDelete, setOpenDelete] = useState(false)
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [age, setAge] = useState('')
    const [birth, setBirth] = useState('')
    const [registrationNumber, setRegistrationNumber] = useState('')
    const [sex, setSex] = useState('')
    const [addressDescription, setAddressDescription] = useState('')
    const [phone, setPhone] = useState('')
    const [homePhone, setHomePhone] = useState('')
    const [email, setEmail] = useState('')
    const [doctor, setDoctor] = useState('')
    const [cardNumber, setCardNumber] = useState('')

    const clear = () => {
        setFirstname('')
        setLastname('')
        setAge('')
        setBirth('')
        setRegistrationNumber('')
        setSex('')
        setAddressDescription('')
        setPhone('')
        setHomePhone('')
        setEmail('')
        setDoctor('')
        setCardNumber('')
        setOpenAdd(false)
    }

    const AddPatient = () => {
        let variables = {
            firstname: firstname,
            lastname: lastname,
            age: age,
            birth: birth,
            registration_number: registrationNumber,
            sex: sex,
            address_description: addressDescription,
            phone: phone,
            home_phone: homePhone,
            email: email,
            doctor: doctor,
            card_number: cardNumber,
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
                <AddPatientInput value={registrationNumber} setValue={setRegistrationNumber} placeholder={'Регистер'} />
                <AddPatientInput value={sex} setValue={setSex} placeholder={'Хүйс'} />
                <AddPatientInput value={addressDescription} setValue={setAddressDescription} placeholder={'Хаяг'} />
                <AddPatientInput value={phone} setValue={setPhone} placeholder={'Утасны дугаар'} />
                <AddPatientInput value={homePhone} setValue={setHomePhone} placeholder={'Гэрийн утасны дугаар'} />
                <AddPatientInput value={email} setValue={setEmail} placeholder={'и-майл'} />
                <AddPatientInput value={doctor} setValue={setDoctor} placeholder={'Эмч'} />
                <AddPatientInput value={cardNumber} setValue={setCardNumber} placeholder={'Кардын дугаар'} />
            </CreateModal>

            <DeleteModal open={openDelete} setOpen={setOpenDelete} deleteButtonName={'устгах'} deleteFunction={DeletePatient}></DeleteModal>
        </Box>
    );
}