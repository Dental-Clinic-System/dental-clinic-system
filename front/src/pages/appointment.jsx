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
import { GetAppointments } from "../graphql/queries";
import { UPDATE_APPOINTMENT } from '../graphql/mutations'

export const Appointment = () => {
  const [appointments, setAppointments] = useState([{}]);
  const { loading, error, data } = useQuery(GetAppointments);
  const [UpdateAppointment] = useMutation(UPDATE_APPOINTMENT)
  const [doctors, setDoctors] = useState([{}]);
  const [patients, setPatients] = useState([{}])

  const staff = [
    {
      _id: "625fcfafe1e484292eb944a2",
      clinicId: "625fca30c1cf951c042bd5ec",
      username: "Test",
    },
    {
      _id: "6260f6a7f7cad775907df15d",
      clinicId: "625fca30c1cf951c042bd5ec",
      username: "Dorj",
    }
  ]
  useEffect(() => {
    let formattedData = [];
    let tempDoctor = [];
    let tempPatient = [];

    if (data) {
      data.getAppointments?.map((e, i) => {
        let temp = {
          ...e,
          startDate: new Date(e.startDate),
          endDate: new Date(e.endDate),
          id: e._id
        }
        formattedData.push(temp)
  
        tempPatient.push({ id: e.patientId, doctor: e.doctorId, text: e.patientId })
      })

      staff.map((e, i) => {
        let temp = {
          ...e,
          text: e.username,
          id: e._id,
        }
        tempDoctor.push(temp)
      })
  
      setDoctors(tempDoctor)
      setPatients(tempPatient)
      setAppointments(formattedData)
      console.log('data', formattedData)
    }

  }, [loading])

  const crud = ({ added, changed, deleted }) => {
    console.log(added, changed, deleted);
    setAppointments((data) => {
      let tempdata = data;

      if (added) {
        const startingAddedId =
          tempdata.length > 0 ? tempdata[tempdata.length - 1].id + 1 : 0;
        tempdata = [...tempdata, { id: startingAddedId, ...added }];
      }
      if (changed) {
        tempdata = tempdata.map((appointment) => {
          if (changed[appointment.id]) {
            let x = changed[appointment.id]
            UpdateAppointment({
              variables: {
                clinicId: "626282837d8400cd34a9e85d",
                doctorId: "6260f6a7f7cad775907df15d",
                patientId: "Arlos",
                startDate: "2022-4-25 10:00:00",
                title: "What the fuck is going on",
                status: "active",
                notes: "nothing",
                endDate: "2022-4-25 12:00:00",
                id: "62665e9373670063c583ed0d",
                serviceId: null
              }
            })
            return { ...appointment, ...changed[appointment.id] }
          } else {
            return appointment
          }
        }
        );
        console.log(changed[0])

        let variables = {
          clinicId: "626282837d8400cd34a9e85d",
          doctorId: "6260f6a7f7cad775907df15d",
          patientId: "Arlos",
          startDate: "2022-4-25 10:00:00",
          title: "What the fuck is going on",
          status: "active",
          notes: "nothing",
          endDate: "2022-4-25 12:00:00",
          id: "62665e9373670063c583ed0d",
          serviceId: null
        }
      }
      if (deleted) {
        console.log("dsafgd");
        tempdata = tempdata.filter((appointment) => {
          return appointment.id !== deleted;
        });
      }

      console.log(tempdata);

      return tempdata;
    });
  };

  return (
    <Paper style={{ textAlign: "center" }}>
      <Scheduler data={appointments && appointments}>
        <ViewState CurrentDate="2022-04-08" defaultCurrentViewName="Week" />
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
              instances: doctors && doctors,
            },
            {
              instances: patients && patients,
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
