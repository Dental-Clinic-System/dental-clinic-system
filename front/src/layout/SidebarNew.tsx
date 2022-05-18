import { FC } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import PeopleIcon from "@mui/icons-material/People";
import MedicationIcon from "@mui/icons-material/Medication";
import AirlineSeatReclineExtraIcon from "@mui/icons-material/AirlineSeatReclineExtra";
import HistoryIcon from "@mui/icons-material/History";
import { Link } from "react-router-dom";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Inventory, InsertDriveFile } from "@mui/icons-material";

export const SideBarNew: FC = () => {
  const userRoute = [
    { href: "/", title: "Хяналтын самбар", icon: <DashboardIcon /> },
    { href: "staff", title: "Ажилчид", icon: <PeopleIcon /> },
    { href: "appointment", title: "Цаг авах", icon: <CalendarMonthIcon /> },
    { href: "services", title: "Эмчилгээ", icon: <MedicationIcon /> },
    {
      href: "patients",
      title: "Өвчтөнүүд",
      icon: <AirlineSeatReclineExtraIcon />,
    },
    { href: "supplies", title: "Бараа материал", icon: <Inventory /> },
    { href: "report", title: "Тайлан", icon: <InsertDriveFile /> },
  ];
  const userType = sessionStorage.getItem("username");
  const adminRoute = [
    { href: "clinics", title: "Clinics", icon: <LocalHospitalIcon /> },
  ];
  const route = userType === "super" ? adminRoute : userRoute;

  return (
    <>
      {route.map(({ href, title, icon }, index) => {
        return (
          <ListItem button component={Link} to={href} key={href}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={title} />
          </ListItem>
        );
      })}
    </>
  );
};
