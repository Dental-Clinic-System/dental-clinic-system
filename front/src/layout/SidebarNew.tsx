import { FC } from "react";
// import { useRouter } from "next/router";
// import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
// import { blue } from '@mui/material/colors';
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
// const menuItems = [
//   {
//     href: "/",
//     title: "Хянах самбар",
//     icon: <DashboardIcon />,
//   },
//   {
//     href: "/orders",
//     title: "Захиалга",
//     icon: <ShoppingCartIcon />,
//   },
//   {
//     href: "/staff",
//     title: "Ажилтан",
//     icon: <PeopleIcon />,
//   },
// ];

const menuItems = [
  { href: "/", title: "Home" },
  { href: "appointment", title: "Appointments", icon: <CalendarMonthIcon /> },
  { href: "users", title: "Stafff" },
  // { path: "clinics", text: "Clinics" },
  { href: "services", title: "Services" },
  { href: "patients", title: "Patients" },
  { href: "patient-histories", title: "Patient Histories" },
];

export const SideBarNew: FC = () => {
  //   const { push } = useRouter();
  const { signout } = useAuth();
  return (
    <>
      {menuItems.map(({ href, title, icon }, index) => {
        return (
          <ListItem button component={Link} to={href}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={title} />
          </ListItem>
        );
      })}
      <div
        style={{ margin: "30px 2px", textDecoration: "underline" }}
        onClick={signout}
      >
        Гарах
      </div>
    </>
  );
};
