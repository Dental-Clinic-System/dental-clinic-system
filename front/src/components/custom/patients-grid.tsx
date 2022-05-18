import { useState, useEffect, useContext } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_PATIENTS, DELETE_PATIENT, UPDATE_PATIENT } from '../../graphql';
import { Loading } from '..';
import { Box, Button, TextField } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteModal } from '../common';
import { CustomInput } from './custom-input';
import { useNavigate } from 'react-router';
import { PatientContext } from '../../providers';

type PatientType = {
  _id: String;
  firstName: String;
  lastName: String;
  stateRegNumber: String;
  mobileNumber: String;
  email: String;
  gender: String;
  age: String;
  birthdate: String;
  cardNumber: String;
};

type PatientsGridType = {
  setOpenAdd: Function;
};

export const PatientsGrid: React.FC<PatientsGridType> = ({ setOpenAdd }) => {
  const navigate = useNavigate();
  const { loading, data } = useQuery(GET_PATIENTS);
  const { setContextPatient } = useContext(PatientContext);
  const [deletePatient] = useMutation(DELETE_PATIENT);
  const [updatePatient] = useMutation(UPDATE_PATIENT);
  const [open, setOpen] = useState(false);

  const clinicId = window.sessionStorage.getItem('clinicId');

  const [selectedPatient, setSelectedPatient] = useState<PatientType>();
  const [patients, setPatients] = useState(data?.getPatients);
  const [searchingName, setSearchingName] = useState('');

  useEffect(() => {
    setPatients(data?.getPatients);
  }, [data]);

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [age, setAge] = useState('');
  const [birth, setBirth] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [stateRegNumber, setStateRegNumber] = useState('');

  const DeletePatient = () => {
    let variables = {
      id: selectedPatient && selectedPatient._id
    };

    deletePatient({ variables: variables });
    setOpen(false);
  };

  const handleSearchChange = (e: any) => {
    setSearchingName(e.target.value);

    let newArray =
      data &&
      data.getPatients.filter((patient: PatientType) =>
        patient.firstName.toLowerCase().includes(e.target.value)
      );

    setPatients(newArray);
  };

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
    };

    updatePatient({ variables: variables });
    setOpen(false);
  };

  const editPatient = (row: PatientType) => {
    setSelectedPatient(row);
    setOpen(true);
  };

  const navigatePatientHistory = (val: any) => {
    setContextPatient(val.row);
    navigate(`/patient-history/${val.id}`);
  };

  const columns = [
    {
      field: 'Дэлгэрэнгүй',
      width: 100,
      renderCell: (cellValue: any) => {
        return (
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={() => navigatePatientHistory(cellValue)}
          >
            -
          </Button>
        );
      }
    },
    { field: 'firstName', headerName: 'Өвчтөний нэр', width: 150 },
    { field: 'lastName', headerName: 'Өвчтөний овог', width: 150 },
    { field: 'age', headerName: 'Нас', width: 70 },
    { field: 'birthdate', headerName: 'Төрсөн өдөр', width: 120 },
    { field: 'gender', headerName: 'Хүйс', width: 70 },
    { field: 'mobileNumber', headerName: 'Утасны дугаар', width: 120 },
    { field: 'email', headerName: 'Имэйл хаяг', width: 150 },
    { field: 'cardNumber', headerName: 'Картын дугаар', width: 150 },
    {
      field: 'Үйлдэл',
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
    }
  ];

  return (
    <Box>
      {loading && <Loading />}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          height: 60,
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <TextField
          value={searchingName}
          onChange={handleSearchChange}
          placeholder="Нэрээр хайх"
          size="small"
        />
        <Button
          onClick={() => setOpenAdd(true)}
          variant="outlined"
          size="small"
          sx={{ height: 40 }}
        >
          Өвчтөн нэмэх
        </Button>
      </Box>

      <DataGrid
        sx={{ height: 640, width: '100%' }}
        getRowId={(row) => row._id}
        rows={patients ? patients : []}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
      />

      <DeleteModal
        open={open}
        setOpen={setOpen}
        deleteButtonName="Устгах"
        deleteFunction={DeletePatient}
        fixButtonName="Засах"
        fixFunction={UpdatePatient}
      >
        <CustomInput
          value={firstname}
          setValue={setFirstname}
          placeholder={selectedPatient?.firstName}
        />
        <CustomInput
          value={lastname}
          setValue={setLastname}
          placeholder={selectedPatient?.lastName}
        />
        <CustomInput
          value={age}
          setValue={setAge}
          placeholder={selectedPatient?.age}
        />
        <CustomInput
          value={birth}
          setValue={setBirth}
          placeholder={selectedPatient?.birthdate}
        />
        <CustomInput
          value={gender}
          setValue={setGender}
          placeholder={selectedPatient?.gender}
        />
        <CustomInput
          value={phone}
          setValue={setPhone}
          placeholder={selectedPatient?.mobileNumber}
        />
        <CustomInput
          value={email}
          setValue={setEmail}
          placeholder={selectedPatient?.email}
        />
        <CustomInput
          value={cardNumber}
          setValue={setCardNumber}
          placeholder={selectedPatient?.cardNumber}
        />
        <CustomInput
          value={stateRegNumber}
          setValue={setStateRegNumber}
          placeholder={selectedPatient?.stateRegNumber}
        />
      </DeleteModal>
    </Box>
  );
};
