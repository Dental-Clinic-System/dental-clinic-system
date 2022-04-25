import { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_PATIENTS, DELETE_PATIENT, UPDATE_PATIENT } from "../../graphql";
import { Loading } from "..";
import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteModal } from '../common'
import { CustomInput } from './custom-input';

type PatientType = {
  _id: String
  firstName: String
  lastName: String
  stateRegNumber: String
  mobileNumber: String
  email: String
  gender: String
  age: String
  birthdate: String
  cardNumber: String
}

export const PatientsGrid = () => {
  const { loading, data } = useQuery(GET_PATIENTS)
  const [deletePatient] = useMutation(DELETE_PATIENT)
  const [updatePatient] = useMutation(UPDATE_PATIENT)
  const [open, setOpen] = useState(false)
  const clinicId = window.sessionStorage.getItem("clinicId")
  const [selectedPatient, setSelectedPatient] = useState<PatientType>()

  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [age, setAge] = useState('')
  const [birth, setBirth] = useState('')
  const [gender, setGender] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [stateRegNumber, setStateRegNumber] = useState('')

  const DeletePatient = () => {
    let variables = {
      id: selectedPatient && selectedPatient._id
    }

    deletePatient({ variables: variables })
    setOpen(false)
  }

  const UpdatePatient = () => {
    let variables = {
      id: selectedPatient?._id,
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

    updatePatient({ variables: variables })
    setOpen(false)
  }

  const editPatient = (row: PatientType) => {
    setSelectedPatient(row)
    setOpen(true)
  }

  const columns = [
    { field: 'firstName', headerName: 'Өвчтөний нэр', width: 150 },
    { field: 'lastName', headerName: 'Өвчтөний Овог', width: 150 },
    { field: 'age', headerName: 'Нас', width: 70 },
    { field: 'birthdate', headerName: 'Төрсөн өдөр', width: 70 },
    { field: 'gender', headerName: 'Хүйс', width: 70 },
    { field: 'mobileNumber', headerName: 'Утасны дугаар', width: 120 },
    {
      field: "Засах",
      renderCell: (cellValue: any) => {
        return (
          <Button
            variant="contained"
            color="primary"
            onClick={() => editPatient(cellValue.row)}
          >
            Өөрчлөх
          </Button>
        );
      },
      width: 120
    },
    { field: 'email', headerName: 'Имэйл хаяг', width: 150 },
    { field: 'cardNumber', headerName: 'Картын дугаар', width: 150 },
  ];

  return (
    <Box>
      {loading && <Loading />}
      <DataGrid
        sx={{ height: 640, width: '80vw' }}
        getRowId={(row) => row._id}
        rows={data ? data.getPatients : []}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
      />

      <DeleteModal
        open={open}
        setOpen={setOpen}
        deleteButtonName='Устгах'
        deleteFunction={DeletePatient}
        fixButtonName='Засах'
        fixFunction={UpdatePatient}
      >
        <CustomInput value={firstname} setValue={setFirstname} placeholder={selectedPatient?.firstName} />
        <CustomInput value={lastname} setValue={setLastname} placeholder={selectedPatient?.lastName} />
        <CustomInput value={age} setValue={setAge} placeholder={selectedPatient?.age} />
        <CustomInput value={birth} setValue={setBirth} placeholder={selectedPatient?.birthdate} />
        <CustomInput value={gender} setValue={setGender} placeholder={selectedPatient?.gender} />
        <CustomInput value={phone} setValue={setPhone} placeholder={selectedPatient?.mobileNumber} />
        <CustomInput value={email} setValue={setEmail} placeholder={selectedPatient?.email} />
        <CustomInput value={cardNumber} setValue={setCardNumber} placeholder={selectedPatient?.cardNumber} />
        <CustomInput value={stateRegNumber} setValue={setStateRegNumber} placeholder={selectedPatient?.stateRegNumber} />
      </DeleteModal>
    </Box>
  );
}
