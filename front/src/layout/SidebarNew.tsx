import { FC } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PeopleIcon from "@mui/icons-material/People";
import MedicationIcon from '@mui/icons-material/Medication';
import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra';
import HistoryIcon from '@mui/icons-material/History';
import { Link, useLocation } from "react-router-dom";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const menuItems = [
  { href: "/", title: "Хяналтын самбар",icon: <DashboardIcon /> },
  { href: "staff", title: "Ажилчид", icon: <PeopleIcon /> },
  { href: "appointment", title: "Цаг авах", icon: <CalendarMonthIcon /> },
  { href: "clinics", title: "Эмнэлэг", icon: <LocalHospitalIcon /> },
  { href: "services", title: "Эмчилгээ", icon: <MedicationIcon /> },
  { href: "patients", title: "Өвчтөнүүд", icon: <AirlineSeatReclineExtraIcon /> },
  { href: "patient-histories", title: "Өвчтөний түүх", icon: <HistoryIcon /> },
];

export const SideBarNew: FC = () => {
  return (
    <>
      {menuItems.map(({ href, title, icon }, index) => {
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
