import { useMutation, useQuery } from '@apollo/client';
import {
  Box,
  Button,
  FormControl,
  Select,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead
} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Loading, PatientHistoryGrid } from '../components';
import { DefaultModal } from '../components/common';
import DentalChart from '../components/custom/dentalChart';
import {
  ADD_PATIENT_HISTORY,
  GetAppointments,
  GET_PATIENT,
  GET_PATIENTS_BRIEFLY,
  GET_SERVICES
} from '../graphql';
import {
  PATIENT_FORM,
  PATIENT_HISTORY,
  SmallDataGridHeight
} from '../helper/constants';
import { PatientContext } from '../providers';
import {
  containerStyle,
  innerContainterStyle,
  patientInfoStyle,
  searchListStyle,
  searchModalCellStyle,
  searchModalStyle,
  searchPatientStyle,
  textFormCellStyle,
  textStyle
} from '../styles/patient-history-style';

type PatientType = {
  cardNumber: string;
  firstName: string;
  lastName: string;
  _id: string;
};

export const PatientHistoryScreen = () => {
  const navigate = useNavigate();
  const { contextPatient, setContextPatient } = useContext(PatientContext);
  const { id = '' } = useParams();
  const clinicId = window.sessionStorage.getItem('clinicId');
  const [toothId, setToothId] = useState('');
  const [AddHistory] = useMutation(ADD_PATIENT_HISTORY);
  const { data: GetAppointmentsData } = useQuery(GetAppointments, {
    variables: {
      clinicId: clinicId,
      patientId: id
    }
  });
  const { data: patientData } = useQuery(GET_PATIENT, {
    variables: {
      id: id
    }
  });

  const { data, loading } = useQuery(GET_PATIENTS_BRIEFLY, {
    variables: {
      clinicId: clinicId
    }
  });

  const { data: services } = useQuery(GET_SERVICES, {
    variables: {
      clinicId: clinicId
    }
  });

  const ToothHandler = (event: any) => {
    console.log(event);
    let element = event.path[0];
    setToothId(element.id);
  };
  console.log('services:', services);
  useEffect(() => {
    patientData && setContextPatient(patientData?.getPatient);
  }, [patientData]);

  useEffect(() => {
    const toothsArray: any = document.getElementsByClassName('Tooth');
    for (const ToothSide of toothsArray) {
      ToothSide.onclick = (event: any) => ToothHandler(event);
    }
  }, []);

  useEffect(() => {
    document.title = PATIENT_HISTORY;
  }, []);

  const {
    firstName,
    lastName,
    age,
    birthdate,
    cardNumber,
    email,
    gender,
    mobileNumber,
    registrationNumber
  } = contextPatient;

  const [recommendedPatients, setRecommendedPatients] = useState<PatientType[]>(
    []
  );
  const [name, setName] = useState<string>(firstName);
  const [searchingName, setSearchingName] = useState<string>(firstName);
  const [open, setOpen] = useState<boolean>(false);
  const [selectedPatient, setSelectedPatient] = useState<string>(id);
  const [note, setNote] = useState<string>('');
  const [appointmentID, setAppointmentID] = useState<string>('');
  const [serviceID, setServiceID] = useState<String>('');
  const handleChange = (e: any) => {
    setSearchingName(e.target.value);

    let newArray =
      data &&
      data.getPatients.filter((patient: PatientType) =>
        patient.firstName.toLowerCase().includes(e.target.value)
      );

    setRecommendedPatients(newArray);
  };

  const selectPatient = (id: string, firstname: string) => {
    setSelectedPatient(id);
    setName(firstname);
    setSearchingName(firstname);
    setOpen(false);
    setRecommendedPatients([]);
    navigate(`/patient-history/${id}`);
  };

  const addHistory = async () => {
    if (toothId && note && appointmentID && serviceID) {
      const resp = await AddHistory({
        variables: {
          patientId: id,
          clinicId: clinicId,
          appointmentId: appointmentID,
          serviceId: serviceID,
          note: note,
          toReport: 'true',
          status: 'pending',
          toothId: toothId
        }
      });
      if (resp?.data) {
        alert('Success');
        setToothId('');
        setNote('');
      } else {
        alert(resp?.errors);
        console.log(resp?.errors);
      }
    } else {
      alert('fill required field !');
    }
  };

  const createRowData = (name: string, field: string) => {
    return { name, field };
  };

  const rows = [
    createRowData(PATIENT_FORM.firstName.name, firstName),
    createRowData(PATIENT_FORM.lastName.name, lastName),
    createRowData(PATIENT_FORM.age.name, age),
    createRowData(PATIENT_FORM.birthdate.name, birthdate),
    createRowData(PATIENT_FORM.cardNumber.name, cardNumber),
    createRowData(PATIENT_FORM.email.name, email),
    createRowData(PATIENT_FORM.gender.name, gender),
    createRowData(PATIENT_FORM.mobileNumber.name, mobileNumber),
    createRowData(PATIENT_FORM.registrationNumber.name, registrationNumber)
  ];

  return (
    <Box sx={containerStyle}>
      {loading && <Loading />}
      <Box sx={innerContainterStyle}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <TextField
            size="small"
            placeholder={name}
            onClick={() => setOpen(true)}
            InputProps={{
              readOnly: true
            }}
            sx={searchPatientStyle}
          />
          <Box sx={patientInfoStyle}>
            <Table>
              <TableHead>
                <TableCell>Өвчтөний талаар</TableCell>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.field}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </Box>
        <DefaultModal
          open={open}
          setOpen={setOpen}
          sx={{
            width: 500,
            height: 500
          }}
        >
          <TextField
            value={searchingName}
            onChange={(e) => handleChange(e)}
            size="small"
          />
          <Box sx={{ height: SmallDataGridHeight, marginTop: 3 }}>
            <Box sx={searchModalStyle}>
              <Box sx={searchModalCellStyle}>Нэр</Box>
              <Box sx={searchModalCellStyle}>Овог</Box>
              <Box sx={searchModalCellStyle}>Кардны дугаар</Box>
            </Box>
            {recommendedPatients &&
              recommendedPatients.map((patient: PatientType, index: number) => {
                return (
                  <Box
                    key={index}
                    sx={searchListStyle}
                    onClick={() =>
                      selectPatient(patient._id, patient.firstName)
                    }
                  >
                    <Box sx={searchModalCellStyle}>{patient.firstName}</Box>
                    <Box sx={searchModalCellStyle}>{patient.lastName}</Box>
                    <Box sx={searchModalCellStyle}>{patient.cardNumber}</Box>
                  </Box>
                );
              })}
          </Box>
        </DefaultModal>
        <Box>
          <DentalChart />
          <Box sx={innerContainterStyle}>
            <Box
              sx={{ display: 'flex', flexDirection: 'column', height: '400px' }}
            >
              <Box sx={patientInfoStyle}>
                <Box sx={textFormCellStyle}>
                  <Box sx={textStyle}>ToothId:</Box>
                  <TextField
                    disabled
                    size="small"
                    placeholder={'Tooth ID'}
                    value={toothId}
                  />
                </Box>
                <Box sx={textFormCellStyle}>
                  <Box sx={textStyle}>Note</Box>
                  <TextField
                    size="small"
                    onChange={(e) => setNote(e.target.value)}
                    value={note}
                    placeholder={'Note'}
                  />
                </Box>
                <Box sx={textFormCellStyle}>
                  <Box sx={textStyle}>service:</Box>
                  <FormControl sx={{ width: '195px' }}>
                    <InputLabel id="demo-simple-select-helper-label">
                      Service
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={age}
                      label="Age"
                      onChange={(e) => setServiceID(e.target.value)}
                    >
                      {services?.getServices?.map((service: any) => {
                        return (
                          <MenuItem value={service._id}>
                            {service.serviceName}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Box>
                <Box sx={textFormCellStyle}>
                  <Box sx={textStyle}>appointment:</Box>
                  <FormControl sx={{ width: '195px' }}>
                    <InputLabel id="demo-simple-select-helper-label">
                      Time
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={age}
                      label="Age"
                      onChange={(e) => setAppointmentID(e.target.value)}
                    >
                      {GetAppointmentsData?.getAppointments.map(
                        (appointment: any) => {
                          return (
                            <MenuItem value={appointment._id}>
                              {appointment.title}
                            </MenuItem>
                          );
                        }
                      )}
                    </Select>
                  </FormControl>
                </Box>
                <Button onClick={addHistory}>ADD History</Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <PatientHistoryGrid id={selectedPatient} />
    </Box>
  );
};
