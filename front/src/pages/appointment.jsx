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
import { UPDATE_APPOINTMENT, DELETE_APPOINTMENT, ADD_APPOINTMENT } from '../graphql/mutations'

export const Appointment = () => {
  const [appointments, setAppointments] = useState([{}]);
  const { loading, error, data } = useQuery(GetAppointments, { variables: { clinicId: "625fca30c1cf951c042bd5ec" } });
  const { loading: sLoading, error: sError, data: sData } = useQuery(GET_STAFFS, { variables: { type: 'doctor', clinicId: sessionStorage.getItem('clinicId') } });
  const [UpdateAppointment] = useMutation(UPDATE_APPOINTMENT)
  const [AddAppointment] = useMutation(ADD_APPOINTMENT)
  const [DeleteAppointment] = useMutation(DELETE_APPOINTMENT)
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
          staffId: e._id,
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
        }
        formattedData.push(temp)

        if (!tempPatient.includes({id: e.patientId, text: e.patientId})) {
          tempPatient.push({ id: e.patientId, text: e.patientId })
        }
      })
      setPatients(tempPatient)
      setAppointments(formattedData)
      console.log('data', formattedData)
    }

    formatStaff()
  }, [data, sData])

  const add = async (added) => {
    let formattedData = {
      ...added,
      clinicId: "625fca30c1cf951c042bd5ec",
      status: "active",
      serviceId: ""
    }
    delete formattedData.allDay;

    await AddAppointment({ variables: formattedData })
    window.location.reload()
  }

  const crud = ({ changed, deleted }) => {
    setAppointments((data) => {
      let tempdata = data;

      if (changed) {
        tempdata = tempdata.map((appointment) => {
          if (changed[appointment.id]) {
            UpdateAppointment({ variables: { ...changed[appointment.id], id: appointment.id } })
            return { ...appointment, ...changed[appointment.id] }
          } else {
            return appointment
          }
        });
      }

      if (deleted) {
        tempdata = tempdata.filter((appointment) => {
          if (appointment.id === deleted) {
            DeleteAppointment({ variables: { ...deleted[appointment.id], id: appointment.id } })
            return false;
          } else {
            return true;
          }
        });
      }

      console.log('endoftheday', tempdata);

      return tempdata;
    });
  };

  const BasicLayout = ({ onFieldChange, appointmentData, ...restProps }) => {
    const onCustomFieldChange = (nextValue) => {
      onFieldChange({ patientId: nextValue });
    };
  
    return (
      <AppointmentForm.BasicLayout
        appointmentData={appointmentData}
        onFieldChange={onFieldChange}
        {...restProps}
      >
        <AppointmentForm.Label
          text="Patient"
          type="title"
        />
        <AppointmentForm.TextEditor
          value={appointmentData.patientId}
          onValueChange={onCustomFieldChange}
          placeholder="Enter patient name"
        />
      </AppointmentForm.BasicLayout>
    );
  };

  if (!data && !sData) {
    return <div>"loading"</div>
  }

  return (
    <>
      <Paper style={{ textAlign: "center", zIndex: '100' }}>
        <Scheduler data={appointments}>
          <ViewState CurrentDate="2022-04-27" defaultCurrentViewName="Week" />
          <EditingState onCommitChanges={({ added, changed, deleted }) => {
            if (added) {
              add(added)
            }
            if (changed || deleted) {
              crud({ changed, deleted })
            }
          }} />

          <GroupingState
            grouping={[
              {
                resourceName: "staffId",
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
                fieldName: "staffId",
                title: "Doctor",
                instances: doctors ? doctors : [{ text: 'Doctor', id: 'doctor' }],
              }
            ]}
            mainResourceName="staffId"
          />

          <IntegratedGrouping />
          <AppointmentTooltip showDeleteButton showOpenButton />
          <AppointmentForm basicLayoutComponent={BasicLayout} />

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
