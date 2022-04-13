import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Sidebar } from "../layout/SideBar";

export const Appointment = () => {
  return (
    <>
      <Box>This is appointment screen</Box>
      <h1>h1 simple</h1>
      <Typography>
        <h1>h1 inside Typography</h1>
      </Typography>
      <Typography variant="h1">Typography h1 variant</Typography>
    </>
  );
};
