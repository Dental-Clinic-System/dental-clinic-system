import React from 'react';
import { Box, Divider, Toolbar, ListItem, List, ListItemText } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { Link, useLocation } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    color: '#404040',
  },
  active: {
    color: '#467db5',
    background: '#e8f6ff',
    borderLeft: `5px solid #467db5`,
  },
});

export const Sidebar = () => {
  const classes = useStyles();
  const { pathname } = useLocation();

  const route = [
    { path: "/", text: "Home" },
    { path: "/appointment", text: "Appointments" },
    { path: "/users", text: "Users" },
    // { path: "/clinics", text: "Clinics" },
    { path: "/services", text: "Services" },
    { path: "/patients", text: "Patients" },
  ];

  return (
    <Box>
      <Toolbar />
      {sessionStorage.getItem("clinicTitle")}
      <Divider />
      <List>
        {route.map((data) => (
          <ListItem
            to={data.path}
            key={data.path} 
            component={Link}
            selected={data.path === pathname}
            className={data.path === pathname ? classes.active : classes.root}
          >
            <ListItemText primary={data.text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );
};
