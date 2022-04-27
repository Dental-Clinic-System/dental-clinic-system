import { useQuery, useMutation } from "@apollo/client";
// import "./styles.css";
import {
  EditingState, GroupingState, IntegratedEditing, IntegratedGrouping, ViewState
} from "@devexpress/dx-react-scheduler";
import {
  AppointmentForm, Appointments,
  AppointmentTooltip, ConfirmationDialog, DateNavigator, DayView, GroupingPanel,
  Resources, Scheduler, Toolbar, ViewSwitcher, WeekView
} from "@devexpress/dx-react-scheduler-material-ui";
import { Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { GetAppointments, GET_STAFFS } from "../graphql/queries";
import { UPDATE_APPOINTMENT } from '../graphql/mutations'

export const Appointment = () => {
  const [appointments, setAppointments] = useState([{}]);
  const { loading, error, data } = useQuery(GetAppointments, { variables: { clinicId: "625fca30c1cf951c042bd5ec" } });
  const { loading: sLoading, error: sError, data: sData } = useQuery(GET_STAFFS, { variables: { type: 'doctor', clinicId: sessionStorage.getItem('clinicId') } });
  const [UpdateAppointment] = useMutation(UPDATE_APPOINTMENT)
  const [doctors, setDoctors] = useState([{}]);
  const [patients, setPatients] = useState([{}])

  const formatStaff = async () => {
    let tempDoctor = [];

    setDoctors([{}]);

    if (sData) {
      await sData?.getStaffs?.map((e, i) => {
        let temp = {
          text: `${e.first_name} ${e.last_name}`,
          id: e._id,
          doctorId: e._id,
          clinicId: sessionStorage.getItem('clinicId')
        }
        tempDoctor.push(temp)
        console.log('TEMP DOCTOR: ', temp)
      })
      await tempDoctor && setDoctors(tempDoctor)
      console.log('asdf ', doctors, sData);
    }
  }

  useEffect(() => {
    let formattedData = [];
    let tempPatient = [];

    if (data) {
      console.log('assdfsfsf')
      data.getAppointments?.map((e, i) => {
        let temp = {
          ...e,
          startDate: new Date(e.startDate),
          endDate: new Date(e.endDate),
          id: e._id,
          doctorId: e.staffId
        }
        formattedData.push(temp)

        tempPatient.push({ id: e.patientId, doctor: e.staffId, text: e.patientId })
      })
      setPatients(tempPatient)
      setAppointments(formattedData)
      console.log('data', formattedData)
    }

    formatStaff()
  }, [data, sData])

  const crud = ({ added, changed, deleted }) => {
    setAppointments((data) => {
      let tempdata = data;

      if (added) {
        const startingAddedId = tempdata.length > 0 ? tempdata[tempdata.length - 1].id + 1 : 0;
        tempdata = [...tempdata, { id: startingAddedId, ...added }];
        console.log(added);
      }

      if (changed) {
        tempdata = tempdata.map((appointment) => {
          if (changed[appointment.id]) {
            console.log(changed[appointment.id])
            UpdateAppointment({ variables: { ...changed[appointment.id], id: appointment.id } })
            return { ...appointment, ...changed[appointment.id] }
          } else {
            return appointment
          }
        });
      }

      if (deleted) {
        tempdata = tempdata.filter((appointment) => {
          return appointment.id !== deleted;
        });
      }

      console.log(tempdata);

      return tempdata;
    });
  };

  if (!data && !sData) {
    return <div>"loading"</div>
  }
  return (
    <>
      <Paper style={{ textAlign: "center" }}>
        <Scheduler data={appointments}>
          <ViewState CurrentDate="2022-04-27" defaultCurrentViewName="Week" />
          <EditingState onCommitChanges={crud} />

          <GroupingState
            grouping={[
              {
                resourceName: "doctorId",
              },
            ]}
          />
          <IntegratedEditing />

          <WeekView startDayHour={9} />
          <DayView startDayHour={9} />
          <Appointments />
          <Resources
            data={[
              {
                fieldName: "doctorId",
                title: "Doctor",
                instances: doctors ? doctors : [{ text: 'Doctor', id: 'doctor' }],
              },
              {
                instances: patients ? patients : [{ text: 'Patient', id: 'patient' }],
                fieldName: 'patientId',
                title: 'Patient'
              }
            ]}
            mainResourceName="doctorId"
          />

          <IntegratedGrouping />
          <AppointmentTooltip showDeleteButton showOpenButton />
          <AppointmentForm />

          <Toolbar />
          <ViewSwitcher />
          <DateNavigator />
          <ConfirmationDialog />
          <GroupingPanel />
        </Scheduler>
      </Paper>
    </>
  );
};