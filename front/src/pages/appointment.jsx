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

const doctorId = [
  {
    text: "Candice Sumore",
    id: "Doofenshmirtz",
    clinicId: "St.OurDaddy-inator"
  },
  {
    text: "Dr. Doofenshmirtz",
    id: 'doctor1',
    clinicId: "St.OurDaddy-inator",
  },
];

const patientId = [
  {
    text: "Sameer Dragon",
    id: 'Perry',
    clinicId: 'St.OurDaddy-inator',
    doctorId: 'Doofenshmirtz'
  },
  {
    text: "Chokhen Bofah",
    id: 'patient1',
    clinicId: 'St.OurDaddy-inator',
    doctorId: 'doctor1'
  },
  {
    text: "Arnold",
    id: 'Arnold',
    clinicId: 'St.OurDaddy-inator',
    doctorId: 'Doofenshmirtz'
  }
]

// const dat = [
//   {
//     title: "Website Re-Design Plan",
//     startDate: new Date(2022, 3, 23, 9, 30),
//     doctorId: 1,
//     id: 0,
//     endDate: new Date(2022, 3, 23, 11, 30),
//   },
//   {
//     id: 1,
//     title: "Book Flights to San Fran for Sales Trip",
//     startDate: new Date(2022, 3, 23, 12, 0),
//     doctorId: 2,
//     endDate: new Date(2022, 3, 23, 13, 0),
//   },
//   {
//     id: 2,
//     title: "Install New Router in Dev Room",
//     doctorId: 1,
//     startDate: new Date(2022, 3, 23, 14, 30),
//     endDate: new Date(2022, 3, 23, 15, 30),
//   },
//   {
//     id: 3,
//     title: "Approve Personal Computer Upgrade Plan",
//     startDate: new Date(2022, 3, 24, 10, 0),
//     doctorId: 1,
//     endDate: new Date(2022, 3, 24, 11, 0),
//   },
//   {
//     id: 4,
//     title: "Final Budget Review",
//     startDate: new Date(2022, 3, 24, 12, 0),
//     doctorId: 2,
//     endDate: new Date(2022, 3, 24, 13, 35),
//   },
//   {
//     id: 5,
//     title: "New Brochures",
//     startDate: new Date(2022, 3, 24, 14, 30),
//     doctorId: 1,
//     endDate: new Date(2022, 3, 24, 15, 45),
//   },
//   {
//     id: 6,
//     title: "Install New Database",
//     startDate: new Date(2022, 3, 25, 9, 45),
//     doctorId: 2,
//     endDate: new Date(2022, 3, 25, 11, 15),
//     notes: 'What the fuck'
//   },
//   {
//     id: 7,
//     title: "Approve New Online Marketing Strategy",
//     startDate: new Date(2022, 3, 25, 12, 0),
//     doctorId: 1,
//     endDate: new Date(2022, 3, 25, 14, 0),
//   },
//   {
//     id: 8,
//     title: "Upgrade Personal Computers",
//     startDate: new Date(2022, 3, 25, 15, 15),
//     doctorId: 2,
//     endDate: new Date(2022, 3, 25, 16, 30),
//   },
//   {
//     id: 9,
//     title: "Customer Workshop",
//     startDate: new Date(2022, 3, 26, 11, 0),
//     doctorId: 1,
//     endDate: new Date(2022, 3, 26, 12, 0),
//   },
//   {
//     id: 10,
//     title: "Prepare 2015 Marketing Plan",
//     startDate: new Date(2022, 3, 26, 11, 0),
//     doctorId: 1,
//     endDate: new Date(2022, 3, 26, 13, 30),
//   },
//   {
//     id: 11,
//     title: "Brochure Design Review",
//     startDate: new Date(2022, 3, 26, 14, 0),
//     doctorId: 1,
//     endDate: new Date(2022, 3, 26, 15, 30),
//   },
//   {
//     id: 12,
//     title: "Create Icons for Website",
//     startDate: new Date(2022, 3, 27, 10, 0),
//     doctorId: 1,
//     endDate: new Date(2022, 3, 27, 11, 30),
//   },
//   {
//     id: 13,
//     title: "Upgrade Server Hardware",
//     startDate: new Date(2022, 3, 27, 14, 30),
//     doctorId: 1,
//     endDate: new Date(2022, 3, 27, 16, 0),
//   },
//   {
//     id: 14,
//     title: "Submit New Website Design",
//     startDate: new Date(2022, 3, 27, 16, 30),
//     doctorId: 1,
//     endDate: new Date(2022, 3, 27, 18, 0),
//   },
//   {
//     id: 15,
//     title: "Launch New Website",
//     startDate: new Date(2022, 3, 26, 12, 20),
//     doctorId: 1,
//     endDate: new Date(2022, 3, 26, 14, 0),
//   },
//   {
//     id: 16,
//     title: "Website Re-Design Plan",
//     startDate: new Date(2022, 3, 16, 9, 30),
//     doctorId: 1,
//     endDate: new Date(2022, 3, 16, 15, 30),
//   },
//   {
//     id: 17,
//     title: "Book Flights to San Fran for Sales Trip",
//     startDate: new Date(2022, 3, 16, 12, 0),
//     doctorId: 1,
//     endDate: new Date(2022, 3, 16, 13, 0),
//   },
//   {
//     id: 18,
//     title: "Install New Database",
//     startDate: new Date(2022, 3, 17, 15, 45),
//     doctorId: 1,
//     endDate: new Date(2022, 3, 18, 12, 15),
//     notes: 'What the fuck',
//     patientId: 1
//   },
//   {
//     id: 19,
//     title: "Approve New Online Marketing Strategy",
//     startDate: new Date(2022, 3, 18, 12, 35),
//     doctorId: 1,
//     endDate: new Date(2022, 3, 18, 14, 15),
//   },
//   {
//     id: 20,
//     title: "Upgrade Personal Computers",
//     startDate: new Date(2022, 3, 19, 15, 15),
//     doctorId: 1,
//     endDate: new Date(2022, 3, 20, 20, 30),
//   },
//   {
//     id: 21,
//     title: "Prepare 2015 Marketing Plan",
//     startDate: new Date(2022, 3, 20, 20, 0),
//     doctorId: 1,
//     endDate: new Date(2022, 3, 20, 13, 30),
//   },
//   {
//     id: 22,
//     title: "Brochure Design Review",
//     startDate: new Date(2022, 3, 20, 14, 10),
//     doctorId: 1,
//     endDate: new Date(2022, 3, 20, 15, 30),
//   },
//   {
//     id: 23,
//     title: "Vacation",
//     startDate: new Date(2022, 5, 22),
//     doctorId: 1,
//     endDate: new Date(2022, 3, 1),
//   },
//   {
//     id: 24,
//     title: "Vacation",
//     startDate: new Date(2022, 3, 28),
//     doctorId: 2,
//     endDate: new Date(2022, 4, 7),
//   },
// ];
