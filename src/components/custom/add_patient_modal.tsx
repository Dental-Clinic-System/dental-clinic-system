import { Box, Modal, Button } from '@mui/material'
import { AddPatientInput } from './add_patient_input';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_PATIENTS } from '../../graphql';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    boxShadow: 24,
    p: 4,
    borderRadius: 3,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
};

type AddPatientModalType = {
    open: boolean;
    setOpen: Function;
}

export const AddPatientModal: React.FC<AddPatientModalType> = ({ open, setOpen }) => {
    const handleClose = () => setOpen(false);
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
    const [addPatient] = useMutation(ADD_PATIENTS)

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
        setOpen(false)
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

    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box sx={style}>
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
                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-around'
                }}>
                    <Button onClick={handleClose} variant='outlined' color='error'>Буцах</Button>
                    <Button onClick={() => AddPatient()} variant='outlined'>Өвчтөнг нэмэх</Button>
                </Box>
            </Box>

        </Modal>
    );
}
