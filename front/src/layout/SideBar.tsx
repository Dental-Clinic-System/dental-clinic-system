import React, { useState } from 'react';
import { Box, Divider, Toolbar, ListItem, List, ListItemText } from '@mui/material'
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const [selectedIndex, setSelectedIndex] = useState();
  
  const route = [
    { path: "/", text: "Home" },
    { path: "appointment", text: "Appointments" },
    { path: "users", text: "Users" },
    { path: "clinics", text: "Clinics" },
    { path: "services", text: "Services" },
    { path: "patients", text: "Patients" },
    { path: "patient-histories", text: "Patient Histories" },
  ];

  return (
    <Box>
      <Toolbar />
      <Divider />
      <List>
        {route.map((data) => (
          <ListItem button  component={Link} to={data.path}>
            <ListItemText primary={data.text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );
};
