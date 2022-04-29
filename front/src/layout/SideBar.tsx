import React from "react";
import {
  Box,
  Divider,
  Toolbar,
  ListItem,
  List,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const userType = sessionStorage.getItem("username")

  const userRoute = [
    { path: "/", text: "Home" },
    { path: "appointment", text: "Appointments" },
    { path: "users", text: "Staff" },
    { path: "services", text: "Services" },
    { path: "patients", text: "Patients" },
    { path: "patient-histories", text: "Patient Histories" },
  ];
  const adminRoute = [ { path: "clinics", text: "Clinics" } ];
  const route = (userType === "super") ? adminRoute : userRoute;

  const signOutTemp = () => {
    sessionStorage.clear();
    window.location.replace("http://localhost:3000/625fca30c1cf951c042bd5ec");
  };

  return (
    <Box>
      <Toolbar />
      {sessionStorage.getItem("clinicTitle")}
      <button onClick={signOutTemp}>Sign out</button>
      <Divider />
      <List>
        {route.map((data) => (
          <ListItem button component={Link} to={data.path}>
            <ListItemText primary={data.text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );
};
