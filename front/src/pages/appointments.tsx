import { Paper } from "@mui/material";
import "./styles.css";
import {
  ViewState,
  EditingState,
  IntegratedEditing,
  GroupingState,
  IntegratedGrouping
} from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  MonthView,
  Appointments,
  AppointmentTooltip,
  AppointmentForm,
  WeekView,
  DayView,
  Toolbar,
  DateNavigator,
  ViewSwitcher,
  ConfirmationDialog,
  GroupingPanel,
  Resources
} from "@devexpress/dx-react-scheduler-material-ui";
import { useState } from "react";

export default function App() {
  const [data, setData] = useState(dat);

  const crud = ( added, changed, deleted ) => {
    console.log(added, changed, deleted);
    setData((data) => {
      let tempdata = data;

      if (added) {
        const startingAddedId =
          tempdata.length > 0 ? tempdata[tempdata.length - 1].id + 1 : 0;
        tempdata = [...tempdata, { id: startingAddedId, ...added }];
      }
      if (changed) {
        tempdata = tempdata.map((appointment) =>
          changed[appointment.id]
            ? { ...appointment, ...changed[appointment.id] }
            : appointment
        );
      }
      if (deleted) {
        console.log("dsafgd");
        tempdata = tempdata.filter((appointment) => {
          return appointment.id !== deleted;
        });
      }

      return tempdata;
    });
  };

  return (
    <Paper>
      <Scheduler data={data}>
        <ViewState CurrentDate="2022-04-08" defaultCurrentViewName="Month" />
        <EditingState onCommitChanges={crud} />
        <GroupingState
          grouping={[
            {
              resourceName: "doctors"
            }
          ]}
        />
        <IntegratedEditing />

        <MonthView />
        <WeekView startDayHour={9} endDayHour={19} />
        <DayView startDayHour={9} endDayHour={19} />

        <Appointments />

        <Resources
          data={[
            {
              fieldName: "doctors",
              title: "Doctor",
              instances: doctors
            }
          ]}
          mainResourceName="doctors"
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
}

const doctors = [
  {
    text: "Andrew Glover",
    id: 1
  },
  {
    text: "Arnie Schwartz",
    id: 2
  }
];

const dat = [
  {
    title: "Website Re-Design Plan",
    startDate: new Date(2022, 3, 23, 9, 30),
    doctors: 1,
    id: 0,
    endDate: new Date(2022, 3, 23, 11, 30)
  },
  {
    id: 1,
    title: "Book Flights to San Fran for Sales Trip",
    startDate: new Date(2022, 3, 23, 12, 0),
    doctors: 2,
    endDate: new Date(2022, 3, 23, 13, 0)
  },
  {
    id: 2,
    title: "Install New Router in Dev Room",
    doctors: 1,
    startDate: new Date(2022, 3, 23, 14, 30),
    endDate: new Date(2022, 3, 23, 15, 30)
  },
  {
    id: 3,
    title: "Approve Personal Computer Upgrade Plan",
    startDate: new Date(2022, 3, 24, 10, 0),
    doctors: 1,
    endDate: new Date(2022, 3, 24, 11, 0)
  },
  {
    id: 4,
    title: "Final Budget Review",
    startDate: new Date(2022, 3, 24, 12, 0),
    doctors: 2,
    endDate: new Date(2022, 3, 24, 13, 35)
  },
  {
    id: 5,
    title: "New Brochures",
    startDate: new Date(2022, 3, 24, 14, 30),
    doctors: 1,
    endDate: new Date(2022, 3, 24, 15, 45)
  },
  {
    id: 6,
    title: "Install New Database",
    startDate: new Date(2022, 3, 25, 9, 45),
    doctors: 2,
    endDate: new Date(2022, 3, 25, 11, 15)
  },
  {
    id: 7,
    title: "Approve New Online Marketing Strategy",
    startDate: new Date(2022, 3, 25, 12, 0),
    doctors: 1,
    endDate: new Date(2022, 3, 25, 14, 0)
  },
  {
    id: 8,
    title: "Upgrade Personal Computers",
    startDate: new Date(2022, 3, 25, 15, 15),
    doctors: 2,
    endDate: new Date(2022, 3, 25, 16, 30)
  },
  {
    id: 9,
    title: "Customer Workshop",
    startDate: new Date(2022, 3, 26, 11, 0),
    doctors: 1,
    endDate: new Date(2022, 3, 26, 12, 0)
  },
  {
    id: 10,
    title: "Prepare 2015 Marketing Plan",
    startDate: new Date(2022, 3, 26, 11, 0),
    doctors: 1,
    endDate: new Date(2022, 3, 26, 13, 30)
  },
  {
    id: 11,
    title: "Brochure Design Review",
    startDate: new Date(2022, 3, 26, 14, 0),
    doctors: 1,
    endDate: new Date(2022, 3, 26, 15, 30)
  },
  {
    id: 12,
    title: "Create Icons for Website",
    startDate: new Date(2022, 3, 27, 10, 0),
    doctors: 1,
    endDate: new Date(2022, 3, 27, 11, 30)
  },
  {
    id: 13,
    title: "Upgrade Server Hardware",
    startDate: new Date(2022, 3, 27, 14, 30),
    doctors: 1,
    endDate: new Date(2022, 3, 27, 16, 0)
  },
  {
    id: 14,
    title: "Submit New Website Design",
    startDate: new Date(2022, 3, 27, 16, 30),
    doctors: 1,
    endDate: new Date(2022, 3, 27, 18, 0)
  },
  {
    id: 15,
    title: "Launch New Website",
    startDate: new Date(2022, 3, 26, 12, 20),
    doctors: 1,
    endDate: new Date(2022, 3, 26, 14, 0)
  },
  {
    id: 16,
    title: "Website Re-Design Plan",
    startDate: new Date(2022, 3, 16, 9, 30),
    doctors: 1,
    endDate: new Date(2022, 3, 16, 15, 30)
  },
  {
    id: 17,
    title: "Book Flights to San Fran for Sales Trip",
    startDate: new Date(2022, 3, 16, 12, 0),
    doctors: 1,
    endDate: new Date(2022, 3, 16, 13, 0)
  },
  {
    id: 18,
    title: "Install New Database",
    startDate: new Date(2022, 3, 17, 15, 45),
    doctors: 1,
    endDate: new Date(2022, 3, 18, 12, 15)
  },
  {
    id: 19,
    title: "Approve New Online Marketing Strategy",
    startDate: new Date(2022, 3, 18, 12, 35),
    doctors: 1,
    endDate: new Date(2022, 3, 18, 14, 15)
  },
  {
    id: 20,
    title: "Upgrade Personal Computers",
    startDate: new Date(2022, 3, 19, 15, 15),
    doctors: 1,
    endDate: new Date(2022, 3, 20, 20, 30)
  },
  {
    id: 21,
    title: "Prepare 2015 Marketing Plan",
    startDate: new Date(2022, 3, 20, 20, 0),
    doctors: 1,
    endDate: new Date(2022, 3, 20, 13, 30)
  },
  {
    id: 22,
    title: "Brochure Design Review",
    startDate: new Date(2022, 3, 20, 14, 10),
    doctors: 1,
    endDate: new Date(2022, 3, 20, 15, 30)
  },
  {
    id: 23,
    title: "Vacation",
    startDate: new Date(2022, 5, 22),
    doctors: 1,
    endDate: new Date(2022, 3, 1)
  },
  {
    id: 24,
    title: "Vacation",
    startDate: new Date(2022, 3, 28),
    doctors: 2,
    endDate: new Date(2022, 4, 7)
  }
];
