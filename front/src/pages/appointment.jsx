// graphql
import { useQuery } from '@apollo/client';
// scheduler
import {
  GroupingState,
  IntegratedGrouping,
  ViewState
} from '@devexpress/dx-react-scheduler';
import {
  Appointments,
  AppointmentTooltip,
  DateNavigator,
  DayView,
  GroupingPanel,
  Resources,
  Scheduler,
  Toolbar,
  ViewSwitcher,
  WeekView
} from '@devexpress/dx-react-scheduler-material-ui';
// mui
import { Edit } from '@mui/icons-material';
import { Button, IconButton, Paper } from '@mui/material';
import { useEffect, useState } from 'react';
import { AddAppointmentForm, CreateModal } from '../components/index';
import { GetAppointments, GET_STAFFS, GET_PATIENTS } from '../graphql/queries';
import { APPOINTMENT } from '../helper/constants';

export const Appointment = () => {
  const [appointments, setAppointments] = useState([{}]);
  const { data } = useQuery(GetAppointments, {
    variables: { clinicId: '625fca30c1cf951c042bd5ec' }
  });
  const { data: sData } = useQuery(GET_STAFFS, {
    variables: { type: 'doctor', clinicId: sessionStorage.getItem('clinicId') }
  });
  const { data: pData } = useQuery(GET_PATIENTS);
  const [doctors, setDoctors] = useState([{}]);
  const [patients, setPatients] = useState([{}]);
  const [tooltip, setTooltip] = useState(false);
  const [open, setOpen] = useState(false);

  const formatStaff = async () => {
    let tempDoctor = [];

    setDoctors([{}]);

    if (sData) {
      await sData?.getStaffs?.map((e, i) => {
        let temp = {
          text: `${e.first_name} ${e.last_name}`,
          id: e._id,
          staffId: e._id,
          clinicId: sessionStorage.getItem('clinicId')
        };
        tempDoctor.push(temp);
      });
      (await tempDoctor) && setDoctors(tempDoctor);
    }
  };

  useEffect(() => {
    let formattedData = [];
    let tempPatient = [];

    if (data) {
      data.getAppointments?.map((e, i) => {
        let temp = {
          ...e,
          startDate: new Date(e.startDate),
          endDate: new Date(e.endDate),
          id: e._id
        };
        formattedData.push(temp);
      });
      setAppointments(formattedData);
    }

    if (pData) {
      pData.getPatients?.map((e, i) => {
        let temp = {
          ...e,
          id: e._id,
          text: e.lastName + ' ' + e.firstName
        };

        tempPatient.push(temp);
      });
      console.log(tempPatient);
      setPatients(tempPatient);
    }

    formatStaff();
  }, [data, sData, pData]);

  useEffect(() => {
    document.title = APPOINTMENT;
  }, []);

  const Header = ({ children, appointmentData, ...other }) => {
    const [hOpen, setHOpen] = useState(false);

    const setHOpenAndTooltip = (bool) => {
      setHOpen(bool);
      setTooltip(bool);
    };

    return (
      <AppointmentTooltip.Header {...other} appointmentData={appointmentData}>
        <IconButton
          onClick={() => {
            setHOpen(true);
          }}
          sx={{ padding: '12px' }}
        >
          <Edit />
        </IconButton>

        <CreateModal
          open={hOpen}
          setOpen={setHOpen}
          addButtonName="Edit"
          showButton={false}
        >
          <AddAppointmentForm
            patients={patients}
            setData={setAppointments}
            staffs={doctors}
            showDelete
            buttonLabel="change"
            data={appointmentData}
            setOpen={setHOpenAndTooltip}
          />
        </CreateModal>
      </AppointmentTooltip.Header>
    );
  };

  if (!data && !sData) {
    return <div>Loading</div>;
  }

  return (
    <>
      <Button variant="outlined" onClick={() => setOpen(true)}>
        Цаг авах
      </Button>
      <CreateModal
        open={open}
        setOpen={setOpen}
        addButtonName="Edit"
        showButton={false}
      >
        <AddAppointmentForm
          patients={patients}
          staffs={doctors}
          buttonLabel="add"
          setOpen={setOpen}
        />
      </CreateModal>
      <Paper style={{ textAlign: 'center', zIndex: '100' }}>
        <Scheduler data={appointments}>
          <ViewState CurrentDate="2022-04-27" defaultCurrentViewName="Week" />

          <GroupingState
            grouping={[
              {
                resourceName: 'staffId'
              }
            ]}
          />

          <WeekView
            displayName="Долоо хоног"
            startDayHour={8}
            endDayHour={18}
          />
          <DayView displayName="Өдөр" startDayHour={8} endDayHour={18} />
          <Appointments />
          <Resources
            data={[
              {
                fieldName: 'staffId',
                title: 'Doctor',
                instances: doctors
                  ? doctors
                  : [{ text: 'Doctor', id: 'doctor' }]
              }
            ]}
            mainResourceName="staffId"
          />

          <IntegratedGrouping />
          <AppointmentTooltip
            visible={tooltip}
            onVisibilityChange={(e) => setTooltip(e)}
            headerComponent={Header}
            showCloseButton
          />

          <Toolbar />
          <ViewSwitcher />
          <DateNavigator />
          <GroupingPanel />
        </Scheduler>
      </Paper>
    </>
  );
};
