import { useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { PickersDay, PickersDayProps } from "@mui/x-date-pickers/PickersDay";
import { Typography, Box, useTheme, Grid } from "@mui/material";
import { useQuery } from "@apollo/client";
import { reduce, map, size } from "lodash";
import { GetAppointments } from "../../../graphql";
import { Loading } from "../..";

type AppointmentsDataType = {
  clinicId: string;
  endDate: string;
  notes: string;
  patientId: string;
  serviceId: string;
  staffId: string;
  startDate: string;
  status: string;
  title: string;
  __typename: string;
  _id: string;
};
type AppointmentsByDateType = {
  [key: string]: Array<AppointmentsDataType>;
};

const formatDate = (date: Date) =>
  `${date.getFullYear()}-${
    date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1
  }-${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}`;

const Dot = () => {
  const { palette, spacing } = useTheme();

  return (
    <Box
      bottom={spacing(1)}
      position="absolute"
      width={spacing(0.5)}
      height={spacing(0.5)}
      bgcolor={palette.error.main}
      borderRadius={spacing(0.5)}
    />
  );
};

const AppointmentOfDay = ({
  appointments,
  currentDate,
}: {
  appointments: AppointmentsByDateType;
  currentDate: Date;
}) => {
  if (size(appointments[formatDate(currentDate)]) === 0)
    return (
      <Grid item xs={6} style={{ overflow: "scroll" }}>
        <Typography>{formatDate(currentDate)}</Typography>
        <Typography py={2}>Төлөвлөсөн эмчилгээ алга</Typography>
      </Grid>
    );

  return (
    <Grid item xs={6} style={{ overflow: "scroll" }}>
      <Typography>{formatDate(currentDate)}</Typography>
      {map(
        appointments[formatDate(currentDate)],
        ({ patientId, notes, startDate }, index) => {
          const date = new Date(startDate);
          return (
            <Box key={`appoint-${index}`} borderBottom="1px solid black" py={2}>
              <Typography>{`Өвчтөн: ${patientId}`}</Typography>
              <Typography>{`Цаг: ${date.getHours()}:${date.getMinutes()}`}</Typography>
              <Typography>{`Тэмдэглэл: ${notes}`}</Typography>
            </Box>
          );
        }
      )}
    </Grid>
  );
};

export const Calendar = () => {
  const [value, setValue] = useState<Date>(new Date());

  const clinicId = window.sessionStorage.getItem("clinicId");
  const { loading, data: GetAppointmentsData } = useQuery(GetAppointments, {
    variables: { clinicId },
  });
  const {
    getAppointments: appointments,
  }: { getAppointments: Array<AppointmentsDataType> } =
    GetAppointmentsData || {};

  const appointmentsByDate = reduce(
    appointments,
    (prev: AppointmentsByDateType, cur) => {
      const { startDate, status } = cur;
      const formatedDate = new Date(startDate).toISOString().slice(0, 10);
      const prevData = prev[formatedDate] || [];

      return status === "active"
        ? { ...prev, [formatedDate]: [...prevData, cur] }
        : prev;
    },
    {}
  );
  const renderDay = (
    date: Date,
    selectedDates: Array<Date | null>,
    pickersDayProps: PickersDayProps<Date>
  ) => {
    const { selected } = pickersDayProps;
    const formatedDate = formatDate(date);

    return (
      <Box
        position="relative"
        display="flex"
        justifyContent="center"
        alignItems="center"
        key={date.toISOString()}
      >
        <PickersDay {...pickersDayProps} />
        {!selected && appointmentsByDate[formatedDate] && <Dot />}
      </Box>
    );
  };

  if (loading) return <Loading />;

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Grid container>
        <AppointmentOfDay
          appointments={appointmentsByDate}
          currentDate={value}
        />
        <Grid item xs={6}>
          <StaticDatePicker
            displayStaticWrapperAs="desktop"
            openTo="day"
            renderDay={renderDay}
            value={value}
            onChange={(newValue) => {
              setValue(newValue || new Date());
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </Grid>
      </Grid>
    </LocalizationProvider>
  );
};
