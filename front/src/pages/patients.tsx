import { useState } from "react";
import { Box, Button } from '@mui/material';
import { PatientsGrid, CreateModal, CustomInput } from '../components/index'
import { ADD_PATIENT } from "../graphql";
import { useMutation } from "@apollo/client";

export const PatientScreen = () => {
    const [addPatient] = useMutation(ADD_PATIENT)
    const clinicId = window.sessionStorage.getItem("clinicId")

    const [openAdd, setOpenAdd] = useState(false)

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

    return (
        <Box>
            <Button onClick={() => setOpenAdd(true)} variant='outlined'>Өвчтөн нэмэх</Button>

            <PatientsGrid/>

            <CreateModal open={openAdd} setOpen={setOpenAdd} createFunction={AddPatient} addButtonName={'Өвчтөн нэмэх'}>
                <CustomInput value={firstname} setValue={setFirstname} placeholder={'Нэр'} />
                <CustomInput value={lastname} setValue={setLastname} placeholder={'Овог'} />
                <CustomInput value={age} setValue={setAge} placeholder={'Нас'} />
                <CustomInput value={birth} setValue={setBirth} placeholder={'Төрсөн өдөр'} />
                <CustomInput value={gender} setValue={setGender} placeholder={'Хүйс'} />
                <CustomInput value={phone} setValue={setPhone} placeholder={'Утасны дугаар'} />
                <CustomInput value={email} setValue={setEmail} placeholder={'и-майл'} />
                <CustomInput value={cardNumber} setValue={setCardNumber} placeholder={'Кардын дугаар'} />
                <CustomInput value={stateRegNumber} setValue={setStateRegNumber} placeholder={'Дүүргийн гегистерийн дугаар'} />
            </CreateModal>
        </Box>
    );
}